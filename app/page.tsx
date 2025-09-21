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
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";

export default function LandingPage() {
  const router = useRouter();
  const isMobile = useIsMobile();

  const NAV_ITEMS = [
    { label: "About Us", href: "#about" },
    { label: "Communities", href: "#communities" },
  ];

  const aboutItems = [
    {
      title: "Create/Join and Build Communities",
      text: "Where skills spark and squads grow.",
      img: "/images/landing2.jpg",
    },
    {
      title: "Learn From The Experts",
      text: "Get real feedback from the those who have mastered the game.",
      img: "/images/landing3.jpg",
    },
    {
      title: "Compete Against Others",
      text: "Gamify your experience, top the leaderboards.",
      img: "/images/landing4.jpg",
    },
  ];

  const featureBlocks = [
    {
      image: "/images/landing5.jpg",
      title: "Create / Join and Build Communities",
      text: "SkillTree enables users to create and join skill-focused communities …",
      reverse: false,
    },
    {
      image: "/images/landing6.jpg",
      title: "Learn From The Experts",
      text: "SkillTree connects users with verified experts who guide …",
      reverse: true,
    },
    {
      image: "/images/landing7.jpg",
      title: "Compete against others",
      text: "SkillTree lets users participate in ranked and unranked events …",
      reverse: false,
    },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-background border-b z-50 h-24">
        <div className="container mx-auto h-full flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="SkillTree Logo"
              width={64}
              height={64}
              className="rounded-full"
            />
          </Link>
          {!isMobile && (
            <ul className="flex space-x-6">
              {NAV_ITEMS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="font-medium">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <div className="flex space-x-4">
            <Button variant="link" onClick={() => router.push("/auth/signin")}>
              Sign In
            </Button>
            <Button onClick={() => router.push("/auth/signup")}>Sign Up</Button>
          </div>
        </div>
      </nav>

      <main className="mt-24 container mx-auto">
        <section className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">
            A Platform for Learning and Showcasing Skills
          </h1>
          <div className="relative w-full h-auto aspect-video mt-6 inline-block rounded-lg overflow-hidden shadow-lg">
            <div className="absolute bg-background w-full py-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4">
              <p>
                For creators, learners, and competitors levelling up skills
                together.
              </p>
              <Button>Get Started</Button>
            </div>
            <Image
              src="/images/landing1.jpg"
              alt="SkillTree illustration"
              width={1200}
              height={420}
              className="w-full object-cover"
              unoptimized
            />
          </div>
        </section>

        <section className="pt-8">
          <h2 id="about" className="text-3xl font-bold text-center pb-8">
            About Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {aboutItems.map((item, idx) => (
              <Card key={idx} className="flex flex-col">
                <CardHeader className="h-full flex flex-col items-start gap-4">
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.text}</CardDescription>
                </CardHeader>

                <CardContent>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={200}
                    className="object-cover rounded w-full h-40"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="pt-8">
          <h2 id="features" className="text-3xl font-bold text-center pb-8">
            Features
          </h2>
          {featureBlocks.map((fb, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                fb.reverse ? "md:grid-flow-col-dense" : ""
              }`}
            >
              <div className={fb.reverse ? "order-2" : ""}>
                <Image
                  src={fb.image}
                  alt={fb.title}
                  width={600}
                  height={350}
                  className="object-cover w-full h-64 rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{fb.title}</h3>
                <p className="text-gray-600">{fb.text}</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="border-t py-6 mt-8">
        <div className="container mx-auto flex items-center justify-center space-x-3">
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
