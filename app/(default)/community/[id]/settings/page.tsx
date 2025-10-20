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
import { createEventAction } from "@/actions/create-event-action";
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

interface Event {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  xpPayout: number;
}

export default function ManageCommunities() {
  const params = useParams();
  const router = useRouter();
  const communityId = params.id as string;

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

  const [events, setEvents] = useState<Event[]>([]);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventStartDate, setNewEventStartDate] = useState("");
  const [newEventEndDate, setNewEventEndDate] = useState("");
  const [newEventXpPayout, setNewEventXpPayout] = useState("");
  const [eventErrors, setEventErrors] = useState<string | null>(null);
  const [isCreatingEvent, setIsCreatingEvent] = useState(false);
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

  const validateAndAddEvent = async () => {
    setEventErrors(null);

    // Validation
    if (!newEventTitle.trim()) {
      return setEventErrors("Event title is required");
    }
    if (!newEventStartDate) {
      return setEventErrors("Start date is required");
    }
    if (!newEventEndDate) {
      return setEventErrors("End date is required");
    }

    // Validate that end date is after start date
    if (new Date(newEventEndDate) <= new Date(newEventStartDate)) {
      return setEventErrors("End date must be after start date");
    }

    setIsCreatingEvent(true);

    try {
      const payload = {
        skillTreeId: communityId,
        title: newEventTitle.trim(),
        xpPayout: newEventXpPayout ? parseInt(newEventXpPayout, 10) : 0,
        startDate: newEventStartDate,
        endDate: newEventEndDate,
      };

      console.log("Sending payload:", payload);

      const result = await createEventAction(payload);

      if (!result.ok) {
        setEventErrors(result.message || "Failed to create event");
        return;
      }

      // Add the created event to the local state
      const eventData = result.message; // This is the event data from your action
      setEvents((prev) => [
        ...prev,
        {
          id: eventData.id,
          title: eventData.title,
          startDate: eventData.startDate,
          endDate: eventData.endDate,
          xpPayout: eventData.xpPayout || 0,
        },
      ]);

      // Reset form
      setNewEventTitle("");
      setNewEventStartDate("");
      setNewEventEndDate("");
      setNewEventXpPayout("");
      setEventErrors(null);

      alert("Event created successfully!");
    } catch (err) {
      console.error("Error creating event:", err);
      setEventErrors("Failed to create event");
    } finally {
      setIsCreatingEvent(false);
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
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Events & Competitions</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-3">
              <div>
                <Label htmlFor="event-title">Event Title *</Label>
                <Input
                  id="event-title"
                  placeholder="Enter event title"
                  value={newEventTitle}
                  onChange={(e) => setNewEventTitle(e.target.value)}
                  disabled={isCreatingEvent}
                />
              </div>

              <div>
                <Label htmlFor="event-start">Start Date *</Label>
                <Input
                  id="event-start"
                  type="datetime-local"
                  value={newEventStartDate}
                  onChange={(e) => setNewEventStartDate(e.target.value)}
                  disabled={isCreatingEvent}
                />
              </div>

              <div>
                <Label htmlFor="event-end">End Date *</Label>
                <Input
                  id="event-end"
                  type="datetime-local"
                  value={newEventEndDate}
                  onChange={(e) => setNewEventEndDate(e.target.value)}
                  disabled={isCreatingEvent}
                />
              </div>

              <div>
                <Label htmlFor="event-xp">XP Payout (Optional)</Label>
                <Input
                  id="event-xp"
                  type="number"
                  min="0"
                  placeholder="Enter XP payout"
                  value={newEventXpPayout}
                  onChange={(e) => setNewEventXpPayout(e.target.value)}
                  disabled={isCreatingEvent}
                />
              </div>

              {eventErrors && (
                <p className="text-red-600 font-semibold text-sm">
                  {eventErrors}
                </p>
              )}
            </div>

            <div className="border-t pt-4">
              <h3 className="font-semibold mb-3">Created Events</h3>
              {events.length === 0 ? (
                <p className="text-muted-foreground text-sm">
                  No events created yet.
                </p>
              ) : (
                <ul className="space-y-2">
                  {events.map((event) => (
                    <li key={event.id} className="border p-3 rounded">
                      <p className="font-semibold">{event.title}</p>
                      <p className="text-sm text-muted-foreground">
                        Start: {new Date(event.startDate).toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        End: {new Date(event.endDate).toLocaleString()}
                      </p>
                      {event.xpPayout > 0 && (
                        <p className="text-sm text-muted-foreground">
                          XP Payout: {event.xpPayout}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button onClick={validateAndAddEvent} disabled={isCreatingEvent}>
              {isCreatingEvent ? (
                "Creating..."
              ) : (
                <>
                  <Plus size={16} className="mr-2" />
                  Create Event
                </>
              )}
            </Button>
            <Button
              variant="ghost"
              onClick={() => setDialogOpen(false)}
              disabled={isCreatingEvent}
            >
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
              <div className="border p-4 rounded whitespace-pre-wrap">
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