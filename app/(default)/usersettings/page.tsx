"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { KeyRound, Pencil, Save, X } from "lucide-react";
import DetailsForm from "@/components/DetailsForm";

// Mock current user — swap with your real session/user fetch
const currentUser = {
  email: "jane.doe@example.com",
  name: "Jane Doe",
  dob: "1998-04-15",
  image: null as string | null,
  totalXp: 12850,
};

export default function UserSettingsPage() {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="container mx-auto p-20 m-0 h-screen">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">User Settings</h1>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline">
            <Link href="/settings/password">
              <KeyRound className="mr-2 h-4 w-4" />
              Change password
            </Link>
          </Button>

          {editMode ? (
            <Button
              variant="ghost"
              onClick={() => setEditMode(false)}
              className="inline-flex items-center"
              title="Exit edit mode"
            >
              <X className="mr-2 h-4 w-4" />
              Done
            </Button>
          ) : (
            <Button
              onClick={() => setEditMode(true)}
              className="inline-flex items-center"
            >
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Button>
          )}
        </div>
      </header>

      <DetailsForm
        readOnly={!editMode}
        initialUser={currentUser}
        onSave={(updated) => {
          // TODO: call your API to persist changes, then…
          // e.g., await fetch('/api/user', { method: 'PUT', body: JSON.stringify(updated) })
          setEditMode(false);
        }}
        onCancel={() => setEditMode(false)}
      />
    </div>
  );
}
