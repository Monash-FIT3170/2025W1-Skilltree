"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon, Pencil, Save } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type User = {
  email: string;
  name: string;
  dob: string; // YYYY-MM-DD
  image?: string | null;
  totalXp: number;
};

export default function DetailsForm({
  initialUser,
  onSave,
}: {
  initialUser: User;
  onSave?: (updated: { name: string; image: string | null }) => void;
}) {
  // internal edit state
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  const fileRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState(initialUser.name);
  const [previewUrl, setPreviewUrl] = useState<string | null>(initialUser.image ?? null);
  const [dob, setDob] = useState<Date | null>(parseISODate(initialUser.dob));
  const [dobOpen, setDobOpen] = useState(false);

  // reset local state if initial user changes
  useEffect(() => {
    setName(initialUser.name);
    setPreviewUrl(initialUser.image ?? null);
    setDob(parseISODate(initialUser.dob));
  }, [initialUser]);

  const resetEdits = () => {
    setName(initialUser.name);
    setPreviewUrl(initialUser.image ?? null);
    setDob(parseISODate(initialUser.dob)); // ← also reset DOB
  };

  const onPickImage = () => isEditing && fileRef.current?.click();

  const onAvatarKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (!isEditing) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      fileRef.current?.click();
    }
  };

  const onFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!isEditing) return;
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const toggleEdit = () => {
    if (isEditing) {
      // switching OFF editing without saving -> reset
      resetEdits();
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  // Confirm & save flow (AlertDialog)
  const [confirmOpen, setConfirmOpen] = useState(false);
  const openConfirm = () => setConfirmOpen(true);
  const closeConfirm = () => setConfirmOpen(false);

  const doSave = async () => {
    try {
      setSaving(true);
      await onSave?.({ name, image: previewUrl ?? null });
      setIsEditing(false);
      closeConfirm();
    } finally {
      setSaving(false);
    }
  };

  return (
    <Card className="max-w-3xl mx-auto">
      {/* Header with title on left, Edit/Save on right */}
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-2xl md:text-2xl">Your Details</CardTitle>

        {!isEditing ? (
          <Button
            type="button"
            size="sm"
            className="inline-flex items-center"
            onClick={toggleEdit}
            title="Edit details"
          >
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </Button>
        ) : (
          <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
            <AlertDialogTrigger asChild>
              <Button
                type="button"
                size="sm"
                className="inline-flex items-center"
                onClick={openConfirm}
                disabled={saving}
                title="Save changes"
              >
                <Save className="mr-2 h-4 w-4" />
                Save
              </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm Changes</AlertDialogTitle>
                <AlertDialogDescription>
                  Save your updated profile details? This will overwrite your current name and photo.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel
                  disabled={saving}
                  onClick={() => {
                    resetEdits();
                    setIsEditing(false);
                    closeConfirm();
                  }}
                >
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction onClick={doSave} disabled={saving}>
                  {saving ? "Saving…" : "Save changes"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 md:grid-cols-3 items-start">
          {/* Col 1: Profile Pic */}
          <div className="md:row-span-2">
            <Label className="text-sm text-muted-foreground">Profile Pic:</Label>
            <div
              role={isEditing ? "button" : undefined}
              tabIndex={isEditing ? 0 : -1}
              onClick={onPickImage}
              onKeyDown={onAvatarKeyDown}
              title={isEditing ? "Click to change photo" : undefined}
              className={`mt-2 inline-flex rounded-full ${
                isEditing
                  ? "cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring"
                  : "cursor-default"
              }`}
            >
              <Avatar className="h-[90px] w-[90px]">
                <AvatarImage src={previewUrl ?? ""} alt={name || "User"} />
                <AvatarFallback>{initials(name)}</AvatarFallback>
              </Avatar>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={onFileChange}
                className="hidden"
                disabled={!isEditing}
              />
            </div>
          </div>

          {/* Col 2 / Row 1: Name */}
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              readOnly={!isEditing}
              disabled={!isEditing}
              placeholder="Your display name"
              className="mt-2"
            />
          </div>

          {/* Col 3 / Row 1: Total XP (stat) */}
          <div>
            <Label>Total XP Earned</Label>
            <div className="mt-2 h-10 rounded-md border bg-white px-3 flex items-center">
              <span className="text-base font-semibold">
                {initialUser.totalXp.toLocaleString()} XP
              </span>
            </div>
          </div>

          {/* Col 2 / Row 2: Email (ro) */}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" value={initialUser.email} readOnly disabled className="mt-2" />
          </div>

          {/* Col 3 / Row 2: DOB (calendar; disabled unless editing) */}
          <div>
            <Label>Date of birth</Label>

            {/* Controlled popover; only opens/works in edit mode */}
            <Popover
              open={isEditing ? dobOpen : false}
              onOpenChange={(o) => {
                if (isEditing) setDobOpen(o);
              }}
            >
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  disabled={!isEditing}
                  className="mt-2 w-full justify-start text-left font-normal"
                  onClick={() => {
                    if (isEditing) setDobOpen(true);
                  }}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dob ? formatDate(dob) : (
                    <span className="text-muted-foreground">Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>

              <PopoverContent
                className="w-auto p-0 z-50"
                align="start"
                side="bottom"
                sideOffset={6}
              >
                <Calendar
                  mode="single"
                  numberOfMonths={1}
                  captionLayout="dropdown"
                  hideNavigation
                  fromYear={1900}
                  toYear={new Date().getFullYear()}
                  selected={dob ?? undefined}
                  onSelect={(d) => {
                    if (!isEditing || !d) return;
                    setDob(d);
                    setDobOpen(false);
                  }}
                  initialFocus
                  disabled={(date) => !isEditing || date > new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </CardContent>
    </Card>
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
