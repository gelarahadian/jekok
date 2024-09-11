import React from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { GiArcheryTarget } from "react-icons/gi";
import { HiOutlineCursorClick } from "react-icons/hi";
import { IoSparklesSharp } from "react-icons/io5";
import { PiChartLineLight, PiFilesLight, PiGaugeBold } from "react-icons/pi";
import { TbBellRinging, TbListCheck } from "react-icons/tb";

const Features = () => {
  const features = [
    {
      icon: <PiGaugeBold />,
      title: "User-friendly dashboard",
      description:
        "Create a beautiful and intuitive dashboard to manage your app's data.",
    },
    {
      icon: <TbListCheck />,
      title: "Content evaluation",
      description: "Simple corrections for immediate improvements.",
    },
    {
      icon: <FaWandMagicSparkles />,
      title: "Link Optimization Wizard",
      description:
        "Guides you through the process of creating and managing links.",
    },
    {
      icon: <PiChartLineLight />,
      title: "Visual reports",
      description: "Visual insights into your site’s performance.",
    },
    {
      icon: <GiArcheryTarget />,
      title: "SEO goal setting",
      description:
        "Helps you set and achieve SEO goals with guided assistance.",
    },
    {
      icon: <HiOutlineCursorClick />,
      title: "One-click optimization",
      description:
        "Perform complex SEO audits and optimizations with a single click.",
    },
    {
      icon: <IoSparklesSharp />,
      title: "Smart Keyword Generator",
      description: "Automatic suggestions and the best keywords to target.",
    },
    {
      icon: <TbBellRinging />,
      title: "Automated alerts",
      description:
        "Automatic notifications about your SEO health, including quick fixes.",
    },
    {
      icon: <PiFilesLight />,
      title: "Competitor reports",
      description:
        "Provides insights into competitors’ keyword strategies and ranking.",
    },
  ];

  return (
    <section className=" border-t border-grey bg-purple-shade-horizontal px-4">
      <h2 className="font-medium text-2xl text-center my-20">
        Elevate your SEO efforts.
      </h2>
      <div className="max-w-xs mx-auto space-y-10 mb-20">
        {features.map((feature) => (
          <div key={feature.title}>
            <div className="flex items-center space-x-2 mb-[10px]">
              {feature.icon}
              <h3 className="font-medium tracking-wide  ">{feature.title}</h3>
            </div>
            <p className="text-white/70">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
