'use server';

import {db} from '@/db';
import {convertTo24ByteChar} from '@/lib/utils';
import {getKindeServerSession} from '@kinde-oss/kinde-auth-nextjs/server';

export const getPaymentStatus = async ({orderId}: {orderId: string}) => {
  try {
    // 1. Validate session and user
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    if (!user?.id || !user.email) {
      console.error('Payment status check failed: User not authenticated');
      return false;
    }

    const userId = convertTo24ByteChar(user.id);

    // 2. Log the search parameters for debugging
    console.log('Searching for order with:', {
      orderId,
      userId,
      userEmail: user.email,
    });

    // 3. Find the order with detailed logging
    const order = await db.order.findFirst({
      where: {
        userId,
        id: orderId,
      },
      include: {
        billingAddress: true,
        configuration: true,
        shippingAddress: true,
        user: true,
      },
    });

    // 4. Log the result
    if (!order) {
      console.error('Payment status check failed: Order not found', {
        orderId,
        userId,
      });
      return false;
    }

    console.log('Order found:', {
      orderId: order.id,
      isPaid: order.isPaid,
      hasConfiguration: !!order.configuration,
      hasShippingAddress: !!order.shippingAddress,
      hasBillingAddress: !!order.billingAddress,
    });

    // 5. Validate required relations
    if (!order.configuration) {
      console.error('Payment status check failed: Missing configuration');
      return false;
    }

    // 6. Return based on payment status
    if (order.isPaid) {
      // Verify we have all required data before returning
      if (!order.shippingAddress || !order.billingAddress) {
        console.error('Payment status check failed: Missing addresses for paid order');
        return false;
      }

      return {
        id: order.id,
        amount: order.amount,
        isPaid: order.isPaid,
        status: order.status,
        configuration: order.configuration,
        shippingAddress: order.shippingAddress,
        billingAddress: order.billingAddress,
        user: order.user,
        createdAt: order.createdAt,
        updatedAt: order.updated,
      };
    }

    console.log('Order not paid yet:', {
      orderId: order.id,
      isPaid: order.isPaid,
    });

    return false;
  } catch (error) {
    console.error('Payment status check failed with error:', error);
    return false;
  }
};
