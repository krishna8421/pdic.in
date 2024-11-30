import React from "react";
import Wrapper from "@/components/Wrapper";

const DenturesPage = () => {
  return (
    <Wrapper>
      <h1 className="text-center text-4xl font-semibold py-12 text-accent">
        Dentures
      </h1>
      <div className="space-y-8">
        <section>
          <p className="text-lg mb-4">
            Dentures are removable oral appliances designed to replace missing
            teeth in your upper or lower jaw.
          </p>
          <h2 className="text-2xl font-bold mb-4">Types of Dentures</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>
              <strong>Full Dentures:</strong> Replace an entire arch of missing
              teeth
            </li>
            <li>
              <strong>Partial Dentures:</strong> Replace several missing teeth
            </li>
            <li>
              <strong>Immediate Dentures:</strong> Worn right after tooth
              extractions
            </li>
            <li>
              <strong>Implant-Retained Dentures:</strong> Attach to dental
              implants
            </li>
            <li>
              <strong>Implant-Supported Dentures:</strong> Non-removable,
              permanent option
            </li>
          </ul>
          <h2 className="text-2xl font-bold mt-6 mb-4">Materials</h2>
          <p className="text-lg">Crafted from materials including:</p>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Acrylic</li>
            <li>Resin</li>
            <li>Nylon</li>
            <li>Metal</li>
            <li>Porcelain</li>
          </ul>
        </section>
      </div>
    </Wrapper>
  );
};

export default DenturesPage;
