import { Post } from "@/components/post-card"
import { getPosts } from "@/lib/actions"

export default async function Home() {
    const posts = await getPosts()
    return <div className="py-4 px-6 flex flex-col gap-4">
        { posts.map(post => <Post key={post.id} url={post.url} profileUrl={post.creator.profileUrl} username={post.creator.username}/>) }
    </div>
}

