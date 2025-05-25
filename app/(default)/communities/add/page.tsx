"use client";

import type React from "react";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChipInput } from "@/components/shared/chip-input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useRouter } from "next/navigation";

export default function CommunityForm() {
    const router = useRouter()
  const [communityName, setCommunityName] = useState("");
  const [communityTags, setCommunityTags] = useState<string[]>(["Community"]);
  const [communityDescription, setCommunityDescription] = useState(
    "This is a community for a community"
  );
  const [iconFile, setIconFile] = useState<File | null>(null);
  const [iconPreview, setIconPreview] = useState<string | null>(null);

  const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setIconFile(file);
      setIconPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!communityName.trim()) {
      alert("Community name is required");
      return;
    }

    const newCommunity = {
      id: Date.now(),
      name: communityName.trim(),
      tags: communityTags,
      description: communityDescription,

      icon: iconPreview,
      createdAt: new Date().toISOString(),
      creatorId: 1,
    };
        try {
      const existingCommunities = JSON.parse(localStorage.getItem('communities') || '[]');
      const updatedCommunities = [...existingCommunities, newCommunity];
      localStorage.setItem('communities', JSON.stringify(updatedCommunities));
      router.push('/communities/manage');
    } catch (error) {
      console.error('Error saving community:', error);
      alert('Failed to save community. Please try again.');
    }
  }; // Remove the extra '}' and ';' that were here

  // Add the handleCancel function here
  const handleCancel = () => {
    router.push('/communities/manage');
  };

  return (
    <div className="mx-auto w-full max-w-3xl relative">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="w-full flex flex-col md:flex-row items-stretch gap-4">
          <div className="flex-1 space-y-8">
            <div className="space-y-2">
              <Label htmlFor="community-icon" className="text-base font-medium">
                Community Icon :
              </Label>
              <div className="flex items-center">
                <label htmlFor="icon-upload" className="cursor-pointer">
                  <Avatar className="h-24 w-24 bg-gray-200 hover:opacity-80 transition-opacity">
                    {iconPreview ? (
                      <AvatarImage
                        src={iconPreview || "/placeholder.svg"}
                        alt="Community icon"
                      />
                    ) : (
                      <AvatarFallback className="bg-gray-200 text-gray-500">
                        <Plus className="h-8 w-8" />
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <input
                    id="icon-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleIconChange}
                  />
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="community-name" className="text-base font-medium">
                Community Name :
              </Label>
              <Input
                id="community-name"
                value={communityName}
                onChange={(e) => setCommunityName(e.target.value)}
                placeholder="Community"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="community-tags" className="text-base font-medium">
                Community Tags :
              </Label>
              <ChipInput
                initialChips={communityTags}
                onChange={setCommunityTags}
                placeholder="Add tags..."
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="community-description"
                className="text-base font-medium"
              >
                Community Description :
              </Label>
              <Textarea
                id="community-description"
                value={communityDescription}
                onChange={(e) => setCommunityDescription(e.target.value)}
                rows={8}
              />
            </div>
          </div>

          {/* Decorative circles on the right side */}
          <div className="flex-1 w-full items-center flex flex-col gap-8 pt-12">
            <div className="h-16 w-16 rounded-full bg-gray-200"></div>
            <div className="h-16 w-16 rounded-full bg-gray-200"></div>
            <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
              <Plus className="h-6 w-6 text-gray-500" />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="destructive" type="button" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" className="hover:bg-[#1e293b]">
            Create
          </Button>
        </div>
      </form>
    </div>
  );
}
