"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar"; // <- your Calendar barrel
import { Calendar as CalendarIcon, Save, X } from "lucide-react";

type User = {
  email: string;
  name: string;
  dob: string; // YYYY-MM-DD
  image?: string | null;
  totalXp: number;
};

export default function DetailsForm({
  readOnly = false,
  initialUser,
  onSave,
  onCancel,
}: {
  readOnly?: boolean;
  initialUser: User;
  onSave?: (updated: { name: string; image: string | null }) => void; // DOB/XP are non-editable per spec
  onCancel?: () => void;
}) {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState(initialUser.name);
  const [previewUrl, setPreviewUrl] = useState<string | null>(initialUser.image ?? null);
  const [dob, setDob] = useState<Date | null>(parseISODate(initialUser.dob));

  useEffect(() => {
    setName(initialUser.name);
    setPreviewUrl(initialUser.image ?? null);
    setDob(parseISODate(initialUser.dob));
  }, [initialUser]);

  const onPickImage = () => {
    if (!readOnly) fileRef.current?.click();
  };

  const onAvatarKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (readOnly) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      fileRef.current?.click();
    }
  };

  const onFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (readOnly) return;
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    // TODO: upload and replace previewUrl with a permanent URL.
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (readOnly) return;
    onSave?.({ name, image: previewUrl ?? null });
  };

  const handleCancel = () => {
    setName(initialUser.name);
    setPreviewUrl(initialUser.image ?? null);
    setDob(parseISODate(initialUser.dob));
    onCancel?.();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader className="justify-left">
          <CardTitle className="text-2xl md:text-2xl space-y6">Your Details</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Avatar centered */}
          <div className="flex justify-left">
              <span className="text-xl p-9 text-muted-foreground">Profile Pic:</span>
              <div
                role={!readOnly ? "button" : undefined}
                tabIndex={!readOnly ? 0 : -1}
                onClick={onPickImage}
              onKeyDown={onAvatarKeyDown}
              title={readOnly ? undefined : "Click to change photo"}
              className={`rounded-full ${!readOnly ? "cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring" : "cursor-default"}`}
            >
              <Avatar className="h-28 w-28">
                <AvatarImage src={previewUrl ?? ""} alt={name || "User"} />
                <AvatarFallback>{initials(name)}</AvatarFallback>
              </Avatar>

              {/* hidden file input */}
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={onFileChange}
                className="hidden"
                disabled={readOnly}
              />
            </div>
          </div>

          {/* Name + XP stat (stack on mobile, side-by-side on md+) */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Name */}
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                readOnly={readOnly}
                disabled={readOnly}
                placeholder="Your display name"
                className="mt-2"
              />
            </div>

            {/* XP (no input — stat style) */}
            <div>
              <Label>Total XP Earned</Label>
              <div className="mt-2 h-10 rounded-md border bg-muted/30 px-3 flex items-center">
                <span className="text-base font-semibold">
                  {initialUser.totalXp.toLocaleString()} XP
                </span>
              </div>
            </div>
          </div>

          {/* Email + DOB (DOB uses shadcn Calendar; disabled when read-only) */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={initialUser.email} readOnly disabled className="mt-2" />
            </div>

            <div>
              <Label>Date of birth</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    disabled={readOnly}
                    className="mt-2 w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dob ? formatDate(dob) : <span className="text-muted-foreground">Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={dob ?? undefined}
                    onSelect={(d) => !readOnly && setDob(d ?? dob)}
                    initialFocus
                    // prevent future dates; fully disable if readOnly
                    disabled={(date) => readOnly || date > new Date()}
                    fromYear={1900}
                    toYear={new Date().getFullYear()}
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardContent>

        {!readOnly && (
          <CardFooter className="flex gap-2 justify-center p-5">
            <Button type="button" variant="ghost" onClick={handleCancel}>
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button type="submit">
              <Save className="mr-2 h-4 w-4" />
              Save changes
            </Button>
          </CardFooter>
        )}
      </Card>
    </form>
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
