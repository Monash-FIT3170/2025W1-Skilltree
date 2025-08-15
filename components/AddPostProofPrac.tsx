"use client";
import React, {useState} from "react";
import { Send, Zap } from "lucide-react";
const userImage = "/placeholder.png";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

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
    <div className="w-full max-w-2xl mx-auto bg-white p-4 rounded-2xl shadow items-center gap-8 flex flex-col items-start">
      <h1 className="text-lg font-bold">Upload Proof of Practice</h1>

      <div className="space-y-2">
        <Label>Skill Tree Node</Label>
        <Input
          type="text"
          className="w-full"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="change to button with drop down"
        />
      </div>

      <div className="space-y-2">
        <Label>Proof Image</Label>
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full"
        />
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

      <div className="space-y-2">
        <Label>Description</Label>
        <Textarea
          rows={5}
          className="w-full"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write about what you practiced today..."
        />
      </div>


      <div className="flex gap-4">
        <Button onClick={handleSubmit} className="flex-1">
          Confirm
        </Button>
        <Button
          onClick={handleCancel}
          variant={"destructive"}
          className="flex-1"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
