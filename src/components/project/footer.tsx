import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className={"flex flex-row justify-center items-center w-full"}>
      <Link
        href="/legal"
        className={cn(
          buttonVariants({
            variant: "ghost",
            size: "sm",
            className:
              "flex flex-row gap-2 items-center px-0 hover:bg-transparent hover:text-primary-foreground/80 group/edit",
          }),
        )}
      >
        <span className={"text-white"}>Legal Notice</span>
      </Link>
    </footer>
  );
}
