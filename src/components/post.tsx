"use client";
import { Bookmark, Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Post({ url, userId } : {
    url : string,
    userId : string
}) {
    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(false)
    return (
        <div>
            <div className="w-full group/card">
                <div
                className="border border-white cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4"
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
                            src="/manu.png"
                            className="h-10 w-10 rounded-full border-2 object-cover"
                        />
                        <div className="flex flex-col">
                        <p className="font-normal text-base text-gray-50 relative z-10">
                            {userId}
                        </p>
                        <p className="text-sm text-gray-400">2 min read</p>
                        </div>
                    </div>
                    <div className="flex p-4 justify-between">
                        <Heart onClick={() => setLiked(!liked)}/>
                        <Bookmark onClick={() => setSaved(!saved)}/>
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

