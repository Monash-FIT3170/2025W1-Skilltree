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
