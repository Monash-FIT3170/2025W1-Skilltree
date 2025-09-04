"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { createCommunityAction } from "@/actions/create-community-action";

export default function CreateCommunityPage() {
  const [form, setForm] = useState({
    communityName: "",
    communityDesc: "",
    isAdultOnly: false,
    tags: "",
  });
  const [iconFile, setIconFile] = useState<File | null>(null);
  const [iconPreview, setIconPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleAvatarClick = () => {
    fileRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setIconFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setIconPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setIconPreview(null);
    }
  };

  const handleClear = () => {
    setIconFile(null);
    setIconPreview(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const create = createCommunityAction({
    //   ...form,
    //   pfp: fileRef.current?.files?.[0] ?? null,
    // });
    router.push("/community/add/skilltree");
  };

  return (
    <div className="container flex flex-col w-full h-full mx-auto">
      <header className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Create Community</h1>
      </header>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start w-full gap-5 md:flex-row md:items-stretch"
        >
          <div className="flex flex-col items-center w-full md:items-start md:w-auto">
            <Avatar
              onClick={handleAvatarClick}
              className="cursor-pointer h-28 w-28 md:h-48 md:w-48 aspect-square"
            >
              <AvatarImage
                src={iconPreview ?? ""}
                alt={form.communityName || "Community"}
              />
              <AvatarFallback>{initials(form.communityName)}</AvatarFallback>
            </Avatar>
            <Input
              type="file"
              ref={fileRef}
              onChange={handleFileChange}
              className="hidden"
            />
            {(iconFile || iconPreview) && (
              <Button
                onClick={handleClear}
                variant="destructive"
                className="w-full mt-2"
                type="button"
              >
                Clear
              </Button>
            )}
          </div>

          <div className="flex flex-col items-center w-full gap-5 px-2 justify-stretch md:px-0">
            <div className="flex flex-col w-full gap-2">
              <Label className="text-muted-foreground">Community Name</Label>
              <Input
                className="mt-2"
                name="communityName"
                value={form.communityName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col w-full gap-2">
              <Label className="text-muted-foreground">
                Community Description
              </Label>
              <Textarea
                className="mt-2"
                name="communityDesc"
                value={form.communityDesc}
                onChange={handleChange}
                required
                rows={4}
              />
            </div>

            <div className="flex flex-col w-full gap-2">
              <Label className="text-muted-foreground">Community Tags</Label>
              <Input
                className="mt-2"
                name="tags"
                value={form.tags}
                onChange={handleChange}
                placeholder="Comma separated tags"
              />
            </div>

            <div className="flex w-full gap-2">
              <Input
                type="checkbox"
                name="isAdultOnly"
                checked={form.isAdultOnly}
                onChange={handleChange}
                className="w-5 h-5"
              />
              <Label className="text-muted-foreground">
                Restricted Community?
              </Label>
            </div>

            <div className="flex flex-wrap justify-end w-full gap-3">
              <Button type="submit" disabled={loading}>
                {loading ? "Creating…" : "Create"}
              </Button>
              <Button variant="outline" type="button" onClick={handleClear}>
                Cancel
              </Button>
            </div>
            {message ? <p className="text-sm">{message}</p> : null}
          </div>
        </form>
      </div>
    </div>
  );
}

function initials(name: string) {
  if (!name) return "C";
  const parts = name.trim().split(" ").filter(Boolean);
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return (parts[0]![0] + parts[parts.length - 1]![0]).toUpperCase();
}
