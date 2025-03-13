import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db"

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async ({ req }) => {
      const data = await auth();
      
      if (!data) throw new UploadThingError("Unauthorized");
      return { userId: data.user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);

      console.log("file url", file.ufsUrl);
      try {        
        const post = await prisma.post.create({
          data : {
            url : file.ufsUrl,
            userID : metadata.userId,
          }
        })
        return { 
          url : post.url,
        };
      } catch (error) {
        console.log(error)
      }

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
