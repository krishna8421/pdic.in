import React from "react";
import Wrapper from "@/components/Wrapper";

const ExtractionsPage = () => {
  return (
    <Wrapper>
      <h1 className="text-center text-4xl font-semibold py-12 text-accent">
        Dental Extractions
      </h1>
      <div className="space-y-8">
        <section className="mx-auto max-w-4xl">
          <p className="text-lg mb-4">
            A dental extraction is a procedure to remove a tooth from its socket
            in the jawbone, typically performed by a dentist or oral surgeon.
          </p>
          <h2 className="text-2xl font-bold mb-4">Reasons for Extraction</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Severe tooth decay</li>
            <li>Fractured tooth</li>
            <li>Impacted tooth</li>
            <li>Crowded teeth</li>
            <li>Severe gum disease</li>
            <li>Dental injury</li>
          </ul>
          <h2 className="text-2xl font-bold mt-6 mb-4">Types of Extractions</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>
              <strong>Simple Extraction:</strong> Performed under local
              anesthesia
            </li>
            <li>
              <strong>Surgical Extraction:</strong> More invasive, performed
              under general anesthesia
            </li>
          </ul>
          <h2 className="text-2xl font-bold mt-6 mb-4">
            Post-Extraction Expectations
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Pain</li>
            <li>Discomfort</li>
            <li>Swelling</li>
            <li>Bleeding</li>
          </ul>
        </section>
      </div>
    </Wrapper>
  );
};

export default ExtractionsPage;
