import { PostCardList } from "@/components/ui/post-card-list"
import { getAllSavedPosts } from "@/lib/actions"

export const dynamic = "force-dynamic";

export default async function Home() {
    const posts = await getAllSavedPosts()
    return <PostCardList posts={posts}/>
}

