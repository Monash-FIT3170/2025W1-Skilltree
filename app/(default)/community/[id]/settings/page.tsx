"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChipInput } from "@/components/shared/chip-input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { createEventAction } from "@/actions/create-event-action";
import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { TAuthSkillTree } from "@/types";
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
  const communityId = params.id as string;
  const [community, setCommunity] = useState<TAuthSkillTree | null>(null);

  useEffect(() => {
    if (!communityId) {
      console.log("No comm ID");

      return;
    }

    (async () => {
      const comm = await getCommunityAction(communityId);
      if (comm.ok && comm.message) {
        setCommunity(comm.message as TAuthSkillTree);
      }
    })();
  }, [communityId]);

  type EventState = {
    title: string;
    startDate: Date;
    endDate: Date;
    xpPayout: string;
    isCreating: boolean;
  };

  const [eventState, setEventState] = useState<EventState>({
    title: "",
    startDate: new Date(),
    endDate: new Date(),
    xpPayout: "",
    isCreating: false,
  });

  type UiState = {
    dialogOpen: boolean;
    announcementDialogOpen: boolean;
    announcement: string;
    announcementPreview: boolean;
    selectedRole: string;
  };

  const [uiState, setUiState] = useState<UiState>({
    dialogOpen: false,
    announcementDialogOpen: false,
    announcement: "",
    announcementPreview: false,
    selectedRole: "",
  });

  const validateAndAddEvent = async () => {
    setEventState((prev) => ({ ...prev, errors: null }));

    if (!eventState.title.trim()) {
      return toast.error("Event title is required");
    }
    if (!eventState.startDate) {
      return toast.error("Start date is required");
    }
    if (!eventState.endDate) {
      return toast.error("End date is required");
    }
    if (eventState.startDate < new Date(Date.now())) {
      return toast.error("Start date cannot be in the past or today");
    }
    if (new Date(eventState.endDate) < new Date(eventState.startDate)) {
      return toast.error("End date must be after start date or same as start date");
    }

    setEventState((prev) => ({ ...prev, isCreating: true }));

    try {
      const payload = {
        skillTreeId: communityId,
        title: eventState.title.trim(),
        xpPayout: eventState.xpPayout ? parseInt(eventState.xpPayout, 10) : 0,
        startDate: eventState.startDate,
        endDate: eventState.endDate,
      };

      console.log("Sending payload:", payload);

      const result = await createEventAction(payload);

      console.log("Result received:", result);

      if (!result.ok) {
        return toast.error(
          "Failed to create event",
          {
            description: result.message || "Please try again later.",
          }
        );
      }

      setEventState({
        title: "",
        startDate: new Date(),
        endDate: new Date(),
        xpPayout: "",
        isCreating: false,
      });

      toast.success("Event created successfully!");
      setUiState((prev) => ({ ...prev, dialogOpen: false }));
    } catch (err) {
      toast.error(
        "An unexpected error occurred while creating the event.",
        {
          description: err instanceof Error ? err.message : String(err),
        }
      );
      setEventState((prev) => ({ ...prev, errors: "Failed to create event" }));
    } finally {
      setEventState((prev) => ({ ...prev, isCreating: false }));
    }
  };

  const handleSaveDetails = () => {
    alert("Community details saved for: " + communityId);
  };

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
          <Button
            variant="outline"
            onClick={() =>
              setUiState((prev) => ({ ...prev, dialogOpen: true }))
            }
          >
            <Plus />
            Add Event
          </Button>
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

      <Dialog
        open={uiState.dialogOpen}
        onOpenChange={(open) =>
          setUiState((prev) => ({ ...prev, dialogOpen: open }))
        }
      >
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Events & Competitions</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex flex-col gap-2">
                <Label htmlFor="event-title">Event Title</Label>
                <Input
                  id="event-title"
                  placeholder="Enter event title"
                  value={eventState.title}
                  onChange={(e) =>
                    setEventState((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                  disabled={eventState.isCreating}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="event-start">Start Date</Label>
                <Popover>
                  <PopoverTrigger className="w-full">
                    <Input
                      readOnly
                      value={
                        format(eventState.startDate, "PPP") ||
                        "Select your start date"
                      }
                    />
                  </PopoverTrigger>
                  <PopoverContent>
                    <DatePicker
                      date={
                        eventState.startDate ||
                        new Date().toISOString().slice(0, 16)
                      }
                      setDate={(date) =>
                        setEventState((prev) => ({
                          ...prev,
                          startDate: date!,
                        }))
                      }
                      disabled={eventState.isCreating}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="event-end">End Date</Label>
                <Popover>
                  <PopoverTrigger className="w-full">
                    <Input
                      readOnly
                      value={
                        format(eventState.endDate, "PPP") ||
                        "Select your end date"
                      }
                    />
                  </PopoverTrigger>
                  <PopoverContent>
                    <DatePicker
                      date={
                        eventState.endDate ||
                        new Date().toISOString().slice(0, 16)
                      }
                      setDate={(date) =>
                        setEventState((prev) => ({
                          ...prev,
                          endDate: date!,
                        }))
                      }
                      disabled={eventState.isCreating}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="event-xp">XP Payout (Optional)</Label>
                <Input
                  id="event-xp"
                  type="number"
                  min="0"
                  placeholder="Enter XP payout"
                  value={eventState.xpPayout}
                  onChange={(e) =>
                    setEventState((prev) => ({
                      ...prev,
                      xpPayout: e.target.value,
                    }))
                  }
                  disabled={eventState.isCreating}
                />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              onClick={validateAndAddEvent}
              disabled={eventState.isCreating}
            >
              {eventState.isCreating ? (
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
              onClick={() =>
                setUiState((prev) => ({ ...prev, dialogOpen: false }))
              }
              disabled={eventState.isCreating}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={uiState.announcementDialogOpen}
        onOpenChange={(open) =>
          setUiState((prev) => ({ ...prev, announcementDialogOpen: open }))
        }
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Announcements</DialogTitle>
          </DialogHeader>
          <div className="max-w-lg space-y-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setUiState((prev) => ({
                  ...prev,
                  announcementPreview: !prev.announcementPreview,
                }))
              }
            >
              {uiState.announcementPreview ? "Edit" : "Preview"}
            </Button>

            {!uiState.announcementPreview && (
              <TextEditor
                value={uiState.announcement}
                onChange={(val) =>
                  setUiState((prev) => ({ ...prev, announcement: val }))
                }
              />
            )}

            {uiState.announcementPreview && (
              <div className="border p-4 rounded whitespace-pre-wrap">
                {uiState.announcement || <em>No announcement to preview</em>}
              </div>
            )}
          </div>
          <DialogFooter>
            <Button
              onClick={() => {
                alert("Announcement saved!");
              }}
              disabled={!uiState.announcement.trim()}
            >
              Save Announcement
            </Button>
            <Button variant="ghost">Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
