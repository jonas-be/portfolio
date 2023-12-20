import {ModeToggle} from "@/components/custom/mode-toggle";
import React from "react";
import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";

export default function Header() {
    return (
        <>
            <header
                className={"bg-background/70 backdrop-blur z-10 flex flex-row justify-between items-center px-4 p-3 fixed w-full "}>
                <Link href="/" className={cn(buttonVariants({
                    variant: "ghost", size: "default",
                    className: "flex flex-row gap-2 items-center px-0 hover:bg-transparent hover:text-primary-foreground/80 group/edit"
                }))}>
                    <h1 className="font-semibold text-lg">Jonas Bender</h1>
                </Link>
                <div className="flex items-center gap-3">
                    <ModeToggle/>
                </div>
            </header>
            <div className="w-full h-14 mb-10"/>
        </>

    )
}