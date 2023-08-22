import { LogOut } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
export function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        src="https://github.com/pdro-lucas.png"
        className="w-10 h-10 rounded-full"
        alt="User profile image"
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Pedro Lucas</span>
        <span className="truncate text-sm text-zinc-500 ">
          contato@pedrolucas.com
        </span>
      </div>
      <button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  );
}
