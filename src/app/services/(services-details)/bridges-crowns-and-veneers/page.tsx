import React from "react";
import Wrapper from "@/components/Wrapper";

const BridgesCrownsVeneersPage = () => {
  return (
    <Wrapper>
      <h1 className="text-center text-4xl font-semibold py-12 text-accent">
        Bridges, Crowns, and Veneers
      </h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Why Do Teeth Need Crowns?</h2>
          <p className="text-lg mb-4">
            A tooth needs a crown when it no longer is strong enough to
            withstand normal chewing function on its own. There are multiple
            reasons a tooth could require a crown to function properly:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>
              <strong>Large Decay:</strong> If a tooth has a large cavity that
              has destroyed its enamel and dentin, it will be too weak to hold a
              filling and chew properly. A crown can restore the tooth&apos;s
              functionality.
            </li>
            <li>
              <strong>Large Fillings:</strong> When a filling covers more than
              half of the tooth, the remaining structure is too weak. A crown
              provides long-term protection.
            </li>
            <li>
              <strong>Cracks:</strong> For tooth cracks that don&apos;t extend into
              the nerve, a crown prevents the crack from worsening by replacing
              the protective enamel layer.
            </li>
            <li>
              <strong>Root Canal Treatment:</strong> After a root canal, teeth
              become brittle due to lack of nourishment. A crown prevents
              cracking and protects the expensive root canal treatment.
            </li>
          </ul>
        </section>
      </div>
    </Wrapper>
  );
};

export default BridgesCrownsVeneersPage;
