import { PostCardList } from "@/components/ui/post-card-list"
import { getAllSavedPosts } from "@/lib/actions"

export default async function Home() {
    const posts = await getAllSavedPosts()
    return <PostCardList posts={posts!}/>
}

