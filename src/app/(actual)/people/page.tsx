import { UserProfileList } from "@/components/user-profile-list";
import { getUsers } from "@/lib/actions";

export const dynamic = "force-dynamic";

export default async function Home() {
    const users = await getUsers()
    return (
        <main className="container ml-4 py-8 px-4">
            <h1 className="text-3xl font-bold mb-6">People you may know</h1>
            <UserProfileList users={users}/>
        </main>
    ) 
}