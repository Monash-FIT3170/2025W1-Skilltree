"use client";

import React from "react";
import { useParams } from "next/navigation";

const SkillTree = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Skill Tree for Community: {id}</h1>
        <section>
           {/* Skill tree will render here */}
        </section>
    </div>
  );
};

export default SkillTree;
