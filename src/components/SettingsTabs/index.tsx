"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { TabItem } from "./TabItem";
import { useState } from "react";

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState("tab-1");

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          value="tab-1"
          title="My details"
          isSelected={currentTab === "tab-1"}
        />
        <TabItem
          value="tab-2"
          title="Profile"
          isSelected={currentTab === "tab-2"}
        />
        <TabItem
          value="tab-3"
          title="Password"
          isSelected={currentTab === "tab-3"}
        />
        <TabItem
          value="tab-4"
          title="Team"
          isSelected={currentTab === "tab-4"}
        />
        <TabItem
          value="tab-5"
          title="Plan"
          isSelected={currentTab === "tab-5"}
        />
        <TabItem
          value="tab-6"
          title="Biling"
          isSelected={currentTab === "tab-6"}
        />
        <TabItem
          value="tab-7"
          title="Email"
          isSelected={currentTab === "tab-7"}
        />
        <TabItem
          value="tab-8"
          title="Notifications"
          isSelected={currentTab === "tab-8"}
        />
        <TabItem
          value="tab-9"
          title="Integrations"
          isSelected={currentTab === "tab-9"}
        />
        <TabItem
          value="tab-10"
          title="API"
          isSelected={currentTab === "tab-10"}
        />
      </Tabs.List>
    </Tabs.Root>
  );
}
