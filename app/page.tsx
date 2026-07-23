"use client"

import {ToggleThemeButton} from "@/components/custom/toggle-theme";
import {TinyIcon} from "@/components/assets/logo";
import {Button, Description, Label, Link, Typography} from "@heroui/react";
import {DotPattern} from "@/components/custom/dot-patern";
import {cn} from "@/lib/utils";
import {
    React,
    Html5,
    Css3,
    Javascript,
    Typescript,
    Bash,
    Python,
    Rust,
} from "@thesvg/react";
import {DatabaseIcon} from "@phosphor-icons/react";
import {useRouter} from "next/navigation";

export default function Page() {
    const router = useRouter();
    const Popularlangauges = [
        {Icon: React, name: "React.js", type: "SPA"},
        {Icon: Html5, name: "HTML", type: "Web Application"},
        {Icon: Javascript, name: "Javascript", type: "Backend"},
        {Icon: Typescript, name: "Typescript", type: "Backend"},
        {Icon: DatabaseIcon, name: "SQL", type: "Database"},
        {Icon: Bash, name: "Bash", type: "Shell Script"},
        {Icon: Python, name: "Python", type: "Backend"},
        {Icon: Rust, name: "Rust", type: "Backend"},
    ];

    return (
        <div className="w-full flex flex-col gap-0">
            <header className="w-full flex items-center justify-between p-2">
                <img src={"/logo.svg"} alt={"logo"} className="size-10"/>
                <ToggleThemeButton/>
            </header>
            <div className="w-full flex flex-col justify-center h-[94svh] gap-3">
                <DotPattern
                    glow={true}
                    className={cn(
                        "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                    )}
                />
                <div className="grid place-content-center place-items-center gap-2">
                    <h1 className="text-6xl font-extrabold text-center">
                        Learn, Tiny Code, Build Online
                    </h1>
                    <Description>
                        A Playgroud that support 40+ languages includes frontend, backend,
                        shell scripts and databases
                    </Description>
                </div>
                <div className="flex justify-center">
                    <Button size="lg" onClick={() => router.push("/code")}>
                        Code it
                    </Button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-auto px-16 mt-32">
                <div className="w-full blur-3xl -my-16 h-10 rounded-full bg-accent-hover"/>
                <div
                    className="w-full z-10 h-[80svh] border-4 border-b-0 border-foreground/10 bg-content1 rounded-t-2xl overflow-hidden shadow-2xl">
                    <img
                        src="/snapshot.png"
                        alt="Snapshot"
                        className="w-full h-full object-cover object-top"
                    />
                </div>
            </div>
            <div className="bg-background-tertiary py-0 flex flex-col gap-4 justify-center z-20">
                <div className="grid grid-cols-6">
                    <div className="col-span-2 ring-[0.5px] ring-muted/50 row-span-2 flex items-center justify-center">
                        <Typography.Paragraph>
                            Popular Languages on{" "}
                            <span className="text-accent-hover font-semibold">
                TinyGround
              </span>
                        </Typography.Paragraph>
                    </div>
                    {Popularlangauges.map((itm, idx) => (
                        <div key={`pl-${idx}`}
                             className="flex flex-row h-32 ring-[0.5px] ring-muted/50 gap-2 items-center justify-center hover:bg-accent-soft transition-colors">
                            <itm.Icon className="size-10"/>
                            <div className="flex flex-col">
                                <Label className="text-xl text-accent-hover">{itm.name}</Label>
                                <Description>{itm.type}</Description>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-background-tertiary p-6 flex flex-col gap-4 items-center justify-center h-svh">
                <TinyIcon className="size-45"/>
                <Typography.Heading level={1}>
                    Write <span className="text-accent-hover">Code</span> without Setup!
                </Typography.Heading>
                <Description>
                    Getting started with playground UI and perform opertaions
                </Description>
            </div>
            <div className="w-full p-3 grid place-items-center">
                <Label>
                    Built by{" "}
                    <Link
                        href="https://quddus.is-a.dev"
                        target="_blank"
                        className={"text-accent hover:text-accent-hover"}
                    >
                        Quddus
                    </Link>{" "}
                    . The source code is available on{" "}
                    <Link
                        href="https://github.com/quddus-larik/tiny-ground"
                        target="_blank"
                        className={"text-accent hover:text-accent-hover"}
                    >
                        GitHub
                    </Link>
                    .
                </Label>
            </div>
        </div>
    );
}
