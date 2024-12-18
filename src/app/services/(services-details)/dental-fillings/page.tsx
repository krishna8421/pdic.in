import React from "react";
import Wrapper from "@/components/Wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Dental Fillings in Wakad, Pimpri-Chinchwad | Prateek Dental Care & Implant Centre",
  description: "Get the best dental fillings in Wakad at Prateek Dental Care & Implant Centre. We offer expert dental care, including high-quality fillings for cavities, to restore your smile and oral health.",
};
const DentalFillingsPage = () => {
  return (
    <Wrapper>
      <h1 className="text-center text-4xl font-semibold py-12 text-accent">
        Dental Fillings
      </h1>
      <div className="space-y-8">
        <section className="mx-auto max-w-4xl">
          <p className="text-lg mb-4">
            Tooth fillings describe the replacement of hard tooth substance that
            has been lost due to various reasons. The primary causes include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>
              <strong>Caries (Tooth Decay):</strong> Most common reason for
              tooth substance loss
            </li>
            <li>
              <strong>Tooth Fracture:</strong> Structural damage to the tooth
            </li>
          </ul>
          <h2 className="text-2xl font-bold mt-6 mb-4">Filling Materials</h2>
          <p className="text-lg">
            The lost tooth substance can be replaced using various materials:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Composites</li>
            <li>Glass Ionomer Cements</li>
            <li>Inlay or Onlay Fillings</li>
            <li>Gold Fillings</li>
            <li>Ceramic Fillings</li>
          </ul>
        </section>
      </div>
    </Wrapper>
  );
};

export default DentalFillingsPage;
