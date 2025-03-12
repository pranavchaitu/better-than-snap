import { SkeletonCard } from "@/components/post-skeleton";

export default function Loading() {
    return <div className="py-4 px-6 flex flex-col items-center gap-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
    </div>
}


