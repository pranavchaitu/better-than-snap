"use server";

import prisma from "@/lib/db"
import { auth } from "./auth";
import { CreateUserPayload } from "./types";

export async function findUser(email : string) {
    try {
        const user = await prisma.user.findFirst({
            where : {
                email,
            }
        })
        return user
    } catch (error) {
        return null
    } 
}

export async function createUser(body : CreateUserPayload) {
    return await prisma.user.create({
        data : {
            email : body.email,
            profileUrl : body.profileUrl,
            username : body.name
        }
    })
}

export async function getPosts() {
    const session = await auth()
    const userId = session?.user.id
    try {        
        const posts = await prisma.post.findMany({
            include : {
                creator : {
                    select : {
                        username : true,
                        profileUrl : true
                    }
                },
                savedBy : {
                    select : {
                        id : true
                    }
                }
            }
        })
        return posts.map(post => ({
            ...post,
            isSaved : post.savedBy.some(user => user.id == userId)
        }))
    } catch (error) {
        return {
            error,
            message : "error fetching posts"
        }
    }
}

export async function getPostsById(id : string) {
    const session = await auth()
    const userId = session?.user.id
    try {        
        const posts = await prisma.post.findMany({
            where : {
                userID : id
            },
            include : {
                creator : {
                    select : {
                        username : true,
                        profileUrl : true
                    }
                },
                savedBy : {
                    select : {
                        id : true
                    }
                }
            }
        })
        return posts.map(post => ({
            ...post,
            isSaved : post.savedBy.some(user => user.id == userId) 
        }))
    } catch (error) {
        return {
            error,
            message : "error fetching posts"
        }
    }
}

export async function getUsers() {
    try {        
        const users = await prisma.user.findMany({
            select : {
                id : true,
                username : true,
                profileUrl : true,
            }
        })
        return users
    } catch (error : any) {
        return {
            error,
            message : "error fetching users"
        }
    }
}

export async function increaseLikes(id : string) {
    try {
        await prisma.post.update({
            where : {
                id
            },
            data : {
                likeCount : {
                    increment : 1
                }
            }
        })
        return true
    } catch (error) {
        console.log(error)
        return false        
    }
}

export async function decreaseLikes(id : string) {
    try {
        await prisma.post.update({
            where : {
                id
            },
            data : {
                likeCount : {
                    decrement : 1
                }
            }
        })
        return true
    } catch (error) {
        console.log(error)
        return false        
    }
}

export async function savePost(postId : string) {
    try {        
        const session = await auth()
        const userId = session?.user.id
        await prisma.user.update({
            where : {
                id : userId
            },
            data : {
                savedPosts : {
                    connect : {
                        id : postId
                    }
                }
            },
        })
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

export async function unsavePost(postId : string) {
    try {        
        const session = await auth()
        const userId = session?.user.id
        await prisma.user.update({
            where : {
                id : userId
            },
            data : {
                savedPosts : {
                    disconnect : {
                        id : postId
                    }
                }
            },
        })
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

export async function getAllSavedPosts() {
    try {        
        const session = await auth()
        const userId = session?.user.id
        const res = await prisma.user.findUnique({
            where : {
                id : userId
            },
            select : {
                savedPosts : {
                    select : {
                        id : true,
                        url : true,
                        likeCount : true,
                        creator : {
                            select : {
                                username : true,
                                profileUrl : true
                            }
                        }
                    }
                }
            }
        })
        const posts = res?.savedPosts
        return posts?.map(post => ({
            ...post,
            isSaved : true
        }))
    } catch (error) {
        return {
            error,
            message : "error fetching posts"
        }
    }
}