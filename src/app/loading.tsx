import { SkeletonBlock } from "@/components/skeletons/SectionSkeleton";

export default function Loading() {
  return (
    <div>
      {/* Hero skeleton */}
      <div className="relative h-[88vh] min-h-[560px] max-h-[820px] w-full bg-ink overflow-hidden">
        <div className="section-shell h-full flex flex-col justify-end pb-24">
          <div className="max-w-xl space-y-4">
            <SkeletonBlock className="h-4 w-48 bg-paper/15" />
            <SkeletonBlock className="h-12 w-full bg-paper/15" />
            <SkeletonBlock className="h-12 w-3/4 bg-paper/15" />
            <SkeletonBlock className="h-4 w-full bg-paper/10 mt-4" />
            <SkeletonBlock className="h-4 w-2/3 bg-paper/10" />
            <div className="flex gap-4 pt-4">
              <SkeletonBlock className="h-12 w-40 bg-paper/15" />
              <SkeletonBlock className="h-12 w-40 bg-paper/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats skeleton */}
      <div className="bg-ink section-shell py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <SkeletonBlock className="h-8 w-20 bg-paper/15" />
            <SkeletonBlock className="h-3 w-24 bg-paper/10" />
          </div>
        ))}
      </div>

      {/* Generic section skeletons */}
      <div className="bg-celadon">
        <div className="section-shell py-20 grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <SkeletonBlock className="h-4 w-40" />
            <SkeletonBlock className="h-10 w-full" />
            <SkeletonBlock className="h-4 w-3/4" />
          </div>
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-2 border-t border-ink/10 pt-6">
                <SkeletonBlock className="h-5 w-1/2" />
                <SkeletonBlock className="h-3 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
