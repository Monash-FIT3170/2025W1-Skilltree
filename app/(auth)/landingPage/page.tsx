"use client";

import React from "react";
import NavBar from "@/components/landingPage/NavBar";
import Hero from "@/components/landingPage/Hero";
import AboutUs from "@/components/landingPage/AboutUs";
import Features from "@/components/landingPage/Features";
import Communities from "@/components/landingPage/Communities";
import OurFooter from "@/components/landingPage/OurFooter";

// TODO Replace photos
export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <NavBar />

      {/* off set for navbar */}
      <main className="pt-550"> 

        {/* HERO */}
        <header className="bg-white pb-30">
          <div className="container mx-auto px-6">
            <Hero />
          </div>
        </header>

        {/* ABOUT */}
        <section className="bg-white">
          <div className="container mx-auto px-6 pb-24">
            <AboutUs />
          </div>
        </section>

        {/* FEATURE BLOCKS */}
        <section id="about" className="bg-white">
          <div className="container mx-auto px-6 space-y-30">
            <Features
              image="/images/build-your-communities.jpg"
              title="Create / Join and Build Communities"
              text="SkillTree enables users to create and join skill-focused communities with structured progression systems. Add tags, define skill trees, and set measurable goals to guide development. Engage with others by sharing proof of progress, offering feedback, and verifying growth. Build vibrant, collaborative spaces around shared skills and interests."
              reverse={false}
            />
            <Features
              image="/images/build-your-communities.jpg"
              title="Learn From The Experts"
              text="SkillTree connects users with verified experts who guide and validate skill development within communities. Expert feedback carries greater weight in verifying progress and awarding XP. Users can learn through insights, evaluations, and structured guidance from those with proven mastery. This ensures a high-quality, trustworthy learning experience."
              reverse={true}
            />
            <Features
              image="/images/build-your-communities.jpg"
              title="Compete against others"
              text="SkillTree lets users participate in ranked and unranked events to showcase their skills within communities. Compete based on defined metrics, earn XP, and climb leaderboards through peer voting and expert validation. These challenges foster healthy competition, skill growth, and community recognition."
              reverse={false}
            />
          </div>
        </section>

        {/* COMMUNITIES */}
        <section id="communities" className="bg-white py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-semibold mb-6">Communities</h2>
            <Communities />
          </div>
        </section>
      </main>

      <OurFooter />
    </div>
  );
}