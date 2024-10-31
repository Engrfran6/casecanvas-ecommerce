import MaxWidthWrapper from './MaxWidthWrapper';
import Phone from './Phone';
import {ArrowRight, Check} from 'lucide-react';
import Link from 'next/link';
import {buttonVariants} from './ui/button';

const CasePreview = () => {
  const instructions = [
    {
      title: 'Select your Product Type',
      desc: 'Choose from custom phone cases, mugs, blankets and much, much more!',
    },
    {
      title: 'Customize it',
      desc: 'Use our incredibly awesome design tool to change colors, add text, monograms, upload photos and much more.',
    },
    {
      title: 'Love it',
      desc: 'Your custom items are made in the U.S.A and shipped with tracking information in 1-4 business days. Our orders are backed by our money back guarantee.',
    },
  ];

  return (
    <MaxWidthWrapper className=" pb-24 pt-16">
      <div className="mx-auto max-w-2xl sm:text-center mb-10 md:mb-20">
        <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900">
          Upload your photo and get{' '}
          <span className="relative px-2 bg-purple-600 text-white">your own case</span> now
        </h2>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 ">
        <div className=" p-3">
          <ul className="flex flex-col gap-4">
            {instructions.map((instruct, i) => (
              <li className="flex justify-center gap-1 text-center md:text-start">
                <span className="font-bold text-xl">{i + 1}.</span>
                <span className="flex flex-col gap-1">
                  <span className="text-xl font-bold">{instruct.title}</span>
                  <span className="text-sm">{instruct.desc}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="flex justify-center mt-4 md:mt-16">
            <Link
              className={buttonVariants({
                size: 'lg',
                className: 'mx-auto mt-8 bg-purple-600',
              })}
              href="/configure/upload">
              Try for free <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
          </div>
        </div>

        <div className="md:col-span-2 md:border-l-2 md:border-purple-200 pl-10">
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

          <ul className="grid md:grid-cols-2 mt-12 mx-auto sm:text-lg space-y-2 ">
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
          </ul>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};
export default CasePreview;
