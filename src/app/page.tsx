import Image from "next/image";
import { auth } from "../../auth";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await auth()
  if(!session?.user) {
    redirect('/api/auth/signin')
  }
  return (
    <div className="pt-40 h-screen">
      {/* {JSON.stringify(session!.user)}       */}
      <div>
        <div className="text-5xl text-center font-semibold">
          Don't just take pictures.<br></br> Upload them.
        </div>
        <div className="flex items-center justify-center mt-5">
          <Button type="button" variant={"secondary"} className="text-lg cursor-pointer">
            start uploading
          </Button>
        </div>
      </div>
      <footer className="pt-30 sm:pt-40 align-bottom flex items-center justify-center mt-30">
        Designed & Developed by <Button className="p-0 ml-2" variant={'link'}>
        <a href="https://x.com/bestsoldev" target="_blank">@pranav</a>
        </Button>
      </footer>
    </div>
  );
}

