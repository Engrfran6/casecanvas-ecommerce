import {ExampleCustomCases} from '@/components/ExmapleCustomCases';
import FeedbackCard from '@/components/FeedbackCard';
import HappyCustomers from '@/components/HappyCustomers';
import {Icons} from '@/components/Icons';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Phone from '@/components/Phone';

import {buttonVariants} from '@/components/ui/button';
import {ArrowRight, Check} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const feedbacks = [
    {
      rating: 3,
      reviewText:
        'I usually keep my phone together with my keys in my pocket and that led to some pretty heavy scratchmarks on all of my last phone cases. This one, besides a barely noticeable scratch on the corner,',
      highlightedText: 'looks brand new after about half a year',
      userImage: '/users/bella.jpg',
      userName: 'Bella P. Dimgba',
      verified: true,
    },
    {
      rating: 5,
      reviewText:
        'The case feels durable and I even got a compliment on the design. Had the case for two and a half months now and',
      highlightedText: 'the image is super clear',
      userImage: '/users/steve.jpg',
      userName: 'Francis U.',
      verified: true,
    },
    // Add more reviews as needed
  ];

  return (
    <div className="bg-slate-50 grainy-light">
      <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="absolute w-28 left-0 -top-20 hidden lg:block">
              {/* i forgot this div right here in the video, it's purely visual gradient and looks nice */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
              <img src="/snake-1.png" className="w-full" alt="" />
            </div>
            <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
              Your Image, Your Style: Crafted on a{' '}
              <span className="bg-blue-700 px-2 text-white">Custom</span> Phone Case
            </h1>
            <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
              Turn your favorite memories into a unique, {''}
              <span className="font-semibold">one-of-a-kind</span> phone case. With CaseCanvas,
              you’re not just protecting your phone—you’re preserving your memories.
            </p>

            <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
              <div className="space-y-2">
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />
                  High-quality, durable material
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />5 year print guarantee
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />
                  Modern iPhone models supported
                </li>
              </div>
            </ul>

            <HappyCustomers />
          </div>
        </div>

        <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
          <div className="relative md:max-w-xl">
            <img
              src="/your-image.png"
              className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              alt=""
            />
            <img src="/line.png" className="absolute w-20 -left-6 -bottom-6 select-none" alt="" />
            <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
          </div>
        </div>

        <Link
          href="/configure/upload"
          className="sm:mx-auto md:mx-0 lg:mx-0 sm:text-center md:text-left hidden sm:flex items-center gap-1 mt-16 text-sm border rounded-lg w-max py-2 px-3 border-green-600 text-green-600">
          Customise case
          <ArrowRight className="ml-1.5 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>

      {/* value proposition section */}
      <section className="bg-slate-100 grainy-dark py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our{' '}
              <span className="relative px-2">
                customers{' '}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
              </span>
              say
            </h2>
            <img src="/snake-2.png" className="w-24 order-0 lg:order-2" alt="" />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            {feedbacks.map((feedback, index) => (
              <FeedbackCard key={index} {...feedback} />
            ))}
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <ExampleCustomCases />
        </div>
      </section>

      <MaxWidthWrapper className="py-24">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              Upload your photo and get{' '}
              <span className="relative px-2 bg-blue-700 text-white">your own case</span> now
            </h2>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
            <img
              src="/arrow.png"
              className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
              alt=""
            />

            <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
              <img
                src="/horse.jpg"
                className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                alt=""
              />
            </div>

            <Phone className="w-60" imgSrc="/horse_phone.jpg" />
          </div>
        </div>

        <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
          <li className="w-fit">
            <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
            High-quality silicone material
          </li>
          <li className="w-fit">
            <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
            Scratch- and fingerprint resistant coating
          </li>
          <li className="w-fit">
            <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
            Wireless charging compatible
          </li>
          <li className="w-fit">
            <Check className="h-5 w-5 text-green-600 inline mr-1.5" />5 year print warranty
          </li>

          <div className="flex justify-center">
            <Link
              className={buttonVariants({
                size: 'lg',
                className: 'mx-auto mt-8',
              })}
              href="/configure/upload">
              Create your case now <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
          </div>
        </ul>
      </MaxWidthWrapper>
    </div>
  );
}
