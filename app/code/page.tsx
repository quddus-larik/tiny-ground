"use client"

import {Header} from "@/components/custom/header";
import {ViewerLayout} from "@/components/layouts/tabs.layout";
import {TinyIcon} from "@/components/assets/logo";

export default function Home() {
    return (
        <>
            <TinyIcon className={"absolute bottom-0 right-5 z-10 size-32"}/>
            <div className="h-svh w-full">
                <Header/>
                <ViewerLayout/>
            </div>
        </>
    );
}
