"use client";

import { useState } from "react";
import { UploadDropzone } from "@/lib/uploadthing";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
// import { redirect } from "next/navigation";

export default function Home() {
  // const [url, setUrl] = useState("")
  const router = useRouter()
  return (
    <div className="flex justify-center w-full">
      {/* { url.length ? (
        <div className="flex items-center justify-center">
          <Image
            src={url}
            alt="preview"
            width={300}
            height={300}
          />
        </div>
      ) : ( */}
        <UploadDropzone
          className="cursor-pointer bg-accent ut-label:text-lg ut-allowed-content:ut-uploading:text-red-300"
          endpoint="imageUploader"
          config={{ cn : twMerge }}
          onClientUploadComplete={(res) => {
            console.log("Files: ", res[0].size);
            // setUrl(res[0].ufsUrl)
            toast.success("Upload Completed");
            router.push('/home')
          }}
          onUploadError={(error: Error) => {
            toast.error(`ERROR! ${error.message}`);
          }}
        />
      {/* )} */}
    </div>
  );
}


// "use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"

// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"

// const formSchema = z.object({
//   caption: z.string().min(2, {
//     message: "caption must be at least 2 characters.",
//   }),
// })

// export function ProfileForm() {
//   // 1. Define your form.
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       caption: "",
//     },
//   })

//   // 2. Define a submit handler.
//   function onSubmit(values: z.infer<typeof formSchema>) {
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     console.log(values)
//   }
//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="caption"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Caption</FormLabel>
//               <FormControl>
//                 <Input placeholder="Enter your caption" {...field} />
//               </FormControl>
//               <FormDescription>
//                 This is your public caption.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   )
// }

// export default function Home() {
//     return <div className="pt-20">
//         <ProfileForm />
//     </div>
// }
