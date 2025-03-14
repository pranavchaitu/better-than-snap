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
    return <PostCardList posts={userPosts} title={`All posts by ${userId}`}/>
}