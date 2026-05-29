import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Features } from "@/components/sections/features";
import { ProductPreview } from "@/components/sections/product-preview";
import { ROI } from "@/components/sections/roi";
import { Pricing } from "@/components/sections/pricing";
import { Roadmap } from "@/components/sections/roadmap";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";
import { Waitlist } from "@/components/sections/waitlist";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main" className="relative">
        <Hero />
        <Problem />
        <Features />
        <ProductPreview />
        <ROI />
        <Pricing />
        <Roadmap />
        <Testimonials />
        <FinalCta />
        <Waitlist />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
