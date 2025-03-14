import { PostCardList } from "@/components/ui/post-card-list"
import { getPosts } from "@/lib/actions"

export const dynamic = "force-dynamic";

export default async function Home() {
    const posts = await getPosts()
    return <PostCardList posts={posts}/>
}