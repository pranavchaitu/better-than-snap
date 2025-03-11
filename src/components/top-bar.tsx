"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function TopBar() {
    const { data, status } = useSession()
    const path = usePathname()
    return (
        <div className="p-4 rounded-2xl fixed z-30 bg-transparent backdrop-blur-lg w-screen max-w-screen-md bg-blur flex items-center justify-between gap-2">
            <Link href={status == "authenticated" ? '/home' : status == "unauthenticated" ? '/' : ''}>
                <div className="cursor-pointer">
                    Snapweb.
                </div>
            </Link>  
            <div className="flex items-center gap-2">
                {data?.user && <Image 
                    src={data?.user.image!}
                    alt="user"
                    width={35}
                    height={35}
                    className="rounded-full"
                />}
                {path != '/' && <ModeToggle />}
                <Button onClick={() => data?.user ? signOut() : signIn()}>
                    {data?.user ? "Sign Out" :  "Sign in"}
                </Button>
            </div>
        </div>
    )
}
  