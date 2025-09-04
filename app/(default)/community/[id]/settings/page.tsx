"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Plus, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChipInput } from "@/components/shared/chip-input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

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

export default function ManageCommunities() {
  const params = useParams();
  const router = useRouter();
  const communityId = params.id;

  const [availableRoles, setAvailableRoles] = useState<string[]>([
    "admin",
    "moderator",
    "member",
  ]);
  const [newRoleName, setNewRoleName] = useState("");

  const [communityName, setCommunityName] = useState("");
  const [communityTags, setCommunityTags] = useState<string[]>([]);
  const [communityDescription, setCommunityDescription] = useState("");
  const [iconFile, setIconFile] = useState<File | null>(null);
  const [iconPreview, setIconPreview] = useState<string | null>(null);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [announcementDialogOpen, setAnnouncementDialogOpen] = useState(false);

  const [members, setMembers] = useState<
    { id: number; name: string; role: string }[]
  >([]);
  const [newMemberName, setNewMemberName] = useState("");

  const [isRestricted, setIsRestricted] = useState(false);

  const [events, setEvents] = useState<
    { id: number; title: string; date: string; description: string }[]
  >([]);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDate, setNewEventDate] = useState("");
  const [newEventDescription, setNewEventDescription] = useState("");
  const [eventErrors, setEventErrors] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState("");

  const [announcement, setAnnouncement] = useState("");
  const [announcementPreview, setAnnouncementPreview] = useState(false);

  const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setIconFile(file);
      setIconPreview(URL.createObjectURL(file));
    }
  };

  const addMember = (role: string) => {
    if (!newMemberName.trim()) return alert("Enter a member name");
    setMembers((prev) => [
      ...prev,
      { id: Date.now(), name: newMemberName.trim(), role },
    ]);
    setNewMemberName("");
    setSelectedRole("member");
  };

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

  const removeMember = (id: number) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  async function createEvent(payload: any) {
    return new Promise((resolve) => setTimeout(resolve, 500));
  }

  const validateAndAddEvent = async () => {
    setEventErrors(null);

    if (!newEventTitle.trim()) return setEventErrors("Event title is required");
    if (!newEventDate) return setEventErrors("Event date is required");

    try {
      const payload = {
        name: newEventTitle.trim(),
        communityId: String(communityId),
        experienceId: "default",
        rankedStatus: true,
        experiencePayout: 0,
      };

      await createEvent(payload);

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
    } catch (err) {
      setEventErrors("Failed to create event.");
    }
  };

  const handleSaveDetails = () => {
    alert("Community details saved for: " + communityId);
  };

  useEffect(() => {
    if (!communityId) return;

    setCommunityName(`Community ${communityId}`);
    setCommunityTags([]);
    setCommunityDescription("");
    setIconFile(null);
    setIconPreview(null);
    setMembers([]);
    setNewMemberName("");
    setSelectedRole("member");
    setIsRestricted(false);
    setEvents([]);
    setAnnouncement("");
    setAnnouncementPreview(false);
    setAvailableRoles(["admin", "moderator", "member"]);
  }, [communityId]);

  return (
    <div className="flex flex-col w-full h-full container mx-auto">
      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">
            Manage Community {communityId}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="whitespace-nowrap">
                <MoreHorizontal className="mr-2 h-4 w-4" />
                Actions
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onSelect={(e) => {
                  e.preventDefault();
                  setDialogOpen(true);
                }}
              >
                Add Event
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={(e) => {
                  e.preventDefault();
                  setAnnouncementDialogOpen(true);
                }}
              >
                Add Announcement
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div>
        <div className="flex flex-col md:flex-row gap-5 md:items-stretch items-start w-full">
          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <label htmlFor="icon-upload" className="cursor-pointer">
              <Avatar className="h-28 w-28 md:h-48 md:w-48 aspect-square hover:opacity-80 transition-opacity">
                {iconPreview ? (
                  <AvatarImage src={iconPreview} alt="Community icon" />
                ) : (
                  <AvatarFallback>
                    <Plus className="h-8 w-8" />
                  </AvatarFallback>
                )}
              </Avatar>
              <input
                id="icon-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleIconChange}
              />
            </label>
            {iconPreview && (
              <Button
                onClick={() => {
                  setIconFile(null);
                  setIconPreview(null);
                }}
                variant="destructive"
                className="w-full mt-2"
              >
                Clear Icon
              </Button>
            )}
          </div>

          <div className="flex flex-col gap-5 items-center justify-stretch w-full px-2 md:px-0">
            <div className="w-full flex flex-col gap-2">
              <Label className="text-muted-foreground">Community Name</Label>
              <Input
                className="mt-2"
                value={communityName}
                onChange={(e) => setCommunityName(e.target.value)}
                placeholder="Enter community name"
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <Label className="text-muted-foreground">Community Tags</Label>
              <ChipInput
                initialChips={communityTags}
                onChange={setCommunityTags}
                placeholder="Add tags"
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <Label className="text-muted-foreground">Description</Label>
              <Textarea
                value={communityDescription}
                onChange={(e) => setCommunityDescription(e.target.value)}
                placeholder="Describe your community"
                rows={4}
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <Label className="text-muted-foreground">Privacy Settings</Label>
              <div className="flex items-center space-x-2 mt-2">
                <label htmlFor="restricted" className="cursor-pointer">
                  Restricted Community
                </label>
                <input
                  type="checkbox"
                  id="restricted"
                  checked={isRestricted}
                  onChange={() => setIsRestricted(!isRestricted)}
                />
              </div>
            </div>

            <div className="flex w-full justify-end gap-3 flex-wrap">
              <Button onClick={handleSaveDetails}>Save Changes</Button>
              <Button variant="outline" onClick={() => router.back()}>
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Events & Competitions</DialogTitle>
          </DialogHeader>
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
            {eventErrors && <p className="-600 font-semibold">{eventErrors}</p>}
          </div>
          <div>
            {events.length === 0 && <p>No events created yet.</p>}
            <ul className="space-y-2 max-w-lg">
              {events.map((event) => (
                <li key={event.id} className="border p-3 rounded">
                  <p className="font-semibold">{event.title}</p>
                  <p className=" -600">{event.date}</p>
                  <p>{event.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <DialogFooter>
            <Button onClick={validateAndAddEvent}>
              <Plus size={16} className="mr-2" />
              Create Event
            </Button>
            <Button variant="ghost" onClick={() => setDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog
        open={announcementDialogOpen}
        onOpenChange={setAnnouncementDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Announcements</DialogTitle>
          </DialogHeader>
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
              <div className="border p-4 rounded  whitespace-pre-wrap">
                {announcement || <em>No announcement to preview</em>}
              </div>
            )}
          </div>
          <DialogFooter>
            <Button
              onClick={() => {
                alert("Announcement saved!");
                setAnnouncementDialogOpen(false);
              }}
              disabled={!announcement.trim()}
            >
              Save Announcement
            </Button>
            <Button
              variant="ghost"
              onClick={() => setAnnouncementDialogOpen(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
