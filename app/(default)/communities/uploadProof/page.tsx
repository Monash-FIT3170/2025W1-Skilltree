"use client";

import React, { useState, useEffect } from "react";
import { Plus, UserCheck, UserX, ArrowLeft, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChipInput } from "@/components/shared/chip-input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DialogHeader, DialogFooter, Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";


export default function UploadProofOfPractice() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [allowVerification, setAllowVerification] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    console.log({ title, tags, body, image });
    // backend handle proof of practice submission
  };

  const handleCancel = () => {
    // this should redirect back to the individual community page
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Upload Proof of Practice</h1>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Practiced SVG Circles with RxJS"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Tags</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="e.g. typescript, rxjs, svg"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Body</label>
        <textarea
          rows={5}
          className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write about what you practiced today..."
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Proof Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-2 max-h-60 object-contain rounded-xl border border-gray-200"
          />
        )}
      </div>

      <div className="flex items-center space-x-2">
        <input
          id="allowVerification"
          type="checkbox"
          checked={allowVerification}
          onChange={() => setAllowVerification(!allowVerification)}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="allowVerification" className="text-sm text-gray-700">
          Let other users verify your proof
        </label>
      </div>

      <div>
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-black text-white rounded-xl font-semibold focus:ring-white-500"
        >
          Confirm
        </button>
        <div>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-white text-black rounded-xl"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
