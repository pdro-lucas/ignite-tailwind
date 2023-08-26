"use client";

import { User } from "lucide-react";
import { useMemo } from "react";
import { useFileInput } from "./Root";

export function ImagePreview() {
  const { files } = useFileInput();

  const previewURL = useMemo(() => {
    if (!files.length) return null;

    return URL.createObjectURL(files[0]);
  }, [files]);

  if (previewURL === null) {
    return (
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-violet-50 dark:bg-violet-500/10">
        <User className="w-8 h-8 text-violet-500 dark:text-violet-400" />
      </div>
    );
  } else {
    return (
      <img
        src={previewURL}
        alt=""
        className="object-cover w-16 h-16 rounded-full"
      />
    );
  }
}
