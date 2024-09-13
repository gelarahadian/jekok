import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <section className="px-4">
      <h2 className="text-2xl font-medium text-center mb-[10px]">
        Our Clients
      </h2>
      <p className="text-lg text-center">
        Hear firsthand how our solutions hae boosted online success for users
        like you.
      </p>
      <div className="flex avatar-gradient justify-center items-center w-[172px] h-[172px] mx-auto my-14 relative before:content-[''] before:absolute before:border-y before:inset-y-0 before:w-[160%] after:content-[''] after:absolute after:inset-x-0 after:border-x after:h-[160%] ">
        <Image src={"/assets/Avatar@3x1.png"} alt="Avatar" fill className="" />
        <div className=" absolute -bottom-14 h-full w-[160%] rounded-[100%] bg-avatar-gradient opacity-70 blur-3xl"></div>
      </div>
      <p className="text-xl font-medium text-center mt-5">
        ”This product has completely transformed how I manage my projects and
        deadlines”
      </p>
      <p className="text-center mb-1">Talia Taylor</p>
      <p className="text-sm text-white/70 text-center mb-16">
        Digital Marketing Director @ Quantum
      </p>
    </section>
  );
};

export default Clients;
