"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div className="flex justify-center w-full">
        <UploadDropzone
          className="cursor-pointer bg-accent ut-label:text-lg ut-allowed-content:ut-uploading:text-red-300"
          endpoint="imageUploader"
          config={{ cn : twMerge }}
          onClientUploadComplete={(res) => {
            // console.log("Files: ", res[0].ufsUrl);
            toast.success("Upload Completed");
            router.push('/home')
          }}
          onUploadError={(error: Error) => {
            toast.error('error uploading photo',{
              description : "you can try it again"
            });
          }}
        />
    </div>
  );
}
