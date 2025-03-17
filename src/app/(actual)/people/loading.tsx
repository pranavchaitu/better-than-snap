import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <main className="container ml-4 py-8 px-4">
            <Skeleton className="w-full h-12 rounded-full mb-4" /> 
            <Skeleton className="w-full h-8 rounded-full" />
            <div className="mt-5 grid grid-cols-2 gap-4">
              <Skeleton className="w-full h-20 rounded-full" />
              <Skeleton className="w-full h-20 rounded-full" />
              <Skeleton className="w-full h-20 rounded-full" />
              <Skeleton className="w-full h-20 rounded-full" />
            </div>
        </main>
    ) 
}