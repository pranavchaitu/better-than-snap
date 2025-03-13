"use client"

import { PostCardListType } from "@/lib/types";
import { PostCard } from "../post-card";
import { toast } from "sonner";
import { redirect } from "next/navigation";

export function PostCardList({ posts,title } : {
    posts : PostCardListType,
    title? : string
}) {
    if ("error" in posts) {
        toast.error(posts.message)
        return redirect('/home')
    }
    if(!posts.length) {
        toast.error("User has no posts.")
        return redirect('/home')
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
