import Image from "next/image";
import React from "react";

const Bento = () => {
  return (
    <section>
      <h2 className="text-2xl font-medium text-center tracking-wider mt-20 mb-8">
        Harness the power of AI, making search engine optimization intuitive and
        effective for all skill levels.
      </h2>
      <div className="space-y-8 mb-20">
        <div className="border border-grey rounded-[10px] px-7 py-12">
          <Image
            src="/assets/3D/holo-cylinder.png"
            alt="Holo Cylinder"
            width={276}
            height={206}
            className="mx-auto"
          />
          <h3>SEO goal setting</h3>
          <p>Helps you set and achieve SEO goals with guided assistance.</p>
        </div>
        <div className="w-full h-[400px] relative rounded-[10px] overflow-hidden ">
          <div className="relative w-[600px] h-[400px]">
            <Image
              src={"/assets/AppWide@2x1.png"}
              alt="AppWide"
              fill
              className="ml-8 mt-8 object-cover object-left-top   "
            />
          </div>
          <div className="absolute flex items-end inset-0 p-5 bg-purple-shade">
            <div>
              <h4 className="font-medium mb-2">User-friendly dashboard</h4>
              <p className="w-56 text-white/70">
                Perform complex SEO audits and optimizations with a single
                click.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[400px] relative rounded-[10px] overflow-hidden ">
          <div className="relative w-[1200px] h-[900px] bottom-0">
            <Image
              src={"/assets/AppWide@2x1.png"}
              alt="AppWide"
              fill
              className="ml-8 mt-8 object-cover   "
            />
          </div>
          <div className="absolute flex items-end inset-0 p-5 bg-purple-shade">
            <div>
              <h4 className="font-medium mb-2">Visual reports</h4>
              <p className="w-56 text-white/70">
                Visual insights into your site’s performance.
              </p>
            </div>
          </div>
        </div>
        <div className="border border-grey rounded-[10px] px-7 py-12">
          <Image
            src="/assets/3D/holo-conus.png"
            alt="Holo Cylinder"
            width={276}
            height={206}
            className="mx-auto"
          />
          <h3>Smart Keyword Generator</h3>
          <p>Automatic suggestions and the best keywords to target.</p>
        </div>
      </div>
    </section>
  );
};

export default Bento;
