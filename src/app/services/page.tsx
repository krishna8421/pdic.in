import Wrapper from "@/components/Wrapper";
import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Dental Fillings in Wakad, Pimpri-Chinchwad | Prateek Dental Care & Implant Centre",
  description: "Get the best dental fillings in Wakad at Prateek Dental Care & Implant Centre. We offer expert dental care, including high-quality fillings for cavities, to restore your smile and oral health.",
};

const services = [
  {
    name: "Dental Fillings",
    description:
      "Replace damaged tooth substance with composite or ceramic materials.",
    url: "dental-fillings",
  },
  {
    name: "Root Canal Treatment (RCT)",
    description: "Remove infected pulp, clean and seal the tooth to save it.",
    url: "root-canal-treatment",
  },
  {
    name: "Wisdom Teeth Removal",
    description: "Surgical removal of problematic wisdom teeth.",
    url: "wisdom-teeth-removal",
  },
  {
    name: "Orthodontic Braces & Aligners",
    description: "Straighten teeth and correct bite alignment.",
    url: "orthodontic-braces-and-aligners",
  },
  {
    name: "Dental Implants",
    description: "Permanent solution for missing teeth with artificial crowns.",
    url: "dental-implants",
  },
  {
    name: "Scaling and Polishing",
    description: "Professional cleaning to remove plaque, tartar, and stains.",
    url: "scaling-and-polishing",
  },
  {
    name: "Dentures",
    description:
      "Removable appliances to replace missing teeth for better oral function.",
    url: "dentures",
  },
  {
    name: "Bridges, Crowns, and Veneers",
    description: "Restore, protect, and improve the appearance of teeth.",
    url: "bridges-crowns-and-veneers",
  },
  {
    name: "Kids Dentistry",
    description:
      "Specialized dental care and preventive treatments for children.",
    url: "kids-dentistry",
  },
  {
    name: "Smile Makeover & Teeth Whitening",
    description: "Lighten stained or discolored teeth for a brighter smile.",
    url: "smile-makeover-and-teeth-whitening",
  },
  {
    name: "Extractions",
    description: "Remove damaged or impacted teeth to improve oral health.",
    url: "extractions",
  },
  {
    name: "Preventive Dentistry",
    description: "Regular care to avoid cavities, gum disease, and tooth loss.",
    url: "preventive-dentistry",
  },
];

const ServicesPage = () => {
  return (
    <Wrapper>
      <h1 className="text-center text-4xl font-semibold py-12 text-accent">
        Services
      </h1>
      <div className="flex flex-wrap mb-12 gap-4 justify-center">
        {services.map((service, index) => (
          <Link
            href={`/services/${service.url}`}
            key={index}
            className="w-full sm:w-96 border rounded-lg border-accent/10 hover:border-accent/50 flex flex-col gap-4 p-4"
          >
            <h2 className="text-xl font-semibold text-accent">
              {service.name}
            </h2>
            <p className="text-gray-600">{service.description}</p>
          </Link>
        ))}
      </div>
    </Wrapper>
  );
};

export default ServicesPage;
