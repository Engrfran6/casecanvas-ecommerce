// 'use server';

// import {BASE_PRICE, PRODUCT_PRICES} from '@/config/products';
// import {db} from '@/db';
// import {stripe} from '@/lib/stripe';
// import {convertTo24ByteChar} from '@/lib/utils';
// import {getKindeServerSession} from '@kinde-oss/kinde-auth-nextjs/server';
// import {Order} from '@prisma/client';

// export const createCheckoutSession = async ({configId}: {configId: string}) => {
//   const configuration = await db.configuration.findUnique({
//     where: {id: configId},
//   });

//   if (!configuration) {
//     throw new Error('No such configuration found');
//   }

//   const {getUser} = getKindeServerSession();
//   const user = await getUser();

//   if (!user) {
//     throw new Error('You need to be logged in');
//   }

//   const {finish, material} = configuration;

//   let price = BASE_PRICE;
//   if (finish === 'textured') price += PRODUCT_PRICES.finish.textured;
//   if (material === 'polycarbonate') price += PRODUCT_PRICES.material.polycarbonate;

//   let order: Order | undefined = undefined;

//   const existingOrder = await db.order.findFirst({
//     where: {
//       userId: convertTo24ByteChar(user.id),
//       configurationId: configuration.id,
//     },
//   });

//   if (existingOrder) {
//     order = existingOrder;
//   } else {
//     order = await db.order.create({
//       data: {
//         amount: price / 100,
//         userId: convertTo24ByteChar(user.id),
//         configurationId: configuration.id,
//       },
//     });
//   }

//   const product = await stripe.products.create({
//     name: 'Custom iPhone Case',
//     images: [configuration.imageUrl],
//     default_price_data: {
//       currency: 'USD',
//       unit_amount: price,
//     },
//   });

//   const stripeSession = await stripe.checkout.sessions.create({
//     success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/thank-you?orderId=${order.id}`,
//     cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/configure/preview?id=${configuration.id}`,
//     payment_method_types: ['card'],
//     mode: 'payment',
//     shipping_address_collection: {allowed_countries: ['DE', 'US']},
//     metadata: {
//       userId: convertTo24ByteChar(user.id),
//       orderId: order.id,
//     },
//     line_items: [{price: product.default_price as string, quantity: 1}],
//   });

//   return {url: stripeSession.url};
// };

'use server';

import {BASE_PRICE, PRODUCT_PRICES} from '@/config/products';
import {db} from '@/db';
import {stripe} from '@/lib/stripe';
import {convertTo24ByteChar} from '@/lib/utils';
import {getKindeServerSession} from '@kinde-oss/kinde-auth-nextjs/server';
import {Order, OrderStatus} from '@prisma/client';

export const createCheckoutSession = async ({configId}: {configId: string}) => {
  try {
    // Fetch configuration with validation
    const configuration = await db.configuration.findUnique({
      where: {id: configId},
      include: {
        Order: true,
      },
    });

    if (!configuration) {
      throw new Error('Configuration not found');
    }

    // Get and validate user
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    if (!user) {
      throw new Error('Authentication required');
    }

    const userId = convertTo24ByteChar(user.id);

    // Calculate price
    let price = BASE_PRICE;
    if (configuration.finish === 'textured') {
      price += PRODUCT_PRICES.finish.textured;
    }
    if (configuration.material === 'polycarbonate') {
      price += PRODUCT_PRICES.material.polycarbonate;
    }

    // Find or create order with proper relations
    let order: Order;

    const existingOrder = await db.order.findFirst({
      where: {
        userId: userId,
        configurationId: configuration.id,
      },
      include: {
        configuration: true,
        user: true,
      },
    });

    if (existingOrder) {
      order = existingOrder;
    } else {
      order = await db.order.create({
        data: {
          amount: price / 100,
          isPaid: false,
          status: 'awaiting_shipment' as OrderStatus,
          user: {
            connect: {
              id: userId,
            },
          },
          configuration: {
            connect: {
              id: configuration.id,
            },
          },
        },
        include: {
          configuration: true,
          user: true,
        },
      });
    }

    // Create Stripe product
    const product = await stripe.products.create({
      name: 'Custom iPhone Case',
      images: [configuration.imageUrl],
      default_price_data: {
        currency: 'USD',
        unit_amount: price,
      },
      metadata: {
        configurationId: configuration.id,
        orderId: order.id,
      },
    });

    if (!product.default_price) {
      throw new Error('Failed to create Stripe product price');
    }

    // Create Stripe checkout session
    const stripeSession = await stripe.checkout.sessions.create({
      success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/thank-you?orderId=${order.id}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/configure/preview?id=${configuration.id}`,
      payment_method_types: ['card'],
      mode: 'payment',
      shipping_address_collection: {
        allowed_countries: ['DE', 'US'],
      },
      metadata: {
        userId: userId,
        orderId: order.id,
        configurationId: configuration.id,
      },
      line_items: [
        {
          price: product.default_price as string,
          quantity: 1,
        },
      ],
      customer_email: user.email ?? undefined,
    });

    if (!stripeSession.url) {
      throw new Error('Failed to create checkout session');
    }

    return {url: stripeSession.url};
  } catch (error) {
    console.error('Checkout session creation failed:', error);
    throw error;
  }
};
