"use client"

import React from 'react';
import Hero from '@/components/landingPage/Hero';
import AboutUs from '@/components/landingPage/AboutUs';
import Features from '@/components/landingPage/Features';
import NavBar from '@/components/landingPage/NavBar';
import Communities from '@/components/landingPage/Communities';

function Section({ id, title, children }) {
  return (
    <section id={id} className="container mx-auto px-6 pb-20">
      <h2 className="text-3xl font-semibold mb-8">{title}</h2>
      {children}
    </section>
  );
}

export default function LandingPage() {
  return (
    <>
      <NavBar/>
      <main className="mt-16">
        <Section id="home" title="">
          <Hero />
        </Section>
        <Section id="about" title="About Us">
          <AboutUs/>
        </Section>
        <Features image="/images/download.png" label="Build Your Communities" text="SkillTree offers you the opportunity to build a community around your uniqueness, joined alongside people just as unique as you."/>
        <Features image="/images/download.png" label="Learn From The Experts" text="Have verified people verify you."/>
        <Features image="/images/download.png" label="Compete against others" text="Harness your inner competitiveness."/>
        <Section id="communities" title="Communities">
          <Communities/>
        </Section>
      </main>
    </>
  );
}
