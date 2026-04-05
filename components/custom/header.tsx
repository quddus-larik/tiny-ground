import { Button } from "@heroui/react";
import { ToggleThemeButton } from "./toggle-theme";
import { PlayIcon } from "@phosphor-icons/react";
import { CodeLanguageSelector } from "./selector.minor";
import { TabsView } from "./tabs.minor";

export function Header() {
  return (
    <div className="w-full py-2 px-4 flex items-center justify-between font-mono">
      <p className="text-sm uppercase tracking-[0.2em]">ONE PLAYGROUND</p>
      <div className="flex gap-2 items-center">
        <CodeLanguageSelector />
        <TabsView />
        <Button isIconOnly variant="primary">
          <PlayIcon weight="fill" />
        </Button>
      </div>
      <ToggleThemeButton />
    </div>
  );
}
