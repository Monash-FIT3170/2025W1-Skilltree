"use client";

import { useState, type KeyboardEvent } from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface ChipInputProps {
  placeholder?: string;
  onChange?: (chips: string[]) => void;
  initialChips?: string[];
  maxChips?: number;
}

export function ChipInput({
  placeholder = "Type and press Enter...",
  onChange,
  initialChips = [],
  maxChips = Number.POSITIVE_INFINITY,
}: ChipInputProps) {
  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState<string[]>(initialChips);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addChip();
    }
  };

  const addChip = () => {
    const trimmedValue = inputValue.trim();

    if (
      trimmedValue &&
      !chips.includes(trimmedValue) &&
      chips.length < maxChips
    ) {
      const newChips = [...chips, trimmedValue];
      setChips(newChips);
      setInputValue("");
      onChange?.(newChips);
    }
  };

  const removeChip = (chipToRemove: string) => {
    const newChips = chips.filter((chip) => chip !== chipToRemove);
    setChips(newChips);
    onChange?.(newChips);
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 p-2 min-h-10 border rounded-md mb-2">
        {chips.map((chip) => (
          <Badge
            onClick={() => removeChip(chip)}
            key={chip}
            variant="outline"
            className="z-0 gap-1 text-primary-foreground px-3 py-1 bg-primary hover:bg-destructive/10 transition-colors cursor-pointer"
          >
            {chip}
          </Badge>
        ))}
      </div>
      <Input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={addChip}
      />
    </div>
  );
}
