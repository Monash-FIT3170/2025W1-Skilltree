"use client";

import React from "react";

type Props = {
  image: string;
  title: string;
  text: string;
  reverse?: boolean;
};

export default function FeatureBlock({ image, title, text, reverse = false }: Props) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${reverse ? "md:grid-flow-col-dense" : ""}`}>
      <div className={reverse ? "order-2 md:order-1" : ""}>
        <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg shadow" />
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-gray-600 max-w-xl">{text}</p>
      </div>
    </div>
  );
}
