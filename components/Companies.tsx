"use client";
import React from "react";
import { logos } from "@/lib/data";
import Image from "next/image";

const Companies = () => {
  return (
    <section className="px-4">
      <p className="my-10 text-center text-white/70">
        Trusted by the world’s most innovative teams
      </p>
      <div className="relative flex flex-wrap justify-center gap-[10px] ">
        {logos.map((logo) => (
          <div className="border border-grey py-8 px-[10px] rounded-[10px]">
            <Image src={logo.src} alt={logo.alt} width={154} height={32} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;
