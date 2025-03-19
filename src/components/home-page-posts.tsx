"use client"

import { SkeletonCard } from "@/components/post-skeleton";
import { Button } from "@/components/ui/button";
import { PostCardList } from "@/components/post-card-list"
import { Skeleton } from "@/components/ui/skeleton";
import { PostCardType } from "@/lib/types";
import { useState } from "react";
import { toast } from "sonner";

export function HomePagePosts({ posts } : {
    posts : PostCardType[]
}) {
    const [trending, setTrending] = useState(false)
    const [loading, setLoading] = useState(false);
    
    function selectForYou() {
        setLoading(true)
        setTrending(false)
        setLoading(false) 
        toast.success("All posts for you!")
    }
    
    function selectTrending() {
        setLoading(true)
        setTrending(true)
        setLoading(false) 
        toast.success("All Trending posts!")
    }

    if(loading) {
        return <>
            <div className="py-4 px-6 flex flex-col items-center gap-4">
                <Skeleton className="w-30 h-10 rounded-full mb-4" /> 
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
            </div>
        </>
    }

    return <>
        <div className="flex items-center justify-center gap-1">
            <Button onClick={selectForYou} variant={"ghost"} className={!trending ? `bg-accent text-accent-foreground` : ""}>for you</Button>   
            <Button onClick={selectTrending} variant={"ghost"} className={trending ? `bg-accent text-accent-foreground` : ""}>trending</Button>   
        </div>
        <PostCardList posts={!trending ? posts : posts.toSorted((a,b) => {
            return b.likeCount - a.likeCount
        })}/>
    </>
}