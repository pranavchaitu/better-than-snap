"use client"

import { Button } from "@/components/ui/button";
import Waves from "@/components/ui/waves";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-2 h-screen">
      <Waves
        className="-z-20"
        lineColor="#fff"
        backgroundColor={"rgba(0, 0, 0, 255)"}
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      <div className="flex flex-col justify-end">
        <div className="text-5xl text-amber-100 text-center font-semibold">
          Don't just take pictures.<br></br> Upload them.
        </div>
        <div className="flex items-center justify-center mt-5">
          <Link href="/home">
            <div className="text-lg bg-zinc-800 shadow-md px-4 py-2 rounded-2xl">
              start uploading
            </div>
          </Link>
        </div>
      </div>
      <footer className="flex items-end justify-center">
        <div className="px-6 py-2 shadow-md rounded-t-2xl bg-zinc-800">
          Designed & Developed by <Button className="p-0 ml-1" variant={'link'}>
          <a href="https://x.com/bestsoldev" target="_blank">@pranav</a>
          </Button>
        </div>
      </footer>
    </div>
  );
}

