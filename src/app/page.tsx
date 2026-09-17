import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Benefits from "@/components/sections/Benefits";
import Teachers from "@/components/sections/Teachers";
import HowToStart from "@/components/sections/HowToStart";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Location from "@/components/sections/Location";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <WhyChooseUs />
      <Benefits />
      <Teachers />
      <HowToStart />
      <Testimonials />
      <Faq />
      <Location />
    </>
  );
}
