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
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { deleteCommunityAction } from "@/actions/delete-community actions";
import { TAuthSkillTree, TEvent } from "@/types";
import { getCommunityAction } from "@/actions/get-community-action";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import DatePicker from "@/components/comp-497";
import { Checkbox } from "@/components/ui/checkbox";

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
  // params.id can be undefined (ParamValue). Guard at runtime and coerce to string when calling server actions.
  const communityId = params.id;

  const [availableRoles, setAvailableRoles] = useState<string[]>([
    "admin",
    "member",
  ]);

  const [community, setCommunity] = useState<TAuthSkillTree | null>(null);

  const [events, setEvents] = useState<TEvent[]>([]);

  const [event, setEvent] = useState<{
    title: string;
    date: Date;
    description: string;
  }>({
    title: "",
    date: new Date(),
    description: "",
  });

  const [eventErrors, setEventErrors] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState("");

  const [announcement, setAnnouncement] = useState("");
  const [announcementPreview, setAnnouncementPreview] = useState(false);

  const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
    }
  };

  async function createEvent(payload: any) {
    return new Promise((resolve) => setTimeout(resolve, 500));
  }

  const validateAndAddEvent = async () => {
    setEventErrors(null);

    if (!event.title.trim()) return setEventErrors("Event title is required");
    if (!event.date) return setEventErrors("Event date is required");

    try {
      const payload = {
        name: event.title.trim(),
        communityId: String(communityId),
        experienceId: "default",
        rankedStatus: true,
        experiencePayout: 0,
      };

      await createEvent(payload);

      // setEvents((prev) => [
      //   ...prev,
      //   {
      //     id: Date.now(),
      //     title: event.title.trim(),
      //     date: event.date,
      //     description: event.description.trim(),
      //   },
      // ]);

      setEvent({ title: "", date: new Date(), description: "" });
    } catch (err) {
      setEventErrors("Failed to create event.");
    }
  };

  const handleSaveDetails = () => {
    alert("Community details saved for: " + communityId);
  };

  const handleDeleteCommunity = async () => {
    // Ensure we have a valid string id before calling the server action
    if (!communityId || typeof communityId !== "string") {
      toast.error("Invalid community id");
      return;
    }

    if (!confirm("Permanently delete this community? This cannot be undone."))
      return;

    try {
      // Coerce to string to satisfy the action's signature
      const res = await deleteCommunityAction(String(communityId));
      if (res.ok) {
        toast.success("Community deleted");
        router.push("/dashboard");
      } else {
        toast.error(res.message || "Failed to delete community");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error deleting community");
    }
  };

  useEffect(() => {
    if (!communityId) return;

    (async () => {
      const community = await getCommunityAction(communityId as string);
      if (community.ok && community.message) {
        setCommunity(community.message as TAuthSkillTree);
      }
    })();
  }, [communityId]);

  if (!community) return;

  return (
    <div className="flex flex-col w-full h-full container mx-auto">
      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">
            Manage Community &ldquo;{community?.name}&rdquo;
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger>
              <Button variant="outline">
                <Plus />
                Add Event
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Events & Competitions</DialogTitle>
              </DialogHeader>
              <div className="max-w-lg space-y-3 mb-4">
                <Input
                  placeholder="Event title"
                  value={event.title}
                  onChange={(e) =>
                    setEvent({ ...event, title: e.target.value })
                  }
                />
                <Popover>
                  <PopoverTrigger className="w-full">
                    <Input
                      readOnly
                      value={format(event.date, "PPP") || "Select your DOB"}
                    />
                  </PopoverTrigger>
                  <PopoverContent>
                    <DatePicker
                      date={event.date}
                      setDate={(date) => {
                        if (date) {
                          setEvent((prev) => ({ ...prev, date }));
                        }
                      }}
                    />
                  </PopoverContent>
                </Popover>
                <Textarea
                  placeholder="Event description"
                  rows={3}
                  value={event.description}
                  onChange={(e) =>
                    setEvent({ ...event, description: e.target.value })
                  }
                />
                {eventErrors && (
                  <p className="-600 font-semibold">{eventErrors}</p>
                )}
              </div>
              <div>
                {events.length === 0 && <p>No events created yet.</p>}
                <ul className="space-y-2 max-w-lg">
                  {events.map((event) => (
                    <li key={event.id} className="border p-3 rounded">
                      <p className="font-semibold">{event.title}</p>
                      <p className=" -600">{event.startDate}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <DialogFooter>
                <Button onClick={validateAndAddEvent}>
                  <Plus size={16} className="mr-2" />
                  Create Event
                </Button>
                <Button variant="ghost">Close</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <div>
        <div className="flex flex-col md:flex-row gap-5 md:items-stretch items-start w-full">
          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <label htmlFor="icon-upload" className="cursor-pointer">
              <Avatar className="h-28 w-28 md:h-48 md:w-48 aspect-square hover:opacity-80 transition-opacity">
                <AvatarFallback className="text-4xl">
                  {community?.name
                    ? community.name.charAt(0).toUpperCase()
                    : "C"}
                </AvatarFallback>
              </Avatar>
              <input
                id="icon-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleIconChange}
              />
            </label>
          </div>

          <div className="flex flex-col gap-5 items-center justify-stretch w-full px-2 md:px-0">
            <div className="w-full flex flex-col gap-2">
              <Label className="text-muted-foreground">Community Name</Label>
              <Input
                className="mt-2"
                value={community?.name}
                // onChange={(e) => setCommunityName(e.target.value)}
                placeholder="Enter community name"
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <Label className="text-muted-foreground">Community Tags</Label>
              <ChipInput
                initialChips={community?.tags || []}
                // onChange={setCommunityTags}
                placeholder="Add tags"
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <Label className="text-muted-foreground">Description</Label>
              <Textarea
                value={community?.description}
                // onChange={(e) => setCommunityDescription(e.target.value)}
                placeholder="Describe your community"
                rows={4}
              />
            </div>

            <div className="w-full flex items-end flex-col gap-2">
              <div className="flex items-center space-x-2 mt-2">
                <Label
                  htmlFor="restricted"
                  className="flex gap-2 cursor-pointer"
                >
                  <Checkbox id="restricted" checked={community.isRestricted} />
                  <span>Restricted Community</span>
                </Label>
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

      <Dialog>
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
              }}
              disabled={!announcement.trim()}
            >
              Save Announcement
            </Button>
            <Button variant="ghost">Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="mt-4">
        <Button variant="destructive" onClick={handleDeleteCommunity}>
          Delete Community
        </Button>
      </div>
    </div>
  );
}
