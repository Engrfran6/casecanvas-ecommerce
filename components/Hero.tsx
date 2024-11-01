import {ArrowUpRightFromCircle, Check} from 'lucide-react';
import Link from 'next/link';
import HappyCustomers from './HappyCustomers';
import MaxWidthWrapper from './MaxWidthWrapper';
import Phone from './Phone';

const Hero = () => {
  return (
    <MaxWidthWrapper className="pb-24 pt-0 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-16 xl:pt-20 lg:pb-52">
      <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
        <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-4xl md:text-5xl lg:text-6xl">
            Your Image, Your Style Designed by You. {''}
            <span className="bg-purple-600 px-2 text-white">Ships Fast.</span>
          </h1>
          <p className="text-lg hidden md:flex"> Available for iPhone and Galaxy</p>
          <p className="mt-8 text-sm md:text-lg lg:pr-1 max-w-prose text-center lg:text-left text-balance md:text-wrap">
            Transform {''}
            <span className="font-semibold">
              your favorite memories into personalized decor, drinkware, apparel, and more.
            </span>{' '}
            Style meets memory, making every item one-of-a-kind.
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
          <Link
            href="/configure/upload"
            className="sm:mx-auto md:mx-0 lg:mx-0 text-center flex items-center gap-1 mt-12 md:mt-16 text-xl md:text-3xl rounded-lg w-max py-2 px-6 bg-purple-600  hover:bg-purple-500    text-white">
            Get started
            <ArrowUpRightFromCircle className="ml-1.5 h-5 w-5" />
          </Link>
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
          <Phone className="w-64" imgSrc="/upload-1.png" />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
export default Hero;
