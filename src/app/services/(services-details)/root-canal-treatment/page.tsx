import React from "react";
import Wrapper from "@/components/Wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Dental Fillings in Wakad, Pimpri-Chinchwad | Prateek Dental Care & Implant Centre",
  description: "Get the best dental fillings in Wakad at Prateek Dental Care & Implant Centre. We offer expert dental care, including high-quality fillings for cavities, to restore your smile and oral health.",
};

const RootCanalTreatmentPage = () => {
  return (
    <Wrapper>
      <h1 className="text-center text-4xl font-semibold py-12 text-accent">
        Root Canal Treatment
      </h1>
      <div className="space-y-8">
        <section className="mx-auto max-w-4xl">
          <p className="text-lg mb-4">
            A root canal treatment is a specialized dental procedure designed to
            save and repair a badly damaged or infected tooth.
          </p>
          <h2 className="text-2xl font-bold mb-4">Procedure Steps</h2>
          <ol className="list-decimal list-inside space-y-2 text-base">
            <li>Remove inflamed or infected pulp from inside the tooth</li>
            <li>Carefully clean and disinfect the root canal</li>
            <li>Fill and seal the tooth</li>
          </ol>
          <h2 className="text-2xl font-bold mt-6 mb-4">Primary Objectives</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Eliminate bacteria from the infected root canal</li>
            <li>Prevent reinfection of the tooth</li>
            <li>Save the natural tooth</li>
          </ul>
        </section>
      </div>
    </Wrapper>
  );
};

export default RootCanalTreatmentPage;
