"use client"
import { useSession } from "next-auth/react"

export default function Home() {
    const session = useSession()
    return <div className="pt-20">
        home page <br />
        {JSON.stringify(session)}
    </div>
}