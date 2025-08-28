"use client";

import React from "react";

const items = [
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

export default function AboutUs() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">About Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img src={it.img} alt={it.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{it.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{it.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
