import { SkeletonCard } from "@/components/post-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return <div className="py-4 px-6 flex flex-col items-center gap-4">
        <Skeleton className="w-30 h-10 rounded-full mb-4" /> 
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
    </div>
}


