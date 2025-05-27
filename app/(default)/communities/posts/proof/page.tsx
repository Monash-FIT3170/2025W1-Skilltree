"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [body, setBody] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
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
    <div className="w-full h-full min-h-[calc(100vh-64px)] space-y-4">
      <h1 className="text-3xl font-bold">Upload Proof of Practice</h1>
      <div className="mt-7"></div>

      <div className="space-y-2">
        <Label>Title</Label>
        <Input
          type="text"
          className="w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="add title here..."
        />
      </div>

      <div className="space-y-2">
        <Label>Tags</Label>
        <Input
          type="text"
          className="w-full"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="add tags here..."
        />
      </div>

      <div className="space-y-2">
        <Label>Body</Label>
        <Textarea
          rows={5}
          className="w-full"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write about what you practiced today..."
        />
      </div>

      <div className="space-y-2">
        <Label>Proof Image</Label>
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full"
        />
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

      <div className="flex items-center space-x-2">
        <Checkbox
          id="allowVerification"
          checked={allowVerification}
          onCheckedChange={(checked) =>
            setAllowVerification(!!checked.valueOf())
          }
          className="h-4 w-4 text-black border-gray-300 rounded focus:black"
        />
        <Label htmlFor="allowVerification" className="text-sm text-gray-700">
          Let other users verify your proof
        </Label>
      </div>

      <div className="flex gap-4">
        <Button onClick={handleSubmit} className="flex-1">
          Confirm
        </Button>
        <Button
          onClick={handleCancel}
          variant={"destructive"}
          className="flex-1"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
