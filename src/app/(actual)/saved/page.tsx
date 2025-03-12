"use client"

import { useSession } from "next-auth/react"

export default function Home() {
    const session = useSession()
    return <>
        to list all saved posts here <br/>
        {/* {JSON.stringify(session)} */}
    </>
}