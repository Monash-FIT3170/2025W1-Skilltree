"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, Plus } from "lucide-react";
export default function CreateCommunityForm() {
  const [form, setForm] = useState({
    communityName: "",
    communityDesc: "",
  });
  const [category, setCategory] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagDraft, setTagDraft] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState<string | null>(null); // To store the logged-in user
  // Helper to reset form state
  const resetForm = () => {
    setForm({ communityName: "", communityDesc: "" });
    setCategory("");
    setTags([]);
    setTagDraft("");
    setMessage("");
    setIconFile(null);
    setIconPreview(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  // Fetch the logged-in user's details when the component mounts
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/getUser");
        const data = await res.json();
        setUser(data?.success ? data?.email ?? null : null);
      } catch {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  const [iconFile, setIconFile] = useState<File | null>(null);
  const [iconPreview, setIconPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const onIconClick = () => fileRef.current?.click();
  const onIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIconFile(file);
    const url = URL.createObjectURL(file);
    setIconPreview(url);
  };

    const addTag = (t: string) => {
    const v = t.trim();
    if (!v) return;
    if (tags.includes(v)) return;
    setTags((prev) => [...prev, v]);
    setTagDraft("");
  };
  const removeTag = (t: string) => setTags((prev) => prev.filter((x) => x !== t));
  const onTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(tagDraft);
    }
    if (e.key === "Backspace" && !tagDraft && tags.length) {
      // quick delete last tag when input empty
      removeTag(tags[tags.length - 1]);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const payload = {
        communityName: form.communityName,
        communityDesc: form.communityDesc,
        category,
        tags,
        ownerEmail: user ?? undefined, // optional; backend can ignore
        // For now we are not sending the image file; wire this later as multipart/form-data
      };
      const res = await fetch("/api/createCommunity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setMessage(
        data?.success
          ? "Community Successfully Created"
          : `Community creation failed: ${data?.message ?? "Unknown error"}`
      );
    } catch (err) {
      setMessage("Error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] w-full grid place-items-start sm:place-items-center p-4 sm:p-8 bg-transparent">
      <div className="w-full max-w-xl rounded-2xl bg-white p-6 sm:p-8 shadow-xl border">
        <div className="mb-6 flex items-start justify-between gap-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">Create a community!</h2>
          <div className="text-xs sm:text-sm text-zinc-500">
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Icon + Category row */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <Label className="text-zinc-700 w-12">Icon:</Label>
              <button
                type="button"
                onClick={onIconClick}
                className="relative h-20 w-20 shrink-0 rounded-full overflow-hidden border bg-zinc-100 grid place-items-center"
                aria-label="Upload icon"
              >
                {iconPreview ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={iconPreview} alt="icon" className="h-full w-full object-cover" />
                ) : (
                  <Plus className="h-6 w-6 text-zinc-400" />
                )}
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  onChange={onIconChange}
                  className="hidden"
                />
              </button>
            </div>

            <div className="ml-auto">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-44">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="arts">Arts</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                  <SelectItem value="study">Study</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="communityName" className="text-zinc-700">
              Community Name
            </Label>
            <Input
              id="communityName"
              name="communityName"
              placeholder=""
              required
              value={form.communityName}
              onChange={handleChange}
              className="h-11"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="communityDesc" className="text-zinc-700">
              Community Description
            </Label>
            <Textarea
              id="communityDesc"
              name="communityDesc"
              placeholder=""
              required
              rows={4}
              value={form.communityDesc}
              onChange={handleChange}
              className="resize-none"
            />
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <Label className="text-zinc-700">Community Tags</Label>
            <div className="flex flex-wrap items-center gap-2 rounded-md border p-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1 rounded-full bg-zinc-900 text-white px-3 py-1 text-xs"
                >
                  {t}
                  <button
                    type="button"
                    onClick={() => removeTag(t)}
                    className="grid place-items-center"
                    aria-label={`Remove ${t}`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
              <input
                value={tagDraft}
                onChange={(e) => setTagDraft(e.target.value)}
                onKeyDown={onTagKeyDown}
                placeholder="Add tag…"
                className="m-1 flex-1 min-w-[120px] border-none outline-none h-8 px-2 text-sm bg-transparent"
              />
            </div>
            <p className="text-xs text-zinc-500">Press Enter or comma to add a tag.</p>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2">
            <Button asChild variant="destructive" className="px-6 rounded-xl">
              <button type="button" onClick={resetForm}>Cancel</button>
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="px-6 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800"
            >
              {loading ? "Creating…" : "Create"}
            </Button>
          </div>

          {message ? (
            <p className="text-sm text-zinc-700">{message}</p>
          ) : null}
        </form>
      </div>
    </div>
  );
}
