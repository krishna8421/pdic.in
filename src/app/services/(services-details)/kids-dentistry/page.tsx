import React from "react";
import Wrapper from "@/components/Wrapper";

const KidsDentistryPage = () => {
  return (
    <Wrapper>
      <h1 className="text-center text-4xl font-semibold py-12 text-accent">
        Kids Dentistry
      </h1>
      <div className="space-y-8">
        <section className="mx-auto max-w-4xl">
          <p className="text-lg mb-4">
            Pediatric dentistry focuses on promoting dental health for children
            and providing educational resources for parents.
          </p>
          <h2 className="text-2xl font-bold mb-4">Recommended First Visit</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>After first tooth appears</li>
            <li>By child&apos;s first birthday</li>
          </ul>
          <h2 className="text-2xl font-bold mt-6 mb-4">Key Objectives</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Early detection of tooth decay</li>
            <li>Modify aberrant oral habits</li>
            <li>Provide preventive home care guidance</li>
            <li>Assess caries risk</li>
            <li>Offer injury prevention advice</li>
            <li>Provide diet counseling</li>
          </ul>
        </section>
      </div>
    </Wrapper>
  );
};

export default KidsDentistryPage;
