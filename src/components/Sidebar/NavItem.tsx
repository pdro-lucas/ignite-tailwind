import { ChevronDown } from "lucide-react";
import { ElementType } from "react";

export interface NavItemProps {
  title: string;
  icon: ElementType;
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      href="#"
      className="flex items-center gap-3 px-3 py-2 rounded group hover:bg-violet-50 dark:hover:bg-zinc-800"
    >
      <Icon className="w-5 h-5 text-zinc-500 group-hover:text-violet-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300">
        {title}
      </span>
      <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-hover:text-violet-300 dark:text-zinc-600" />
    </a>
  );
}
