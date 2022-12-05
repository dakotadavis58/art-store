import Image from "next/image";
import React from "react";
import data from "../../data/data";
import Container from "../Container";

function About() {
  const { about } = data;
  const { title, description, images } = about;
  return (
    <div className="flex flex-col items-center parallax gap-8">
      <Container>
        <div className="bg-neutral-800 text-white p-10 rounded-md flex flex-col gap-8 items-center m-4 max-w-4xl">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="w-full">{description}</p>
          <div className="gallery w-full gap-8 min-h-[200px] max-w-4xl flex md:flex-row flex-col items-center">
            {images.map((image, index) => (
              <div
                key={index}
                className="image-container flex-1 min-h-[16rem] max-h-[24rem] min-w-[16rem] max-w-[20rem]"
              >
                <Image
                  key={index}
                  src={image.img}
                  fill
                  alt={image.alt}
                  className="imageCover min-h-[10rem] max-h-full rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
