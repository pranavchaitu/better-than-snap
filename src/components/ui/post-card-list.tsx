"use client"

import { PostCardType } from "@/lib/types";
import { PostCard } from "../post-card";
import { toast } from "sonner";

export function PostCardList({ posts,title } : {
    posts : PostCardType[],
    title? : string
}) {
    if(posts && !posts.length) {
        toast.error("no single post.")
        return <main className="container ml-4 py-8 px-4 space-y-4">
            <h1 className="text-center text-3xl font-bold mb-6">No posts!</h1>
        </main>
    }
    return <main className="container ml-4 py-8 px-4 space-y-4">
        {title?.length && <h1 className="text-center text-3xl font-bold mb-6">{title}</h1>}
        {posts.map(post => 
            <PostCard 
                id={post.id}
                key={post.id} 
                url={post.url} 
                likeCount={post.likeCount}
                profileUrl={post.creator.profileUrl} 
                username={post.creator.username}
                isSaved={post.isSaved}
            />
        )}
    </main>
}
