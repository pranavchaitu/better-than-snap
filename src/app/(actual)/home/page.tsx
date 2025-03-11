import { Post } from "@/components/post"

export default async function Home() {
    const posts = await prisma.post.findMany({})
    return <div className="py-4 px-6 flex flex-col gap-4">
        { posts.map(post => <Post key={post.id} url={post.url} userId={post.userID}/>) }
    </div>
}

