import React from "react";

const BuildYourCommunitiesSection: React.FC = () => {
  return (
    <section className="border border-blue-500 p-6 max-w-5xl mx-auto flex flex-row items-center justify-between">
      <div className="max-w-xl">
        <h2
          className="font-extrabold mb-4"
          style={{ fontSize: "3rem" }}
        >
          Build Your Communities
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed">
          SkillTree offers you the opportunity to build a community around your uniqueness, joined alongside people just as unique as you
        </p>
      </div>
      <div className="w-64 h-64 rounded-lg overflow-hidden">
        <img
          src="/mnt/data/8f2a1d7b-7991-43dc-81a1-9d7b21fae2b1.png"
          alt="Person knitting with yarn"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default BuildYourCommunitiesSection;