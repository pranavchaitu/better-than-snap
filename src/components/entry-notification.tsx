"use client"

import { useEffect } from "react"
import { toast } from "sonner"

export function EntryNotification({  }) {
    useEffect(() => {
        toast.error("Not enough posts for gallery showcase",{
            description : "Add like more than 6 posts"
        })
    },[])
    return <></>
}