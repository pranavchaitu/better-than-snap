import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <div className="grid grid-rows-2 h-screen">
      <div className="flex flex-col justify-end">
        <div className="text-5xl text-center font-semibold">
          Don't just take pictures.<br></br> Upload them.
        </div>
        <div className="flex items-center justify-center mt-5">
          <Button type="button" variant={"secondary"} className="text-lg cursor-pointer">
            <a href="/home">
              start uploading
            </a>
          </Button>
        </div>
      </div>
      <footer className="flex items-end justify-center">
        <div className="px-6 py-2 bg-zinc-100 shadow-md rounded-t-2xl dark:bg-zinc-800">
          Designed & Developed by <Button className="p-0 ml-1" variant={'link'}>
          <a href="https://x.com/bestsoldev" target="_blank">@pranav</a>
          </Button>
        </div>
      </footer>
    </div>
  );
}

