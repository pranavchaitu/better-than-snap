"use client"

import { UserProfileCard } from "./user-profile-card"
import { Input } from "./ui/input"
import { useEffect, useState } from "react"
import { UserPayload } from "@/lib/types"
import { Skeleton } from "./ui/skeleton"

export function UserProfileList({ users } : {
  users : UserPayload[]
}) {
  const [username, setUsername] = useState("")
  const [loading, setLoading] = useState(false)
  const [filteredUsers, setFilteredUsers] = useState<UserPayload[]>(users)

  useEffect(() => {
    let timer : NodeJS.Timeout | undefined = undefined;
    setLoading(true)
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      console.log(username)
      const filteredUsers = users.filter(user => user.username.toLowerCase().startsWith(username))
      setFilteredUsers(filteredUsers)
      setLoading(false)
    },500)
    return () => {
      clearTimeout(timer)
    }
  },[username]) 

  return (
    <div>
      <Input onChange={(e) => setUsername(e.target.value.trim().toLowerCase())} size={10} type="text" placeholder="Search user"/>
      {loading ? <main className="container py-8 px-4">
        <Skeleton className="w-full h-8 rounded-full" />
        <div className="mt-5 grid grid-cols-2 gap-4">
          <Skeleton className="w-full h-20 rounded-full" />
          <Skeleton className="w-full h-20 rounded-full" />
          <Skeleton className="w-full h-20 rounded-full" />
          <Skeleton className="w-full h-20 rounded-full" />
        </div>
      </main> : (
        <>        
          {!filteredUsers.length && (
            <main className="container ml-4 py-8 px-4 space-y-4">
              <h1 className="text-center text-3xl font-bold mb-6">No Users found!</h1>
            </main>
          )}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredUsers
              .map((user) => (
                <UserProfileCard
                  key={user.id}
                  id={user.id}
                  avatar={user.profileUrl}
                  username={user.username}
                />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

