import React from "react";
import Wrapper from "@/components/Wrapper";

const SmileMakeoverAndTeethWhiteningPage = () => {
  return (
    <Wrapper>
      <h1 className="text-center text-4xl font-semibold py-12 text-accent">
        Smile Makeover & Teeth Whitening
      </h1>
      <div className="space-y-8">
        {/* Smile Makeover Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Smile Makeover</h2>
          <p className="text-lg mb-4">
            A smile makeover aims to improve your smile by considering various
            aesthetic factors to create an appealing dentition.
          </p>
          <h3 className="text-2xl font-bold mb-4">Considerations</h3>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Facial appearance</li>
            <li>Hair color</li>
            <li>Skin tone</li>
            <li>Teeth condition</li>
            <li>Gum tissue</li>
            <li>Lips</li>
          </ul>
          <h3 className="text-2xl font-bold mt-6 mb-4">Correctable Issues</h3>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Tooth decay</li>
            <li>Tooth stains and discoloration</li>
            <li>Slight tooth crookedness</li>
          </ul>
        </section>

        {/* Teeth Whitening Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Teeth Whitening</h2>
          <p className="text-lg mb-4">
            Tooth bleaching is a conservative and cost-effective method to
            enhance your smile by lightening tooth discoloration.
          </p>
          <h3 className="text-2xl font-bold mb-4">Whitening Agents</h3>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Hydrogen Peroxide</li>
            <li>Carbamide Peroxide</li>
          </ul>
          <h3 className="text-2xl font-bold mt-6 mb-4">Effectiveness</h3>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Best for yellowish teeth</li>
            <li>Less effective on brownish, gray, or purple stains</li>
            <li>May require prolonged treatment for difficult stains</li>
          </ul>
          <h3 className="text-2xl font-bold mt-6 mb-4">
            Factors Affecting Tooth Discoloration
          </h3>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Age</li>
            <li>Smoking</li>
            <li>Coffee and tea consumption</li>
            <li>Certain foods</li>
            <li>Antibiotics</li>
          </ul>
        </section>
      </div>
    </Wrapper>
  );
};

export default SmileMakeoverAndTeethWhiteningPage;
