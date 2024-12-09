import React from "react";
import Wrapper from "@/components/Wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Implant Fixing in Wakad | Prateek Dental Care & Implant Centre",
  description: "Looking for reliable dental implant services in Wakad? Prateek Dental Care & Implant Centre offers expert dental implant fixing with advanced technology and personalized care for lasting smiles.",
};

const DentalImplantsPage = () => {
  return (
    <Wrapper>
      <h1 className="text-center text-4xl font-semibold py-12 text-accent">
        Dental Implants
      </h1>
      <div className="space-y-8">
        <section className="mx-auto max-w-4xl">
          <p className="text-lg mb-4">
            A dental implant is a sophisticated structure that replaces a
            missing tooth by surgically inserting a screw-like device into the
            jawbone.
          </p>
          <h2 className="text-2xl font-bold mb-4">Implant Components</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>
              <strong>Implant:</strong> Screw inserted into jawbone
            </li>
            <li>
              <strong>Abutment:</strong> Connects implant to artificial tooth
            </li>
            <li>
              <strong>Crown:</strong> Custom-made artificial tooth
            </li>
          </ul>
          <h2 className="text-2xl font-bold mt-6 mb-4">Advantages</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>More natural and comfortable</li>
            <li>Better bite force</li>
            <li>Higher success rate</li>
            <li>Improved chewing function</li>
            <li>Lower risk of nearby cavities</li>
            <li>Better bone maintenance</li>
          </ul>
        </section>
      </div>
    </Wrapper>
  );
};

export default DentalImplantsPage;
