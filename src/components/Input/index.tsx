import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type InputPrefixProps = ComponentProps<"div">;

function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />;
}

type InputControlProps = ComponentProps<"input">;

function InputControl(props: InputControlProps) {
  return (
    <input
      className="flex-1 p-0 bg-transparent border-0 outline-none text-zinc-900 placeholder-zinc-600 dark:placeholder:zinc-400 dark:text-zinc-100"
      {...props}
    />
  );
}

type InputRootProps = ComponentProps<"div">;

function InputRoot(props: InputRootProps) {
  return (
    <div
      className={twMerge(
        "flex items-center w-full gap-2 px-3 py-2 border rounded-lg shadow-sm border-zinc-300 ",
        "focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100",
        "dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20",
        props.className
      )}
      {...props}
    />
  );
}

export const Input = {
  Prefix: InputPrefix,
  Control: InputControl,
  Root: InputRoot,
};
