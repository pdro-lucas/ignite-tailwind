"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Menu,
  Search,
  SquareStack,
  Users,
} from "lucide-react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { Profile } from "./Profile";
import { UsedSpaceWidget } from "./UsedSpaceWidget";

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed top-0 data-[state=open]:bottom-0 lg:data-[state=closed]:bottom-0 left-0 right-0 z-20 flex flex-col gap-6 p-4 bg-white border-b border-zinc-200 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 dark:bg-zinc-900 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger className="lg:hidden" asChild>
          <Button variant="ghost">
            <Menu className="w-6 h-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="w-5 h-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>

        <nav className="space-y-0.5">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>

        <div className="flex flex-col gap-6 mt-auto">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
          </nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200 dark:bg-zinc-800"></div>

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
