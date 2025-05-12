"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { HomeIcon, AwardIcon, PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export const Providers = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="border-b flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear">
          <div className="w-full flex items-center justify-between gap-2 px-4">
            <SidebarTrigger className="-ml-1" />

            <Input
              className="w-[300px] md:w-[400px] lg:w-[500px]"
              placeholder="Search..."
              type="text"
            />

            <div className="flex items-center justify-start gap-2">
              <Tooltip>
                <TooltipContent>User</TooltipContent>
                <TooltipTrigger>
                  <Avatar className="size-[32px]">
                    <AvatarImage
                      height={32}
                      width={32}
                      src="/images/avatar.png"
                      alt="Avatar"
                    />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      U
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
              </Tooltip>
            </div>
          </div>
        </header>
        <main className="p-5">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Home">
                  <a href="/">
                    <HomeIcon size={48} />
                    <span>Home</span>
                  </a>
                </SidebarMenuButton>
                <SidebarMenuButton asChild tooltip="Add Community">
                  <Link href="/communities/add">
                    <PlusIcon size={48} />
                    <span>Add Community</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton asChild tooltip="Achievements">
                  <Link href="/achievements">
                    <AwardIcon size={48} />
                    <span>Achievements</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
