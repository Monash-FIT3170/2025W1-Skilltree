"use client";

import React from "react";
import { useParams } from "next/navigation";

const SkillTreeGraph = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Skill Tree View</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <p>Community ID: {id}</p>
        {/* Add your skill tree visualization here */}
      </div>
    </div>
  );
};

export default SkillTreeGraph;