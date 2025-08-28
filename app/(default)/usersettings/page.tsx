"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { KeyRound } from "lucide-react";
import DetailsForm from "@/components/DetailsForm";

// Mock current user — replace with your real session/user fetch
const currentUser = {
  email: "jane.doe@example.com",
  name: "Jane Doe",
  dob: "1998-04-15",
  image: null as string | null,
  totalXp: 12850,
};

export default function UserSettingsPage() {
  return (
    <div className="px-4 py-8 mb-60">
      {/* Match DetailsForm width */}
      <div className="mx-auto w-full max-w-3xl">
        <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">User Settings</h1>

          {/* Keep position stable */}
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" className="whitespace-nowrap">
              <Link href="/change-password">
                <KeyRound className="mr-2 h-4 w-4" />
                Change password
              </Link>
            </Button>
          </div>
        </header>

        <DetailsForm
          initialUser={currentUser}
          onSave={async (updated) => {
            // TODO: persist via API, e.g.:
            // await fetch("/api/user", { method: "PUT", body: JSON.stringify(updated) });
          }}
        />
      </div>
    </div>
  );
}
