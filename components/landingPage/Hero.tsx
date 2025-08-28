"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-6 py-16 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-4xl">
          A Platform for Learning and Showcasing Skills
        </h1>

        <div className="w-full max-w-5xl">
          <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center">
            <Image
              src="/images/herobanner.jpg"
              alt="SkillTree illustration"
              width={1200}
              height={420}
              className="w-full h-auto object-contain"
              unoptimized={true}
            />
          </div>
        </div>

        <p className="text-gray-600 max-w-3xl">
          For creators, learners, and competitors levelling up skills together.
        </p>

        <div>
          <Button>
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
