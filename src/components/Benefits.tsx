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
        name="Advanced Lasers"
        description="State-of-the-art diode lasers ensure your treatment is quick and painless."
      />
      <BenefitItem
        className="lg:mt-12"
        Icon={
          <Image className="w-24 h-24" src={scannerImage} alt="3D scanner" />
        }
        name="3D Scanners"
        description="High-tech 3D scanners provide rapid imaging in an automated process."
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
        description="Over 30 years of experience in implant placements. Enjoy your favorite foods again!"
      />
    </div>
  </FlexSection>
);

export default Benefits;
