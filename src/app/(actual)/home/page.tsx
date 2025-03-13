import { PostCardList } from "@/components/ui/post-card-list"
import { getPosts } from "@/lib/actions"

export default async function Home() {
    const posts = await getPosts()
    if("error" in posts) {
        return <>
            no posts
        </>
    }
    return <PostCardList posts={posts}/>
}