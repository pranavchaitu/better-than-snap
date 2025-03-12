"use client";

import { Bookmark, Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Post({ url, profileUrl, username } : {
    url : string,
    profileUrl : string,
    username : string
}) {
    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(false)
    
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
                        <div className="flex flex-col">
                        <p className="font-normal text-base text-gray-50 relative z-10">
                            {username}
                        </p>
                        <p className="text-sm text-gray-400">2 min ago</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full opacity-0 translate-y-10 transition-all duration-300 ease-in-out group-hover/card:opacity-100 group-hover/card:translate-y-0">
                        <div className="flex p-4 justify-between bg-gray-900">
                            <Heart 
                                onClick={() => setLiked(!liked)} 
                                className={`cursor-pointer transition-all duration-300 ${liked ? "text-red-500" : "text-white"}`}
                            />
                            <Bookmark 
                                onClick={() => setSaved(!saved)} 
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

