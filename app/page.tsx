import CasePreview from '@/components/CasePreview';
import {ExampleCustomCases} from '@/components/ExmapleCustomCases';
import FeedbackCard from '@/components/FeedbackCard';
import HappyCustomers from '@/components/HappyCustomers';
import Hero from '@/components/Hero';
import {Icons} from '@/components/Icons';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Phone from '@/components/Phone';
import Testimonials from '@/components/Testimonials';

import {ArrowUpRightFromCircle, Check} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-slate-50 grainy-light">
      <Hero />
      {/* value proposition section */}
      <CasePreview />
      <section className="bg-slate-100 grainy-dark py-24">
        <ExampleCustomCases />
        <Testimonials />
      </section>
    </div>
  );
}
