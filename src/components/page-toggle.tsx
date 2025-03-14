import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import Link from "next/link"

export function PageToggle() {
    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="sm:hidden flex items-center justify-center">
                    <Menu className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
            <Link href={'/people'}>
                <DropdownMenuItem className="cursor-pointer">People</DropdownMenuItem>
            </Link>
            <Link href={'/saved'}>
                <DropdownMenuItem className="cursor-pointer">Saved</DropdownMenuItem>
            </Link>
            <Link href={'/create'}>
                <DropdownMenuItem className="cursor-pointer">Create</DropdownMenuItem>
            </Link>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}