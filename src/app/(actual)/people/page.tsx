import { UserProfileList } from "@/components/user-profile-list";

export default function Home() {
    return (
        <main className="container ml-4 py-8 px-4">
            <h1 className="text-3xl font-bold mb-6">People you may know</h1>
            <UserProfileList />
        </main>
    ) 
}