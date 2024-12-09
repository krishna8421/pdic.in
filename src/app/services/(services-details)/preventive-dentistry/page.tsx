import React from "react";
import Wrapper from "@/components/Wrapper";


const PreventiveDentistryPage = () => {
  return (
    <Wrapper>
      <h1 className="text-center text-4xl font-semibold py-12 text-accent">
        Preventive Dentistry
      </h1>
      <div className="space-y-8">
        <section className="mx-auto max-w-4xl">
          <p className="text-lg mb-4">
            Preventive dentistry is the practice of maintaining oral health to
            avoid cavities, gum disease, and enamel wear.
          </p>
          <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
          <ol className="list-decimal list-inside space-y-2 text-base">
            <li>Brush teeth daily with fluoride toothpaste</li>
            <li>Floss daily</li>
            <li>Visit dentist regularly</li>
            <li>Eat a balanced diet</li>
            <li>Limit sugar intake</li>
          </ol>
          <h2 className="text-2xl font-bold mt-6 mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Prevent cavities</li>
            <li>Avoid gingivitis</li>
            <li>Minimize enamel loss</li>
            <li>Prevent periodontitis</li>
            <li>Maintain overall oral health</li>
          </ul>
        </section>
      </div>
    </Wrapper>
  );
};

export default PreventiveDentistryPage;
