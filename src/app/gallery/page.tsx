import Wrapper from "@/components/Wrapper";
import React from "react";
import Image1 from "./img/1.jpeg";
import Image2 from "./img/2.jpeg";
import Image3 from "./img/3.jpeg";
import Image4 from "./img/4.jpeg";
import Image5 from "./img/5.jpeg";
import Image6 from "./img/6.jpeg";
import Image7 from "./img/7.jpeg";
import Image8 from "./img/8.jpeg";
import Image9 from "./img/9.jpeg";
import Image10 from "./img/10.jpeg";
import Image from "next/image";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
];

const GalleryPage = () => {
  return (
    <Wrapper>
      <h1 className="text-center text-4xl font-semibold py-12 text-accent">
        Gallery
      </h1>
      <div className="space-y-4">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="Gallery Image"
            // width={400}
            // height={400}
            className="m-2 w-full rounded-md"
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default GalleryPage;
