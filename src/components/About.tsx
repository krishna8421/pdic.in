"use client";

import doctorImage from "../assets/doctor.jpg";
import FlexSection from "./FlexSection";
import Image from "next/image";

const About = () => (
  <section id="about">
    <FlexSection>
      <div className="flex-1">
        <Image
          src={doctorImage}
          alt="Dr. Atul Prateek"
          className="h-full w-full p-2 md:p-8"
        />
      </div>
      <div className="flex-1 flex flex-col gap-8 h-full mt-8 lg:mt-0">
        <div className="text-4xl font-semibold">
          About <span className="text-accent">Dr. Atul Prateek</span>
        </div>
        <div className="space-y-4 text-gray-800 text-lg">
          <p>
            Welcome to <strong>Prateek Dental Care & Implant Centre</strong>,
            your trusted destination for advanced dental care in Wakad, Pune.
            Led by the highly qualified <strong>Dr. Atul Prateek</strong>, the
            clinic combines expertise, compassion, and cutting-edge treatments
            to deliver exceptional results.
          </p>
          <p>
            Dr. Atul Prateek holds a{" "}
            <strong>BDS (Bachelor of Dental Surgery)</strong> from Rajasthan
            University of Health Sciences (RUHS), along with a
            <strong>
              {" "}
              Fellowship in Clinical Dentistry and a Mastership in Oral
              Implantology
            </strong>
            . His extensive qualifications ensure top-tier care tailored to each
            patient&apos;s needs.
          </p>
          <p>
            From preventive care to advanced oral implantology, we provide
            personalized treatments in a comfortable, patient-focused
            environment. At{" "}
            <strong>Prateek Dental Care & Implant Centre</strong>, your smile is
            our priority!
          </p>
        </div>
      </div>
    </FlexSection>
  </section>
);

export default About;
