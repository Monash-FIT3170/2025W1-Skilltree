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
import { useEffect, useState } from "react";

import { Input } from "../ui/input";
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
  AwardIcon,
  LayoutDashboard,
  LogOut,
  Settings,
  Loader2,
  SearchIcon,
  User,
  TrophyIcon,
} from "lucide-react";
import { userStore } from "@/stores";
import { Button } from "../ui/button";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const Providers = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  const router = useRouter();
  const [headerSearch, setHeaderSearch] = useState("");
  const [logoutOpen, setLogoutOpen] = useState(false);
  const name = userStore.getState().user?.name || "User";
  const pfp = userStore.getState().user?.pfp || undefined;

  useEffect(() => {
    if (!userStore.getState().accessToken) {
      router.push("/login");
    }
  }, [router]);

  const handleSettings = () => {
    router.push("/user/settings");
  };

  const handleProfile = () => {
    router.push("/user/profile");
  };

  const handleLogout = async () => {
    setLogoutOpen(true);
    userStore.setState({
      accessToken: undefined,
      userId: undefined,
      user: undefined,
    });
    return router.push("/auth/signin");
  };

  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset>
        <header className="border-b flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear">
          <div className="flex items-center justify-between w-full gap-2 px-4">
            <SidebarTrigger />

            <Input
              className="w-[300px] md:w-[400px] lg:w-[500px]"
              placeholder="Search..."
              type="text"
              value={headerSearch}
              onChange={(e) => setHeaderSearch(e.target.value)}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  const q = headerSearch.trim();
                  router.push(
                    q ? `/search?q=${encodeURIComponent(q)}` : "/search"
                  );
                }
              }}
            />

            <div className="flex items-center justify-start gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button asChild variant={"outline"}>
                    <div className="flex items-center gap-4 !p-4">
                      <Avatar>
                        <AvatarImage src={pfp} alt={name || "User"} />
                        <AvatarFallback>
                          {(name || "U").charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      {userStore.getState().user?.name || "User"}
                    </div>
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-72">
                  <DropdownMenuLabel className="truncate">
                    Signed in as{" "}
                    <span className="font-medium">
                      {userStore.getState().user?.email || "user@example.com"}
                    </span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleProfile}
                    className="cursor-pointer"
                  >
                    <User className="w-4 h-4 mr-2" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={handleSettings}
                    className="cursor-pointer"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="text-red-600 cursor-pointer focus:text-red-600"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <AnimatedThemeToggler className="text-sm" />
            </div>
          </div>
        </header>

        <main className="p-5 flex container mx-auto items-start justify-center min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </SidebarInset>

      <AlertDialog open={logoutOpen} onOpenChange={setLogoutOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Logging out…
            </AlertDialogTitle>
            <AlertDialogDescription>
              You&apos;ll be redirected to the login page.
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
                <SidebarMenuButton asChild tooltip="Discover">
                  <Link href="/discover">
                    <SearchIcon size={48} />
                    <span>Discover</span>
                  </Link>
                </SidebarMenuButton>

                <SidebarMenuButton asChild tooltip="Dashboard">
                  <Link href="/dashboard">
                    <LayoutDashboard size={48} />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>

                <SidebarMenuButton asChild tooltip="Add a Community">
                  <Link href="/community/add">
                    <AwardIcon size={48} />
                    <span>Add a Community</span>
                  </Link>
                </SidebarMenuButton>

                {/* <SidebarMenuButton asChild tooltip="User Settings">
                  <Link href="/user/settings">
                    <CogIcon size={48} />
                    <span>User Settings</span>
                  </Link>
                </SidebarMenuButton> */}
                <SidebarMenuButton asChild tooltip="Global Leaderboard">
                  <Link href="/leaderboard">
                    <TrophyIcon size={48} />
                    <span>Global Leaderboard</span>
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
