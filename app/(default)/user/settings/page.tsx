"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { KeyRound } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const currentUser = {
  email: "jane.doe@example.com",
  name: "Jane Doe",
  dob: "1998-04-15",
  image: null as string | null,
  totalXp: 12850,
};

export default function UserSettingsPage() {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState(currentUser.name);
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    currentUser.image ?? null
  );
  const [file, setFile] = useState<File | null>(null);
  const editRef = useRef<HTMLDivElement | null>(null);

  const handleAvatarClick = () => {
    fileRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClear = () => {
    setFile(null);
    setPreviewUrl(null);
  };

  return (
    <div className="flex flex-col w-full h-full container mx-auto">
      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">User Settings</h1>
      </header>
      <div>
        <div className="flex flex-col md:flex-row gap-5 md:items-stretch items-start w-full">
          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <Avatar
              onClick={handleAvatarClick}
              className="h-28 w-28 md:h-48 md:w-48 aspect-square"
            >
              <AvatarImage src={previewUrl ?? ""} alt={name || "User"} />
              <AvatarFallback>{initials(name)}</AvatarFallback>
            </Avatar>
            <Input
              type="file"
              ref={fileRef}
              onChange={handleFileChange}
              className="hidden"
            />
            {(file || previewUrl) && (
              <Button
                onClick={handleClear}
                variant="destructive"
                className="w-full mt-2"
              >
                Clear
              </Button>
            )}
          </div>

          <div
            ref={editRef}
            className="flex flex-col gap-5 items-center justify-stretch w-full px-2 md:px-0"
          >
            <div className="w-full flex flex-col gap-2">
              <Label className="text-muted-foreground">Name</Label>
              <Input
                className="mt-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <Label className="text-muted-foreground">Total XP Earned</Label>
              <Input disabled value={currentUser.totalXp.toLocaleString()} />
            </div>

            <div className="w-full flex flex-col gap-2">
              <Label className="text-muted-foreground">Email</Label>
              <Input disabled value={currentUser.email} />
            </div>

            <div className="w-full flex flex-col gap-2">
              <Label className="text-muted-foreground">Date of birth</Label>
              <Input
                disabled
                value={
                  currentUser.dob
                    ? new Date(currentUser.dob).toLocaleDateString()
                    : "—"
                }
              />
            </div>

            <div className="flex w-full justify-end gap-3 flex-wrap">
              <Button>Save Changes</Button>
              <Button variant="outline">Go Back</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Helpers */
function initials(name: string) {
  if (!name) return "U";
  const parts = name.trim().split(" ").filter(Boolean);
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return (parts[0]![0] + parts[parts.length - 1]![0]).toUpperCase();
}
function parseISODate(s: string | null | undefined): Date | null {
  if (!s) return null;
  const [y, m, d] = s.split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, (m as number) - 1, d as number);
}
function formatDate(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
