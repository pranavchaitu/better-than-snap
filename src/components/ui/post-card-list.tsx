"use client"

import { PostCardType } from "@/lib/types";
import { PostCard } from "../post-card";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export function PostCardList({ posts,title } : {
    posts : PostCardType[],
    title? : string
}) {

    return <main className="flex flex-col ml-4 py-8 px-4 space-y-4">
        {title?.length && <h1 className="text-center text-3xl font-bold mb-6">{title}</h1>}
        {posts.map(post => 
            <Dialog key={post.id}>
                <DialogTrigger>
                    <PostCard 
                        id={post.id}
                        url={post.url} 
                        likeCount={post.likeCount}
                        profileUrl={post.creator.profileUrl} 
                        username={post.creator.username}
                        isSaved={post.isSaved}
                    />
                </DialogTrigger>
                <DialogContent className="bg-transparent border-none">
                    <DialogTitle className="hidden"/>
                    <div className="flex items-center justify-center">
                        <img className="object-cover object-center w-full max-w-[520px] sm:max-w-full max-h-[520px] rounded-lg"
                            src={post.url}
                            alt="gallery-photo" 
                        />
                    </div>
                </DialogContent>
            </Dialog>
        )}
    </main>
}
