"use client"

import { Header } from "@/components/custom/header";
import { ViewerLayout } from "@/components/layouts/tabs.layout";
import { TinyIcon } from "@/components/assets/logo";

export default function Home() {
  return (
    <div className="h-svh w-full  relative">
        <TinyIcon />
      <Header />
      <ViewerLayout />
    </div>
  );
}
