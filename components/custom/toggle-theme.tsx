"use client";

import { SunIcon, MoonIcon } from "@phosphor-icons/react";
import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ToggleThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button isDisabled aria-label="Toggle theme" />;
  }

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <Button
      variant="primary"
      size="lg"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      isIconOnly
    >
      {isDark ? <SunIcon weight="fill" /> : <MoonIcon weight="fill" />}
    </Button>
  );
}