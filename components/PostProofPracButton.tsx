"use client";
import React, { useState } from "react";
import { Camera, Send, XCircle, Zap } from "lucide-react";
// import AddPostProofPrac from "./AddPostProofPrac";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
const userImage = "/placeholder.png";

const skillNodes = [
  "React Basics",
  "State Management",
  "Component Composition",
  "Hooks Mastery",
  "TypeScript Integration",
  "API Handling",
  "Testing & Debugging",
  "UI/UX Best Practices",
];

export default function PostProofPracButton() {
  const [feedback, setFeedback] = useState("");
  const [xpActive, setXpActive] = useState(false);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [body, setBody] = useState("");
  const [preview, setPreview] = useState<string | null>(null);

  const [form, setForm] = useState({
    node: "",
    media: "",
    description: "",
  });

  const [allowVerification, setAllowVerification] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    console.log({ title, tags, body, allowVerification });
  };

  const handleCancel = () => {
    //TODO add redirect to community page
  };

  return (
    <>
      <div className="w-full flex items-center justify-between gap-4">
        <Avatar>
          <AvatarFallback>U</AvatarFallback>
          <AvatarImage className="border" src={userImage} />
        </Avatar>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"secondary"} className="flex-1">
              Upload some Proof of Practice...
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>TitUpload Proof of Practicele</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                accusantium.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-2 w-full text-sm">
              <Label htmlFor="skill-tree-node">Select Skill Tree</Label>
              <Select>
                <SelectTrigger id="skill-tree-node" className="w-full">
                  <SelectValue placeholder="Select skill tree node" />
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

            <div className="space-y-2 w-full py-2">
              <Label>Upload Media</Label>

              <Input type="file" />
              {preview && (
                <Image
                  width={720}
                  height={720}
                  src={preview}
                  alt="Preview"
                  className="mt-2 max-h-60 object-contain rounded-xl border border-gray-200"
                />
              )}
            </div>

            <div className="space-y-2 w-full">
              <Label>Description</Label>
              <Textarea
                rows={5}
                className="w-full"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Write about what you practiced today..."
              />
            </div>

            <DialogFooter>
              <Button variant={"destructive"}>Cancel</Button>
              <Button onClick={handleSubmit}>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
