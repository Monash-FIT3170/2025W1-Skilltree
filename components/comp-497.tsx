"use client";

import { DropdownNavProps, DropdownProps } from "react-day-picker";

import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DatePicker({
  date,
  setDate,
}: {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}) {
  const handleCalendarChange = (
    _value: string | number,
    _e: React.ChangeEventHandler<HTMLSelectElement>
  ) => {
    const _event = {
      target: {
        value: String(_value),
      },
    } as React.ChangeEvent<HTMLSelectElement>;
    _e(_event);
  };

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="border-none rounded"
      classNames={{
        month_caption: "mx-0",
      }}
      captionLayout="dropdown"
      defaultMonth={new Date()}
      startMonth={new Date(new Date().getFullYear() - 100, 1)}
      endMonth={new Date()}
      hideNavigation
      components={{
        DropdownNav: (props: DropdownNavProps) => {
          return (
            <div className="flex items-center w-full gap-2">
              {props.children}
            </div>
          );
        },
        Dropdown: (props: DropdownProps) => {
          return (
            <Select
              value={String(props.value)}
              onValueChange={(value) => {
                if (props.onChange) {
                  handleCalendarChange(value, props.onChange);
                }
              }}
            >
              <SelectTrigger className="h-8 font-medium w-fit first:grow">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="max-h-[min(26rem,var(--radix-select-content-available-height))]">
                {props.options?.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={String(option.value)}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          );
        },
      }}
    />
  );
}
