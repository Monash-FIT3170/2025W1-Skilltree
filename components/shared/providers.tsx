"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
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
import { Suspense, useEffect, useState } from "react";

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
  CogIcon,
  SlidersHorizontalIcon,
  User,
  TrophyIcon,
} from "lucide-react";
import { userStore } from "@/stores";
import { Button } from "../ui/button";
import Loading from "../../app/loading";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";

export const Providers = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  const router = useRouter();
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [name, setName] = useState("");
  const [pfp, setPfp] = useState("");

  useEffect(() => {
    const unsubscribe = userStore.subscribe((state) => {
      if (!state.userId || !state.accessToken) {
        router.replace("/auth/signin");
      }

      setName(state.user?.name || "");
      setPfp(state.user?.pfp || "");
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
            />

            <div className="flex items-center justify-start gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant={"outline"}
                    className="flex-1 w-full flex items-center justify-between !p-4"
                  >
                    {userStore.getState().user?.name || "User"}
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

        <main className="p-5 flex container mx-auto items-center justify-center min-h-[calc(100vh-4rem)]">
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
