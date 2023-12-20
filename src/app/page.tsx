import Header from "@/components/project/header";
import React from "react";
import Image from 'next/image'

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
                <div >
                    <h1 className="text-3xl font-bold text-center flex flex-col items-start gap-2">
                        <span>Hey I'm</span>
                        <span
                            className="text-5xl  drop-shadow-[0_0_0.3rem_#00000030] dark:drop-shadow-[0_0_0.3rem_#ffffff70]">Jonas Bender</span>
                    </h1>
                    <p className="mt-4 text-lg">18 y/o Software Developer from Germany</p>
                </div>
                <Image
                    src="/jo-pb.png"
                    alt="Jonas Logo"
                    className=" w-32 md:w-auto rounded-full drop-shadow-[0_0_0.3rem_#ffffff70]"
                    width={190}
                    height={190}
                    priority
                />
            </div>

            <div className={"w-2 p-2 my-[100vh]"}/>


        </main>
    );
}
