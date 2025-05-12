"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { HomeIcon, AwardIcon, PlusIcon } from "lucide-react";
import { Navbar } from "./Navbar";
import { AlertDialog, AlertDialogTrigger } from "../ui/alert-dialog";
import { useState } from "react";

export const Providers = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Navbar />
        <main className="p-5">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

function AppSidebar() {
  "use client";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Home">
                  <Link href="/">
                    <HomeIcon size={48} />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton asChild tooltip="Add a Community">
                  <Link href="/communities/add">
                    <AwardIcon size={48} />
                    <span>Add a Community</span>
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
