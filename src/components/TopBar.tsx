"use client"

import { signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
import Image from "next/image"

export default function TopBar() {
    const { data } = useSession()
    return (
        <div className="p-4 rounded-2xl fixed z-30 bg-transparent backdrop-blur-lg w-screen max-w-screen-md bg-blur flex items-center justify-between gap-2">
            <div>Snapweb.</div>
            <div className="flex items-center gap-2">
                {data?.user && <Image 
                    src={data?.user.image!}
                    alt="user"
                    width={35}
                    height={35}
                    className="rounded-full"
                />}
                <ModeToggle />
                <Button onClick={() => signOut()}>
                    {"Sign Out"}
                </Button>
            </div>
        </div>
    )
}
  