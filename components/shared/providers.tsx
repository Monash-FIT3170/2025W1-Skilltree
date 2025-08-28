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
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import {
  HomeIcon,
  AwardIcon,
  LayoutDashboard,
  LogOut,
  Settings,
  Loader2,
} from "lucide-react";

export const Providers = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  const router = useRouter();
  const [logoutOpen, setLogoutOpen] = useState(false);

  const handleSettings = () => {
    router.push("/usersettings");
  };

  const handleLogout = async () => {
    // Optional: await fetch("/api/logout", { method: "POST" });
    setLogoutOpen(true);
    setTimeout(() => {
      router.replace("/login");
    }, 1100);
  };

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
                <TooltipTrigger asChild>
                  {/* Avatar dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className="rounded-full focus:outline-none focus:ring-2 focus:ring-ring"
                        aria-label="Open user menu"
                      >
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
                      </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuLabel className="truncate">
                        Signed in as <span className="font-medium">user@example.com</span>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleSettings} className="cursor-pointer">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600 focus:text-red-600">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Logout</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TooltipTrigger>
              </Tooltip>
            </div>
          </div>
        </header>

        <main className="p-5 flex items-center justify-center min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </SidebarInset>

      {/* Logging out dialog */}
      <AlertDialog open={logoutOpen} onOpenChange={setLogoutOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Logging out…
            </AlertDialogTitle>
            <AlertDialogDescription>
              You’ll be redirected to the login page.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </SidebarProvider>
  );
};

function AppSidebar() {
  "use client";

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

                <SidebarMenuButton asChild tooltip="Dashboard">
                  <Link href="/dashboard">
                    <LayoutDashboard size={48} />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>

                <SidebarMenuButton asChild tooltip="Add a Community">
                  <Link href="/communities/add/createcommunity">
                    <AwardIcon size={48} />
                    <span>Add a Community</span>
                  </Link>
                </SidebarMenuButton>

                {/* Example for future:
                <SidebarMenuButton asChild tooltip="Manage Communities">
                  <Link href="/communities/manage">
                    <SlidersHorizontalIcon size={48} />
                    <span>Manage Communities</span>
                  </Link>
                </SidebarMenuButton>
                */}
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
