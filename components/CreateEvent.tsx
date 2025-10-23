"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type CreateEventModalProps = {
  skillNodes: string[];
  onSubmit: (data: {
    name: string;
    description: string;
    start: string;
    end: string;
    skillNode: string;
  }) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const CreateEventModal = ({
  skillNodes,
  onSubmit,
  open,
  onOpenChange,
}: CreateEventModalProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [start, setStart] = useState(
    new Date().toISOString().slice(0, 16) // default current day + time
  );
  const [end, setEnd] = useState(new Date().toISOString().slice(0, 16));
  const [skillNode, setSkillNode] = useState("");

  const handleSubmit = () => {
    if (name && description && start && end && skillNode) {
      onSubmit({ name, description, start, end, skillNode });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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

        {/* skill tree node - check this */}
        <div className="w-full space-y-2">
          <Label htmlFor="skill-node">Skill Tree Node</Label>
          <Select onValueChange={setSkillNode}>
            <SelectTrigger id="skill-node" className="w-full">
              <SelectValue placeholder="Select skill node" />
            </SelectTrigger>
            <SelectContent>
              {skillNodes.map((node) => (
                <SelectItem key={node} value={node}>
                  {node}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
