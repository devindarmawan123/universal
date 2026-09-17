import clsx from "clsx";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  tone = "dark",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <div
      className={clsx(
        "max-w-2xl",
        isCenter && "mx-auto text-center"
      )}
    >
      {kicker && (
        <p
          className={clsx(
            "font-body text-sm font-medium mb-3",
            isLight ? "text-paper/70" : "text-seal"
          )}
        >
          {kicker}
        </p>
      )}
      <h2
        className={clsx(
          "font-display text-3xl md:text-[2.5rem] leading-[1.15]",
          isLight ? "text-paper" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-4 text-base leading-relaxed",
            isLight ? "text-paper/80" : "text-charcoal/80"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
