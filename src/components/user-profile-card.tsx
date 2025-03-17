"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface UserProfileProps {
  id: string
  name?: string
  username: string
  avatar?: string
  bio?: string
  isFollowing?: boolean
  followers?: number
  role?: string
  onFollow?: (id: string, following: boolean) => void
}

export function UserProfileCard({
  id,
  username,
  avatar,
}: UserProfileProps) {

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="px-4"> 
        <div className="flex items-center gap-4 ">
          <Avatar className="h-12 w-12 border">
            <AvatarImage src={avatar || `/placeholder.svg?height=48&width=48`} alt={username} />
            <AvatarFallback>{username.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between gap-2">
              <div>
                <h3 className="font-semibold leading-none">{username}</h3>
                {/* <p className="text-sm text-muted-foreground">@{username}</p> */}
              </div>
              <Link href={`profile/${id}`}>
                <Button variant={"default"} size="sm" className="gap-1">
                  <span>Visit Profile</span>
                </Button>
              </Link>
            </div>
            {/* {role && (
              <Badge variant="outline" className="text-xs">
                {role}
              </Badge>
            )}
            <p className="text-sm line-clamp-2">{bio}</p>
            <p className="text-xs text-muted-foreground">{12} followers</p> */}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

