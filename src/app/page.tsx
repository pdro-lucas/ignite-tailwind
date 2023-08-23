import { Input } from "@/components/Input";
import { SettingsTabs } from "@/components/SettingsTabs";
import * as Tabs from "@radix-ui/react-tabs";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="flex flex-col mt-6">
        <div className="flex items-center justify-between pb-5 border-b border-zinc-200">
          <div className="space-y-1 ">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="px-4 py-2 text-sm font-semibold border rounded-lg shadow-sm border-zinc-300 text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg shadow-sm bg-violet-600 hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>
        <form
          id="settings"
          className="flex flex-col w-full gap-5 mt-6 divide-y divide-zinc-200"
        >
          <div className="grid gap-3 grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control
                  id="firstName"
                  defaultValue="Pedro Lucas"
                ></Input.Control>
              </Input.Root>
              <Input.Root>
                <Input.Control defaultValue="Pedro Lucas"></Input.Control>
              </Input.Root>
            </div>
          </div>
          <div className="grid gap-3 pt-5 grid-cols-form">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="w-5 h-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="pedro@example.com.br"
              ></Input.Control>
            </Input.Root>
          </div>
          <div className="grid gap-3 pt-5 grid-cols-form">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Your Photo
              <span className="text-sm mt-0.5 font-normal text-zinc-500 block">
                This will be displayed on your profile.
              </span>
            </label>
          </div>
          <div className="grid gap-3 pt-5 grid-cols-form">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="CTO"></Input.Control>
            </Input.Root>
          </div>
          <div className="grid gap-3 pt-5 grid-cols-form">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
          </div>
          <div className="grid gap-3 pt-5 grid-cols-form">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
          </div>
          <div className="grid gap-3 pt-5 grid-cols-form">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="text-sm mt-0.5 font-normal text-zinc-500 block">
                Write a sort introduction.
              </span>
            </label>
          </div>
          <div className="grid gap-3 pt-5 grid-cols-form">
            <label
              htmlFor="portfolio"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio Projects
              <span className="text-sm mt-0.5 font-normal text-zinc-500 block">
                Share a few snippets of your work.
              </span>
            </label>
          </div>
          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="px-4 py-2 text-sm font-semibold border rounded-lg shadow-sm border-zinc-300 text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg shadow-sm bg-violet-600 hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
