import { EntryNotification } from '@/components/entry-notification';
import Masonry from '@/components/ui/masonry'
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

    function randomHeight() {
        const num = Math.random()
        if (num <= 1/3) {
            return 500
        } else if(num > 1/3 && num <= 2/3) {
            return 700
        } else {
            return 350
        } 
    }

    const data = userPosts.map(post => ({
            id : post.id,
            image : post.url,
            height : randomHeight()
        }
    ))

    return <div className="mt-24"> 
        {userPosts.length <= 6 && <EntryNotification />} 
        <Masonry data={data} />
    </div>
}