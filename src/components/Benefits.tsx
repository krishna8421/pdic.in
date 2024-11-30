import FlexSection from "./FlexSection";
import laserImage from "../assets/laser.svg";
import scannerImage from "../assets/scanner.svg";
import implantImage from "../assets/implant.svg";
import Image from "next/image";
import BenefitItem from "./BenefitItem";
import SectionHeading from "./SectionHeading";

const Benefits = () => (
  <FlexSection id="benefits">
    <SectionHeading
      direction="left"
      title={
        <>
          What Makes Our Clinic{" "}
          <span className="text-[2.6rem] font-bold">Exceptional</span>
        </>
      }
      subtitle={
        <>
          Our <span className="text-accent">Features</span>
        </>
      }
    />
    <div className="mt-20 flex gap-4 lg:gap-14 w-full justify-between flex-col sm:flex-row">
      <BenefitItem
        Icon={
          <Image
            className="w-24 h-24"
            src={laserImage}
            alt="laser technology"
          />
        }
        name="Root Canal Treatment (RCT)"
        description="Say goodbye to tooth pain and hello to long-lasting relief."
      />
      <BenefitItem
        className="lg:mt-12"
        Icon={
          <Image className="w-24 h-24" src={scannerImage} alt="3D scanner" />
        }
        name="Bridges, Crowns, & Veneers"
        description="Perfectly crafted solutions to protect and beautify your teeth."
      />
      <BenefitItem
        Icon={
          <Image
            className="w-24 h-24"
            src={implantImage}
            alt="dental implants"
          />
        }
        name="Dental Implants"
        description="A permanent, natural-feeling solution for missing teeth."
      />
    </div>
  </FlexSection>
);

export default Benefits;
