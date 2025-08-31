"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function LandingPage() {
  const router = useRouter();

  const NAV_ITEMS = [
    { label: "About Us", href: "#about" },
    { label: "Communities", href: "#communities" },
  ];

  const aboutItems = [
    {
      title: "Create/Join and Build Communities",
      text: "Where skills spark and squads grow.",
      img: "/images/build-your-communities.jpg",
    },
    {
      title: "Learn From The Experts",
      text: "Get real feedback from the those who have mastered the game.",
      img: "/images/build-your-communities.jpg",
    },
    {
      title: "Compete Against Others",
      text: "Gamify your experience, top the leaderboards.",
      img: "/images/build-your-communities.jpg",
    },
  ];

  const featureBlocks = [
    {
      image: "/images/build-your-communities.jpg",
      title: "Create / Join and Build Communities",
      text: "SkillTree enables users to create and join skill-focused communities …",
      reverse: false,
    },
    {
      image: "/images/build-your-communities.jpg",
      title: "Learn From The Experts",
      text: "SkillTree connects users with verified experts who guide …",
      reverse: true,
    },
    {
      image: "/images/build-your-communities.jpg",
      title: "Compete against others",
      text: "SkillTree lets users participate in ranked and unranked events …",
      reverse: false,
    },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full border-b z-50 h-24">
        <div className="container mx-auto h-full flex items-center justify-between px-4">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="SkillTree Logo"
              width={64}
              height={64}
              className="rounded-full"
            />
          </Link>
          <ul className="flex space-x-6">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="font-medium">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4">
            <Button variant="link" onClick={() => router.push("/auth/signin")}>
              Sign In
            </Button>
            <Button onClick={() => router.push("/auth/signup")}>Sign Up</Button>
          </div>
        </div>
      </nav>

      <main className="pt-32">
        {/* Hero */}
        <section className="text-center py-16 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            A Platform for Learning and Showcasing Skills
          </h1>
          <div className="mt-6 inline-block rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/herobanner.jpg"
              alt="SkillTree illustration"
              width={1200}
              height={420}
              className="w-full object-cover"
              unoptimized
            />
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            For creators, learners, and competitors levelling up skills
            together.
          </p>
          <Button className="mt-6">Get Started</Button>
        </section>

        {/* About Us */}
        <section className="py-16 px-4">
          <h2 id="about" className="text-3xl font-bold text-center mb-8">
            About Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {aboutItems.map((item, idx) => (
              <Card key={idx} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="object-cover w-full h-40"
                />
                <CardContent>
                  <CardDescription>{item.text}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Feature Blocks */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto space-y-12">
            {featureBlocks.map((fb, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  fb.reverse ? "md:grid-flow-col-dense" : ""
                }`}
              >
                <div className={fb.reverse ? "order-2" : ""}>
                  <Card>
                    <Image
                      src={fb.image}
                      alt={fb.title}
                      width={600}
                      height={350}
                      className="object-cover w-full h-64 rounded-lg"
                    />
                  </Card>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">{fb.title}</h3>
                  <p className="text-gray-600">{fb.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12 py-6">
        <div className="container mx-auto flex items-center justify-center space-x-3 px-4">
          <Avatar>
            <AvatarImage src="/images/logo.png" alt="SkillTree Logo" />
            <AvatarFallback>ST</AvatarFallback>
          </Avatar>
          <span className="text-sm text-gray-500">
            SkillTree © {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </>
  );
}
