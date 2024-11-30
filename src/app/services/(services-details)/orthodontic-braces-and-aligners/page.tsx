import React from "react";
import Wrapper from "@/components/Wrapper";


const OrthodonticBracesPage = () => {
  return (
    <Wrapper>
      <h1 className="text-center text-4xl font-semibold py-12 text-accent">
        Orthodontic Braces & Aligners
      </h1>
      <div className="space-y-8">
        <section>
          <p className="text-lg mb-4">
            Orthodontic treatment is a method of straightening or moving teeth to improve their appearance, functionality, and long-term health.
          </p>
          <h2 className="text-2xl font-bold mb-4">Treatment Benefits</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Improve teeth appearance</li>
            <li>Correct bite alignment</li>
            <li>Make teeth easier to clean</li>
            <li>Reduce strain on jaw muscles</li>
            <li>Prevent potential jaw and joint problems</li>
          </ul>
          <h2 className="text-2xl font-bold mt-6 mb-4">Conditions Treated</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Crowded or crooked teeth</li>
            <li>Prominent front teeth</li>
            <li>Incorrect jaw alignment</li>
            <li>Uneven bite pressure</li>
          </ul>
        </section>
      </div>
    </Wrapper>
  );
};

export default OrthodonticBracesPage