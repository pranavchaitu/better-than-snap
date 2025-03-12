"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
                <Avatar className="h-10 w-10 border">
                    <AvatarImage src={data?.user.image || `/placeholder.svg?height=48&width=48`} alt={data?.user?.name!} />
                    <AvatarFallback>{data?.user.name!.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                {path != '/' && <ModeToggle />}
                <Button onClick={() => data?.user ? signOut() : signIn()}>
                    {data?.user ? "Sign Out" :  "Sign in"}
                </Button>
            </div>
        </div>
    )
}
  