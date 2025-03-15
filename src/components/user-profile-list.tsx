import { getUsers } from "@/lib/actions"
import { UserProfileCard } from "./user-profile-card"

export async function UserProfileList() {
  const users = await getUsers()
  if("error" in users) {
    return <>
      no users
    </>
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {users.map((user) => (
        <UserProfileCard
          key={user.id}
          id={user.id}
          avatar={user.profileUrl}
          username={user.username}
        />
      ))}
    </div>
  )
}

