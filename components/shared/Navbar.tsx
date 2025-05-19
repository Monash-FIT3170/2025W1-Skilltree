import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Input } from "../ui/input";
import { SidebarTrigger } from "../ui/sidebar";

export const Navbar = () => {
  return (
    <header className="border-b flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear">
      <div className="w-full flex items-center justify-between gap-2 px-4">
        <SidebarTrigger className="text-foreground cursor-pointer" />

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
  );
};
