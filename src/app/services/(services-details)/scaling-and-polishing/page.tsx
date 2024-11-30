import React from "react";
import Wrapper from "@/components/Wrapper";

const ScalingAndPolishingPage = () => {
  return (
    <Wrapper>
      <h1 className="text-center text-4xl font-semibold py-12 text-accent">
        Scaling and Polishing
      </h1>
      <div className="space-y-8">
        <section>
          <p className="text-lg mb-4">
            Scaling and Polishing is a comprehensive cleaning process that reaches areas your toothbrush cannot, ensuring thorough oral hygiene.
          </p>
          <h2 className="text-2xl font-bold mb-4">What is Scaling?</h2>
          <p className="text-lg mb-4">
            Scaling is the removal of plaque and calculus (hard deposits) that accumulate on teeth and cannot be removed by routine brushing.
          </p>
          <h2 className="text-2xl font-bold mb-4">What is Polishing?</h2>
          <p className="text-lg mb-4">
            Polishing involves removing stains and tiny particles of calculus to smooth the tooth surface.
          </p>
          <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Prevent tooth decay</li>
            <li>Minimize gum disease</li>
            <li>Remove hard-to-reach plaque and calculus</li>
            <li>Improve overall oral health</li>
          </ul>
        </section>
      </div>
    </Wrapper>
  );
};

export default ScalingAndPolishingPage