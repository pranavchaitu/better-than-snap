"use client"

import { PostCardType } from "@/lib/types";
import { PostCard } from "./post-card";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button";
import Link from "next/link";

export function PostCardList({ posts,username,userId } : {
    posts : PostCardType[],
    username? : string,
    userId? : string
}) {

    return <main className="flex flex-col ml-4 py-8 px-4 space-y-4">
        {username?.length && (
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-center text-3xl font-bold mb-6">All posts by <span className="underline underline-offset-8">{username}</span></h1>
                <Link href={`/gallery/${userId}`}>
                    <Button variant={"outline"}>View gallery</Button>
                </Link>
            </div>
        )}
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
