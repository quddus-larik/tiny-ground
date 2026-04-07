

import { useViewer } from "@/stores/tabs.state";
import { Tabs } from "@heroui/react";
import { SquareSplitHorizontalIcon } from "@phosphor-icons/react";

export function TabsView() {
  const { viewerState, setViewerState } = useViewer();
  return (
    <Tabs
      className="text-muted"
      selectedKey={viewerState || "both"}
      onSelectionChange={(key) => setViewerState(String(key) as "code" | "output" | "both")}
    >
      <Tabs.ListContainer>
        <Tabs.List aria-label="Options">
          <Tabs.Tab id="code">
            Code
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab id="output">
            Output
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab id="both">
            <Tabs.Separator />
            <SquareSplitHorizontalIcon size={20} weight="duotone" />
            Split
            <Tabs.Indicator />
          </Tabs.Tab>
        </Tabs.List>
      </Tabs.ListContainer>
    </Tabs>
  );
}
