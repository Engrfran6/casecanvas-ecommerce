import CasePreview from '@/components/CasePreview';
import {ExampleCustomCases} from '@/components/ExmapleCustomCases';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="bg-slate-50 grainy-light">
      <Hero />

      <CasePreview />
      <section className="bg-slate-100 grainy-dark py-24">
        <ExampleCustomCases />
        <Testimonials />
      </section>
    </div>
  );
}
