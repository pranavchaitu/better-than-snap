"use client"

import { signIn, signOut } from "next-auth/react"
import { Button } from "./ui/button"

export default function TopBar() {
    return (
        <div className="flex justify-between">
            <div>Snapweb.</div>
            <div>
                <Button onClick={() => signIn()}>Signin</Button>
                <Button onClick={() => signOut()}>Signout</Button>
            </div>
        </div>
    )
}
  