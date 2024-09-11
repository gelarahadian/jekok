import React from "react";
import Button from "./ui/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="px-4">
      <div className="mt-24 w-full text-center mb-16">
        <p className="inline-block text-secondary border border-secondary rounded-full px-[14px] py-2 mb-3">
          {" "}
          <span className="bg-secondary text-black px-2 py-1 font-bold rounded-full text-[10px]">
            NEW
          </span>{" "}
          Latest integration just arrived
        </p>
        <h1 className="font-medium text-5xl text-gradient max-w-96 mx-auto mb-4 ">
          Boost your rankings with AI.
        </h1>
        <p className="text-lg mb-4 leading-7 tracking-wider">
          Elevate your site’s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <Button variant="white">Start for free</Button>
      </div>
      <div>
        <div
          className="relative w-full h-[300px] bg-black shadow-hero-img rounded-lg p-2 
        after:content-[''] after:absolute after:w-full after:h-full after:bg-black-shade after:inset-0 "
        >
          <Image
            src={"/assets/AppWide@2x1.png"}
            alt="AppWide"
            fill
            className="object-contain object-top"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
