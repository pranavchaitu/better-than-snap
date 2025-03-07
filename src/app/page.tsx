"use client"
import { useSession } from "next-auth/react"
import Image from "next/image";

export default function Home() {
  const session = useSession()
  const name : string = session.data?.user?.name || ""
  const image : string | null = session.data?.user?.image || null
  return (
    <div>
      {name}
      {image ? image : "no image"}
    </div>
  );
}

