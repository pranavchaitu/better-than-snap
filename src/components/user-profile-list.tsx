import { getUsers } from "@/lib/actions"
import { UserProfileCard } from "./user-profile-card"

export async function UserProfileList() {
  const users = await getUsers()
  return (
    <div className="grid grid-cols-2 gap-4">
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

