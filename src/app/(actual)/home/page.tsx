import { HomePagePosts } from "@/components/home-page-posts"
import { getPosts } from "@/lib/actions"

export const dynamic = "force-dynamic";

export default async function Home() {
    const posts = await getPosts()
    return <HomePagePosts posts={posts}/>
}
