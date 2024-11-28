import FlexSection from "./FlexSection";
import Image from "next/image";
import heroImage from "../assets/hero.svg";
import ButtonLink from "./ButtonLink";

const Hero = () => (
  <FlexSection>
    <div className="flex-1">
      <h1 className="text-[2.6rem] font-bold tracking-wide">
        Exceptional<span className="text-accent"> Dental Care </span>for a
        Brighter Smile
      </h1>
      <p className="mt-6 text-lg text-secondary">
        Join our modern clinic for comprehensive dental solutions tailored to
        your needs.
      </p>
      <div className="mt-16 flex items-center gap-7">
        <ButtonLink href="#booking">Schedule Your Visit</ButtonLink>
        <ButtonLink href="#services" variant="secondary">
          Discover Our Services
        </ButtonLink>
      </div>
    </div>
    <div className="flex-1 hidden lg:block">
      <Image className="w-full" src={heroImage} alt="hero" />
    </div>
  </FlexSection>
);

export default Hero;
