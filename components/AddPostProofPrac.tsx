"use client";
import React, {useState} from "react";
const userImage = "/placeholder.png";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import {Camera, XCircle} from "lucide-react";

const skillNodes = [
  "React Basics",
  "State Management",
  "Component Composition",
  "Hooks Mastery",
  "TypeScript Integration",
  "API Handling",
  "Testing & Debugging",
  "UI/UX Best Practices"
];

export default function AddPostProofPrac() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [body, setBody] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [allowVerification, setAllowVerification] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    console.log({ title, tags, body, allowVerification });
  };

  const handleCancel = () => {
    //TODO add redirect to community page
  };
  return (
    <div className="relative w-full max-w-2xl mx-auto bg-white p-5 rounded-2xl shadow items-center gap-8 flex flex-col items-start">
      <button
        onClick = {handleCancel}
        className = "absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
      >
        <XCircle className  ="w-6 h-6"/>

      </button>
      <h1 className="text-lg font-bold">Upload Proof of Practice</h1>
    
      <div className="space-y-2 w-full text-m">
        <Label>Skill Tree Node</Label>
        <select
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-6 py-2 text-gray-900 text-sm"
        >
          <option value="" disabled>Select a skill node</option>
          {skillNodes.map((node, idx) => (
            <option key={idx} value={node}>{node}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2 w-full py-2">
        <Label>Upload Media</Label>

        {/* Button with Camera icon */}
        <label
          htmlFor="fileInput"
          className="flex items-center gap-2 px-4 py-2 border rounded-xl cursor-pointer hover:bg-gray-100"
        >
          <Camera className="w-5 h-5" />
          <span>Choose File</span>
        </label>
        {preview && (
          <Image
            width={720}
            height={720}
            src={preview}
            alt="Preview"
            className="mt-2 max-h-60 object-contain rounded-xl border border-gray-200"
          />
        )}
      </div>

      <div className="space-y-2 w-full">
        <Label>Description</Label>
        <Textarea
          rows={5}
          className="w-full"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write about what you practiced today..."
        />
      </div>


      <div className="gap-4 ml-auto px-3 py-2">
        <Button onClick={handleSubmit} className="items-right px-10">
          Confirm
        </Button>
        
      </div>
    </div>
  );
}
