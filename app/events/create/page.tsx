"use client";

// Create Event Page UI
import React, { useMemo, useState } from "react";

interface Participant {
  id: string;
  name: string;
  rank: string; // e.g., "Diamond IV"
}

// ---- Mock Data ----
const INITIAL_ADDED: Participant[] = [
  { id: "1", name: "James", rank: "Diamond IV" },
  { id: "2", name: "Mark", rank: "Bronze III" },
  { id: "3", name: "Ted", rank: "Wood I" },
  { id: "4", name: "John", rank: "Paper V" },
  { id: "5", name: "Aidan", rank: "Silver III" },
];

const SUGGESTED: Participant[] = [
  { id: "s1", name: "Alex", rank: "Bronze I" },
  { id: "s2", name: "Riley", rank: "Silver II" },
  { id: "s3", name: "Taylor", rank: "Gold IV" },
  { id: "s4", name: "Sam", rank: "Iron II" },
  { id: "s5", name: "Jordan", rank: "Paper II" },
];

function PillToggle({
  value,
  onChange,
}: {
  value: "Ranked" | "Unranked";
  onChange: (v: "Ranked" | "Unranked") => void;
}) {
  const active = "bg-emerald-400 text-black font-medium ring-2 ring-purple-500/70";
  const inactive = "bg-gray-200 text-gray-600 hover:bg-gray-300";
  return (
    <div className="flex gap-3">
      <button
        type="button"
        onClick={() => onChange("Ranked")}
        className={`h-8 rounded-md px-4 transition ${
          value === "Ranked" ? active : inactive
        }`}
      >
        Ranked
      </button>
      <button
        type="button"
        onClick={() => onChange("Unranked")}
        className={`h-8 rounded-md px-4 transition ${
          value === "Unranked" ? active : inactive
        }`}
      >
        Unranked
      </button>
    </div>
  );
}

function AvatarCircle() {
  return <div className="h-9 w-9 rounded-full bg-gray-300/90" />;
}

function AddedParticipantRow({ p, onRemove }: { p: Participant; onRemove?: () => void }) {
  return (
    <div className="flex items-center justify-between rounded-md bg-white px-4 py-3 shadow-sm ring-1 ring-black/5">
      <div className="flex items-center gap-3">
        <AvatarCircle />
        <div className="text-gray-900 font-medium">{p.name}</div>
      </div>
      <div className="flex items-center gap-3 text-sm text-gray-500">
        <span className="whitespace-nowrap">Rank: {p.rank}</span>
        {onRemove && (
          <button
            onClick={onRemove}
            className="rounded-md px-2 py-1 text-xs text-gray-500 hover:bg-gray-100"
            aria-label={`Remove ${p.name}`}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}

function SuggestedCard({ p, onAdd }: { p: Participant; onAdd?: () => void }) {
  return (
    <div className="flex items-center justify-between rounded-md bg-white px-4 py-3 shadow-sm ring-1 ring-black/5">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-gray-300" />
        <div>
          <div className="text-gray-900 font-medium leading-none">{p.name}</div>
          <div className="text-xs text-gray-500 mt-1">Rank: {p.rank}</div>
        </div>
      </div>
      {onAdd && (
        <button
          onClick={onAdd}
          className="rounded-md border px-3 py-1 text-sm hover:bg-gray-50"
        >
          Add
        </button>
      )}
    </div>
  );
}

export default function CreateEventPage() {
  const [mode, setMode] = useState<"Ranked" | "Unranked">("Ranked");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [added, setAdded] = useState<Participant[]>(INITIAL_ADDED);
  const [showAllSuggested, setShowAllSuggested] = useState(false);

  const suggestedToShow = useMemo(
    () => (showAllSuggested ? SUGGESTED : SUGGESTED.slice(0, 4)),
    [showAllSuggested]
  );

  const addParticipant = (p: Participant) => {
    if (!added.find((x) => x.id === p.id)) setAdded((prev) => [...prev, p]);
  };
  const removeParticipant = (id: string) =>
    setAdded((prev) => prev.filter((p) => p.id !== id));

  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-semibold text-gray-900">Create Event</h1>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left column */}
          <section className="rounded-xl bg-gray-50 p-6 ring-1 ring-black/5">
            <div className="space-y-8">
              <div>
                <div className="text-gray-800 font-medium">Select Event Style</div>
                <div className="mt-3">
                  <PillToggle value={mode} onChange={setMode} />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-gray-800">Event Title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-xl bg-white px-4 py-2 ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-gray-800">Event Description</label>
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  rows={6}
                  className="w-full resize-none rounded-xl bg-white px-4 py-3 ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <div className="text-gray-800 font-medium">Suggested Participants</div>
                <div className="mt-3 space-y-3">
                  {suggestedToShow.map((p) => (
                    <SuggestedCard key={p.id} p={p} onAdd={() => addParticipant(p)} />
                  ))}
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setShowAllSuggested((s) => !s)}
                    className="rounded-md bg-gray-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-black"
                  >
                    {showAllSuggested ? "View Less" : "View All"}
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Right column */}
          <section>
            <div className="rounded-xl bg-gray-50 p-6 ring-1 ring-black/5">
              <div className="text-gray-800 font-medium">Added Participants</div>
              <div className="mt-3 space-y-3">
                {added.map((p) => (
                  <AddedParticipantRow
                    key={p.id}
                    p={p}
                    onRemove={() => removeParticipant(p.id)}
                  />
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-gray-700">
                <button
                  className="flex items-center gap-1 rounded-md px-2 py-1 hover:bg-gray-100"
                  onClick={() => {
                    const more = SUGGESTED.filter((s) => !added.find((a) => a.id === s.id));
                    if (more.length) setAdded((prev) => [...prev, ...more.slice(0, 2)]);
                  }}
                >
                  <span>Show more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}