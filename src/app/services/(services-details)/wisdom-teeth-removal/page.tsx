import React from "react";
import Wrapper from "@/components/Wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wisdom Teeth Removal in Wakad, Pimpri-Chinchwad | Prateek Dental Care",
  description: "Looking for wisdom teeth removal in Wakad, Pimpri-Chinchwad? Visit Prateek Dental Care & Implant Centre for safe and painless removal by experienced professionals. Book your consultation today!",
};

const WisdomTeethRemovalPage = () => {
  return (
    <Wrapper>
      <h1 className="text-center text-4xl font-semibold py-12 text-accent">
        Wisdom Teeth Removal
      </h1>
      <div className="space-y-8">
        <section className="mx-auto max-w-4xl">
          <p className="text-lg mb-4">
            Wisdom tooth extraction is a surgical procedure to remove one or
            more wisdom teeth, which are the four permanent adult teeth located
            at the back corners of your mouth.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            When Removal is Recommended
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Impacted wisdom teeth causing pain</li>
            <li>Potential infection risks</li>
            <li>Limited growth space</li>
            <li>Difficulty in cleaning back teeth</li>
            <li>Risk of decay in adjacent teeth</li>
          </ul>
          <h2 className="text-2xl font-bold mt-6 mb-4">Potential Issues</h2>
          <p className="text-lg">
            If a wisdom tooth doesn&apos;t have room to grow properly, it can
            become impacted, leading to various dental problems.
          </p>
        </section>
      </div>
    </Wrapper>
  );
};

export default WisdomTeethRemovalPage;
