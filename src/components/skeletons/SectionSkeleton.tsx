interface SectionSkeletonProps {
  lines?: number;
  className?: string;
}

export function SkeletonBlock({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse bg-ink/10 ${className}`} />;
}

export default function SectionSkeleton({
  lines = 3,
  className = "",
}: SectionSkeletonProps) {
  return (
    <div className={`section-shell py-20 ${className}`}>
      <SkeletonBlock className="h-4 w-40 mb-4" />
      <SkeletonBlock className="h-9 w-2/3 max-w-md mb-8" />
      <div className="space-y-3 max-w-xl">
        {Array.from({ length: lines }).map((_, i) => (
          <SkeletonBlock key={i} className="h-4 w-full" />
        ))}
      </div>
    </div>
  );
}
