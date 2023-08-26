import { LogOut } from "lucide-react";
import { Button } from "../Button";

/* eslint-disable @next/next/no-img-element */
export function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        src="https://github.com/pdro-lucas.png"
        className="w-10 h-10 rounded-full"
        alt="User profile image"
      />

      <div className="flex flex-col flex-1 truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Pedro Lucas
        </span>
        <span className="text-sm truncate text-zinc-500 dark:text-zinc-400">
          contato@pedrolucas.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="w-5 h-5" />
      </Button>
    </div>
  );
}
