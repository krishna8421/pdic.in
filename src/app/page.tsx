import Benefits from "@/components/Benefits";
import type { Metadata } from "next";
import Booking from "@/components/Booking";
import Hero from "@/components/Hero";
import HowTo from "@/components/HowTo";
import Services from "@/components/Services";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "Dental Clinic in Wakad and Pimpri Chinchwad | Prateek Dental Care & Implant Centre",
  description: "Prateek Dental Care & Implant Centre offers expert dental services in Wakad and Pimpri Chinchwad. From dental implants to braces and root canals, our experienced team provides top-quality care. Call 7229832893 to book an appointment today!",
};

const Home = () => (
  <>
    <Hero />
    <About />
    <HowTo />
    <Services />
    <Benefits />
    <Booking />
  </>
);

export default Home;
