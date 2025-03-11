"use client"

import { Bookmark, House, ImagePlus, UsersRound } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

export function SideBar() {
    return <div className="hidden sm:block">
        <div className="top-30 bottom-52 rounded-r-3xl fixed w-36 flex flex-col justify-between">
            <SideBarItem icon={<House />} name="home"/>
            <SideBarItem icon={<UsersRound />} name="people"/>
            <SideBarItem icon={<Bookmark />} name="saved"/>
            <SideBarItem icon={<ImagePlus />} name="create"/>
        </div>
    </div>
}

function SideBarItem({ icon, name} : {
    icon : ReactNode,
    name : string
 }) {
    const path = usePathname()
    return (
        <Link href={`/${name}`}>
            <div className={`${path.slice(1,) == name && "bg-gray-900" } rounded-lg cursor-pointer flex gap-2 p-4`} >
                {icon}
                <span>{name}</span>
            </div>
        </Link>
    )
}