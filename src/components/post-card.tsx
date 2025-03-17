"use client";

import { decreaseLikes, increaseLikes, savePost, unsavePost } from "@/lib/actions";
import { Bookmark, Heart } from "lucide-react";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import { toast } from "sonner";

export function PostCard({ id, url, likeCount, profileUrl, username, isSaved } : {
    id : string,
    url : string,
    likeCount : number,
    profileUrl : string,
    username : string,
    isSaved : boolean
}) {
    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(isSaved)
    const [likes, setLikes] = useState(likeCount)
    
    const likePost = async (e : MouseEvent) => {
        e.preventDefault()
        setLiked(true)
        setLikes(likes+1)
        await increaseLikes(id)
        toast.success("Liked the post <3.")
    }   
    
    const dislikePost = async (e : MouseEvent) => {
        e.preventDefault()
        setLiked(false)
        setLikes(likes-1)
        await decreaseLikes(id)
        toast.success("Disliked the post.")
    }

    const selectSave = async (e : MouseEvent) => {
        e.preventDefault()
        setSaved(true)
        await savePost(id)
        toast.success("Post Saved!")
    }

    const deselectSave = async (e : MouseEvent) => {
        e.preventDefault()
        setSaved(false)
        await unsavePost(id)
        toast.success("Post Unsaved!")
    }

    return (
        <div>
            <div className="w-full group/card">
                <div
                className="border border-black cursor-pointer overflow-hidden relative card h-96 rounded-lg shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4"
                    style={{
                        backgroundImage: url ? `url("${url}")` : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="flex flex-row items-center space-x-4 z-10">
                        <Image
                            height="100"
                            width="100"
                            alt="Avatar"
                            src={`${profileUrl}`}
                            className="h-10 w-10 rounded-full border-2 object-cover"
                        />
                        <div className="flex flex-col items-start">
                            <p className="font-normal text-base text-gray-50 relative z-10">
                                {username}
                            </p>
                            <p className="text-sm text-gray-400">2 min ago</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full opacity-0 translate-y-10 duration-300 transition-all ease-in-out group-hover/card:opacity-100 group-hover/card:translate-y-0">
                        <div className="flex p-4 justify-between bg-gray-900">
                            <div className="space-x-2 flex items-center">
                                <Heart 
                                    onClick={(e) => liked ? dislikePost(e) : likePost(e)} 
                                    className={`cursor-pointer transition-all duration-300 ${liked ? "text-red-500" : "text-white"}`}
                                />
                                <span className="text-white">
                                    {likes}
                                </span>
                            </div>
                            <Bookmark 
                                onClick={(e) => saved ? deselectSave(e) : selectSave(e)} 
                                className={`cursor-pointer transition-all duration-300 ${saved ? "text-yellow-400" : "text-white"}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }




// import Image from "next/image";

// export function Post({ url, userId} : {
//     url : string,
//     userId : string
// }) {
//     console.log(url)
//     return <>
//         <div className="border border-gray-950 p-3 bg-gray-600 rounded-lg">
//             <Image 
//                 src={url}
//                 alt={userId}
//                 width={500}
//                 height={300}
//             />
//             {userId}
//         </div>
//     </>
// }