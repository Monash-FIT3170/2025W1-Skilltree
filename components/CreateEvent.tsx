"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

type CreateEventModalProps = {
  onSubmit: (data: {
    name: string;
    description: string;
    start: string;
    end: string;
  }) => void;
};

const CreateEventModal = ({ onSubmit }: CreateEventModalProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [start, setStart] = useState(
    new Date().toISOString().slice(0, 16) // default current day + time
  );
  const [end, setEnd] = useState(
    new Date().toISOString().slice(0, 16)
  );

  const handleSubmit = () => {
    if (name && description && start && end) {
      onSubmit({ name, description, start, end });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          className="h-8 w-8 p-0 absolute right-0"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Event</DialogTitle>
          <DialogDescription>
            Add a new community event with name, description, and timings.
          </DialogDescription>
        </DialogHeader>

        <div className="w-full space-y-2">
          <Label htmlFor="event-name">Event Name</Label>
          <Input
            id="event-name"
            placeholder="Enter event name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="w-full space-y-2">
          <Label htmlFor="event-description">Event Description</Label>
          <Textarea
            id="event-description"
            rows={4}
            placeholder="Enter event details..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="w-full space-y-2">
          <Label htmlFor="event-start">Event Start</Label>
          <Input
            id="event-start"
            type="datetime-local"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </div>

        <div className="w-full space-y-2">
          <Label htmlFor="event-end">Event End</Label>
          <Input
            id="event-end"
            type="datetime-local"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="destructive">Cancel</Button>
          </DialogClose>
          <Button onClick={handleSubmit}>Create Event</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateEventModal;
