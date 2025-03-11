"use server";

import prisma from "@/lib/db"

async function getPosts() {
    const posts = await prisma.post.findMany({})
    return posts
}