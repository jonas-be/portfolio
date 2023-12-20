import Header from "@/components/project/header";
import React from "react";
import Link from "next/link";
import Image from 'next/image'
import {buttonVariants} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {FaDiscord, FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa6";
import Footer from "@/components/project/footer";

export default async function Home() {
    return (
        <main>
            <Header/>
            <div className={"overflow-hidden"}>
                <div className="bubble-bg"/>
                <div className="bubble2"/>
                <div className="bubble"/>
            </div>

            <div
                className={"w-full flex justify-center items-center flex-col-reverse gap-32 md:flex-row md:gap-20 lg:gap-80  xl:gap-[30rem] py-12 md:py-20"}>
                <div>
                    <h1 className="text-3xl font-bold text-center flex flex-col items-start gap-2">
                        <span>Hey I'm</span>
                        <span
                            className="text-5xl  drop-shadow-[0_0_0.3rem_#00000030] dark:drop-shadow-[0_0_0.3rem_#ffffff70]">Jonas Bender</span>
                    </h1>
                    <p className="mt-4 text-lg">18 y/o Software Developer from Germany</p>

                </div>
                <Image
                    src="/jo-pb.png"
                    alt=" Jonas Logo"
                    className=" w-32 md:w-auto rounded-full drop-shadow-[0_0_0.3rem_#ffffff70]"
                    width={190}
                    height={190}
                    priority
                />
            </div>

            <div className="flex flex-row justify-center items-center gap-4 md:gap-8 mt-20 mb-4 md:mt-6">
                <Link className={cn(buttonVariants({variant: "outline", size: "default", className: "flex gap-2"}))}
                      href="https://www.linkedin.com/in/jonas-bender/" target={"_blank"}>
                    <FaLinkedin className={"w-5 h-5 text-[#0a66c2]"}/><span className={"hidden md:block"}>Jonas Bender</span>
                </Link>
                <Link className={cn(buttonVariants({variant: "outline", size: "default", className: "flex gap-2"}))}
                      href="https://github.com/jonas-be/" target={"_blank"}>
                    <FaGithub className={"w-5 h-5 text-[#333] dark:text-white"}/><span className={"hidden md:block"}>Jonas-be</span>
                </Link>
                <Link className={cn(buttonVariants({variant: "outline", size: "default", className: "flex gap-2"}))}
                      href="https://discordapp.com/users/398876120696619008/" target={"_blank"}>
                    <FaDiscord className={"w-5 h-5 text-[#5865f2]"}/><span className={"hidden md:block"}>Jonas_be</span>
                </Link>

                <Link className={cn(buttonVariants({variant: "outline", size: "default", className: "flex gap-2"}))}
                      href="https://twitter.com/JonasBe_/" target={"_blank"}>
                    <FaTwitter className={"w-5 h-5 text-[#1da1f2]"}/><span className={"hidden md:block"}>JonasBe_</span>
                </Link>
            </div>

            <div className={"w-2 h-[33vh]"}/>
            <Footer/>
        </main>
    );
}
