"use client";

import React from "react";

export default function OurFooter() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold">ST</div>
          <div>
            <div className="font-semibold">SkillTree</div>
            <div className="text-sm text-gray-500">© {new Date().getFullYear()}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
