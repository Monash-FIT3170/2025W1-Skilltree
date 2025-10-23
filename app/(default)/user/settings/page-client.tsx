"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { KeyRound } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { TUser } from "@/types";
import { format } from "date-fns";
import { updateUserAction } from "@/actions/update-user-action";
import { toast } from "sonner";
import { userStore } from "@/stores";
import { getUserAction } from "@/actions/get-user-action";
import { useRouter } from "next/navigation";
import { initials } from "@/lib/utils";

export default function UserSettingsClient({ user }: { user: TUser }) {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState(user.name);
  const [previewUrl, setPreviewUrl] = useState<string | null>(user.pfp ?? null);
  const [file, setFile] = useState<File | null>(null);
  const [isPrivate, setIsPrivate] = useState(false);
  const editRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

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

  const handleSubmit = async () => {
    const updateUser = await updateUserAction({
      name,
      pfp: previewUrl ?? "",
    });

    if (!updateUser.ok) {
      return toast.error("Failed to update profile");
    }

    userStore.setState((state) => ({
      user: {
        ...state.user,
        ...updateUser.message,
      },
    }));

    toast.success("Profile updated successfully");
  };

  return (
    <div className="container flex flex-col w-full h-full mx-auto">
      <header className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">User Settings</h1>
      </header>
      <div>
        <div className="flex flex-col items-start w-full gap-5 md:flex-row md:items-stretch">
          <div className="flex flex-col items-center w-full md:items-start md:w-auto">
            <Avatar
              onClick={handleAvatarClick}
              className="cursor-pointer h-28 w-28 md:h-48 md:w-48 aspect-square"
            >
              <AvatarImage src={previewUrl ?? undefined} alt={name || "User"} />
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
            className="flex flex-col items-center w-full gap-5 px-2 justify-stretch md:px-0"
          >
            <div className="flex flex-col w-full gap-2">
              <Label className="text-muted-foreground">Name</Label>
              <Input
                className="mt-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col w-full gap-2">
              <Label className="text-muted-foreground">Total XP Earned</Label>
              <Input disabled value={user.xpPoint!.toLocaleString()} />
            </div>

            <div className="flex flex-col w-full gap-2">
              <Label className="text-muted-foreground">Email</Label>
              <Input disabled value={user.email} />
            </div>

            <div className="flex flex-col w-full gap-2">
              <Label className="text-muted-foreground">Date of birth</Label>
              <Input
                disabled
                readOnly
                value={format(user.dateOfBirth!, "PPP")}
              />
            </div>

            <div className="flex flex-col w-full gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="private-account"
                  checked={isPrivate}
                  onCheckedChange={(checked) =>
                    setIsPrivate(checked as boolean)
                  }
                />
                <Label
                  htmlFor="private-account"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Make my profile private
                </Label>
              </div>
              <p className="text-xs text-muted-foreground">
                Private profiles cannot be followed
              </p>
            </div>

            <div className="flex flex-wrap justify-end w-full gap-3">
              <Button
                onClick={() => router.push("/user/profile")}
                variant="outline"
              >
                Go Back
              </Button>
              <Button onClick={handleSubmit}>Save Changes</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
