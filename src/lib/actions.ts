"use server";

import prisma from "@/lib/db"

export async function getPosts() {
    const posts = await prisma.post.findMany({
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
    })
    return posts
}

export async function getUsers() {
    const users = await prisma.user.findMany({
        select : {
            id : true,
            username : true,
            profileUrl : true,
        }
    })
    return users
}

export async function increaseLike(id : string) {
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

export async function decreaseLike(id : string) {
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