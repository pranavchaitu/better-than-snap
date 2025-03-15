"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Loader2 } from "lucide-react"
import { PageToggle } from "./page-toggle"

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
                {data?.user.image && <Avatar className="h-10 w-10 border hidden sm:block">
                    <AvatarImage src={data?.user.image || `/placeholder.svg?height=48&width=48`} alt={data?.user?.name!} />
                    <AvatarFallback>{data?.user.name!.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>}
                {path != '/' && (
                    <>
                        <PageToggle />
                        <ModeToggle />
                    </>
                )}
                <Button onClick={() => status == "authenticated" ? signOut() : status == "unauthenticated" ? signIn() : null}>
                    {status == "authenticated" ? "Sign Out" : status == "unauthenticated" ? "Sign in" : <Loader2 className="animate-spin"/>}
                </Button>
            </div>
        </div>
    )
}
  