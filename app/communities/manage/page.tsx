"use client";

import React, { useState, useEffect } from "react";
import { Plus, UserCheck, UserX, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChipInput } from "@/components/shared/chip-input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TextEditor = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) => (
  <Textarea
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder="Write your announcement..."
    rows={6}
    className="mb-2"
  />
);

type Community = {
  id: number;
  name: string;
};

export default function ManageCommunities() {
  const [communities] = useState<Community[]>([
    { id: 1, name: " Community 1    " },
    { id: 2, name: " Community 2   " },
    { id: 3, name: " Community 3    " },
  ]);
    const [currentUser] = useState({
    id: 1,
    name: "You" // This should come from your auth system
  });


  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(
    null
  );

  // === Roles ===
  const [availableRoles, setAvailableRoles] = useState<string[]>([
    "admin",
    "member",
  ]);
  const [newRoleName, setNewRoleName] = useState("");

  // === Community Details ===
  const [communityName, setCommunityName] = useState("");
  const [communityTags, setCommunityTags] = useState<string[]>([]);
  const [communityDescription, setCommunityDescription] = useState("");
  const [iconFile, setIconFile] = useState<File | null>(null);
  const [iconPreview, setIconPreview] = useState<string | null>(null);

  // === Members ===
  const [members, setMembers] = useState<
    { id: number; name: string; role: string }[]
  >([]);
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberRole, setNewMemberRole] = useState("member");

  // === Community Settings ===
  const [isPrivate, setIsPrivate] = useState(false);
  const [allowPosts, setAllowPosts] = useState(true);

  // === Content & Verification (pending proofs) ===
  const [pendingProofs, setPendingProofs] = useState<
    { id: number; user: string; proofType: string }[]
  >([
    { id: 1, user: "         ", proofType: "ID Verification" },
    { id: 2, user: "         ", proofType: " " },
  ]);

  // === Events & Competitions ===
  const [events, setEvents] = useState<
    { id: number; title: string; date: string; description: string }[]
  >([]);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDate, setNewEventDate] = useState("");
  const [newEventDescription, setNewEventDescription] = useState("");
  const [eventErrors, setEventErrors] = useState<string | null>(null);

  // === Analytics & Leaderboards ===
  const leaderboard = [
    { rank: 1, name: " ", points: 1200 },
    { rank: 2, name: " ", points: 950 },
    { rank: 3, name: "", points: 875 },
  ];

  // === Announcements ===
  const [announcement, setAnnouncement] = useState("");
  const [announcementPreview, setAnnouncementPreview] = useState(false);

  // === Handlers ===
  const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setIconFile(file);
      setIconPreview(URL.createObjectURL(file));
    }
  };

  // Add new role to available roles list
  const addNewRole = () => {
    const trimmed = newRoleName.trim().toLowerCase();
    if (!trimmed) return alert("Enter a role name");
    if (availableRoles.includes(trimmed))
      return alert("This role already exists");
    setAvailableRoles((prev) => [...prev, trimmed]);
    setNewRoleName("");
  };

  // Add new member with selected role
  const addMember = () => {
    if (!newMemberName.trim()) return alert("Enter a member name");
    setMembers((prev) => [
      ...prev,
      { id: Date.now(), name: newMemberName.trim(), role: newMemberRole },
    ]);
    setNewMemberName("");
    setNewMemberRole("member");
  };

  // Toggle member role by cycling through available roles
  const toggleMemberRole = (id: number) => {
    setMembers((prev) =>
      prev.map((m) => {
        if (m.id !== id) return m;
        const currentIndex = availableRoles.indexOf(m.role);
        const nextIndex = (currentIndex + 1) % availableRoles.length;
        return { ...m, role: availableRoles[nextIndex] };
      })
    );
  };

  // Or, alternatively, allow changing role by dropdown (can implement if you prefer)

  const removeMember = (id: number) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  const approveProof = (id: number) => {
    setPendingProofs((prev) => prev.filter((p) => p.id !== id));
    alert("Proof approved");
  };

  const rejectProof = (id: number) => {
    setPendingProofs((prev) => prev.filter((p) => p.id !== id));
    alert("Proof rejected");
  };

  const validateAndAddEvent = () => {
    setEventErrors(null);
    if (!newEventTitle.trim()) return setEventErrors("Event title is required");
    if (!newEventDate) return setEventErrors("Event date is required");
    if (new Date(newEventDate) < new Date())
      return setEventErrors("Event date cannot be in the past");
    setEvents((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: newEventTitle.trim(),
        date: newEventDate,
        description: newEventDescription.trim(),
      },
    ]);
    setNewEventTitle("");
    setNewEventDate("");
    setNewEventDescription("");
  };

  const handleSaveDetails = () => {
    alert("Community details saved!");
  };

  useEffect(() => {
    if (selectedCommunity) {
      setCommunityName(selectedCommunity.name);
      setCommunityTags([]);
      setCommunityDescription("");
      setIconFile(null);
      setIconPreview(null);
      setMembers([{
        id: currentUser.id,
        name: currentUser.name,
        role: "admin"
      }]);;
      setNewMemberName("");
      setNewMemberRole("member");
      setIsPrivate(false);
      setAllowPosts(true);
      setPendingProofs([
        { id: 1, user: " ", proofType: "ID Verification" },
        { id: 2, user: " ", proofType: " Proof" },
      ]);
      setEvents([]);
      setNewEventTitle("");
      setNewEventDate("");
      setNewEventDescription("");
      setEventErrors(null);
      setAnnouncement("");
      setAnnouncementPreview(false);
      setAvailableRoles(["admin", "member"]); // reset roles on new community load
    }
  }, [selectedCommunity,currentUser]);

  if (!selectedCommunity) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Communities</h2>
        <ul className="space-y-3">
          {communities.map((c) => (
            <li key={c.id}>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => setSelectedCommunity(c)}
              >
                {c.name}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setSelectedCommunity(null)}
        className="mb-4 flex items-center space-x-1"
      >
        <ArrowLeft size={16} />
        <span>Back to Communities</span>
      </Button>

      <h1 className="text-3xl font-bold mb-6">
        Manage: {selectedCommunity.name}
      </h1>

      {/* Members & Roles */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Members & Roles</h2>

        {/* Add new role */}
        <div className="flex items-center space-x-3 mb-4 max-w-md">
          <Input
            placeholder="Add new role"
            value={newRoleName}
            onChange={(e) => setNewRoleName(e.target.value)}
          />
          <Button onClick={addNewRole}>
            <Plus size={16} className="mr-2" />
            Add Role
          </Button>
        </div>

        {/* Members list */}
        <div className="space-y-2 mb-4">
          {members.length === 0 && <p>No members added yet.</p>}
          {members.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between border p-2 rounded"
            >
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p
                    className={`text-sm font-semibold px-2 py-1 rounded ${
                      member.role === "admin"
                        ? "bg-green-200 text-green-800"
                        : member.role === "member"
                        ? "bg-gray-200 text-gray-800"
                        : "bg-blue-200 text-blue-800"
                    }`}
                  >
                    {member.role.toUpperCase()}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {/* Toggle role cycles through availableRoles */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleMemberRole(member.id)}
                  title={`Cycle Role for ${member.name}`}
                >
                  <UserCheck size={16} />
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeMember(member.id)}
                  title={`Remove ${member.name}`}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Add new member */}
        <div className="flex space-x-3 max-w-md">
          <Input
            placeholder="New member name"
            value={newMemberName}
            onChange={(e) => setNewMemberName(e.target.value)}
          />
          <select
            className="border rounded px-2"
            value={newMemberRole}
            onChange={(e) => setNewMemberRole(e.target.value)}
          >
            {availableRoles.map((role) => (
              <option key={role} value={role}>
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </option>
            ))}
          </select>
          <Button onClick={addMember}>
            <Plus size={16} className="mr-2" />
            Add Member
          </Button>
        </div>
      </section>

      {/* Community Settings */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Community Settings</h2>
        <div className="space-y-4 max-w-lg">
          <div>
            <Label htmlFor="communityName">Community Name</Label>
            <Input
              id="communityName"
              value={communityName}
              onChange={(e) => setCommunityName(e.target.value)}
              placeholder="Enter community name"
            />
          </div>
          <div>
            <Label>Community Tags</Label>
            <ChipInput
              initialChips={communityTags}
              onChange={setCommunityTags}
              placeholder="Add tags"
            />
          </div>
          <div>
            <Label htmlFor="communityDescription">Description</Label>
            <Textarea
              id="communityDescription"
              value={communityDescription}
              onChange={(e) => setCommunityDescription(e.target.value)}
              placeholder="Describe your community"
              rows={4}
            />
          </div>
          <div>
            <Label htmlFor="iconUpload">Community Icon</Label>
            <input
              type="file"
              accept="image/*"
              onChange={handleIconChange}
              id="iconUpload"
            />
            {iconPreview && (
              <img
                src={iconPreview}
                alt="Community Icon Preview"
                className="w-20 h-20 mt-2 rounded-full object-cover"
              />
            )}
          </div>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={isPrivate}
                onChange={() => setIsPrivate(!isPrivate)}
              />
              <span>Private Community</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={allowPosts}
                onChange={() => setAllowPosts(!allowPosts)}
              />
              <span>Allow Members to Post</span>
            </label>
          </div>
          <Button onClick={handleSaveDetails}>Save Settings</Button>
        </div>
      </section>

      {/* Content & Verification */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Content & Verification</h2>
        {pendingProofs.length === 0 && <p>No pending proofs.</p>}
        <ul className="space-y-2 max-w-lg">
          {pendingProofs.map((proof) => (
            <li
              key={proof.id}
              className="border p-3 rounded flex justify-between items-center"
            >
              <div>
                <p>
                  <strong>{proof.user}</strong> - {proof.proofType}
                </p>
              </div>
              <div className="space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => approveProof(proof.id)}
                >
                  Approve
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => rejectProof(proof.id)}
                >
                  Reject
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Events & Competitions */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Events & Competitions</h2>
        <div className="max-w-lg space-y-3 mb-4">
          <Input
            placeholder="Event title"
            value={newEventTitle}
            onChange={(e) => setNewEventTitle(e.target.value)}
          />
          <Input
            type="date"
            value={newEventDate}
            onChange={(e) => setNewEventDate(e.target.value)}
          />
          <Textarea
            placeholder="Event description"
            rows={3}
            value={newEventDescription}
            onChange={(e) => setNewEventDescription(e.target.value)}
          />
          {eventErrors && (
            <p className="text-red-600 font-semibold">{eventErrors}</p>
          )}
          <Button onClick={validateAndAddEvent}>
            <Plus size={16} className="mr-2" />
            Create Event
          </Button>
        </div>
        <div>
          {events.length === 0 && <p>No events created yet.</p>}
          <ul className="space-y-2 max-w-lg">
            {events.map((event) => (
              <li key={event.id} className="border p-3 rounded">
                <p className="font-semibold">{event.title}</p>
                <p className="text-sm text-gray-600">{event.date}</p>
                <p>{event.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Analytics & Leaderboards */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Analytics & Leaderboards</h2>
        <table className="w-full max-w-md border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-3 py-1">Rank</th>
              <th className="border border-gray-300 px-3 py-1">Name</th>
              <th className="border border-gray-300 px-3 py-1">Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map(({ rank, name, points }) => (
              <tr key={rank} className="text-center">
                <td className="border border-gray-300 px-3 py-1">{rank}</td>
                <td className="border border-gray-300 px-3 py-1">{name}</td>
                <td className="border border-gray-300 px-3 py-1">{points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Announcements */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Announcements</h2>
        <div className="max-w-lg space-y-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setAnnouncementPreview(!announcementPreview)}
          >
            {announcementPreview ? "Edit" : "Preview"}
          </Button>

          {!announcementPreview && (
            <TextEditor value={announcement} onChange={setAnnouncement} />
          )}

          {announcementPreview && (
            <div className="border p-4 rounded bg-gray-50 whitespace-pre-wrap">
              {announcement || <em>No announcement to preview</em>}
            </div>
          )}

          <Button
            onClick={() => alert("Announcement saved!")}
            disabled={!announcement.trim()}
          >
            Save Announcement
          </Button>
        </div>
      </section>
    </div>
  );
}
