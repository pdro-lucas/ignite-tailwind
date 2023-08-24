import { ComponentProps } from "react";

export interface textAreaProps extends ComponentProps<"textarea"> {}

export function TextArea(props: textAreaProps) {
  return (
    <textarea
      className="min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm "
      {...props}
    />
  );
}
