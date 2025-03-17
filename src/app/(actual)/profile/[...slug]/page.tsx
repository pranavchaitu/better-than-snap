import { PostCardList } from "@/components/ui/post-card-list"
import { getPostsById } from "@/lib/actions"

type Params = {
    slug : string[]
}

export const dynamic = "force-dynamic";

export default async function Home({ params } : {
    params : Promise<Params>
}) {
    const { slug } = await params
    const userId = slug[0]
    const userPosts = await getPostsById(userId)
    if(userPosts && !userPosts.length) {
        return <main className="container ml-4 py-8 px-4 space-y-4">
            <h1 className="text-center text-3xl font-bold mb-6">No posts!</h1>
        </main>
    }
    return <PostCardList posts={userPosts} title={`All posts by ${userPosts[0].creator.username}`} />
}