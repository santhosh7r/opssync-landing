import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg" | "xl";

const sizeMap: Record<Size, { box: string; svg: string; text: string }> = {
  sm: { box: "size-6 rounded-[26%]", svg: "size-3.5", text: "text-[14px]" },
  md: { box: "size-7 rounded-[26%]", svg: "size-4", text: "text-[15px]" },
  lg: { box: "size-10 rounded-[26%]", svg: "size-[22px]", text: "text-[22px]" },
  xl: { box: "size-14 rounded-[26%]", svg: "size-8", text: "text-[28px]" },
};

export function Logo({
  className,
  size = "md",
  showWordmark = true,
}: {
  className?: string;
  size?: Size;
  showWordmark?: boolean;
}) {
  const s = sizeMap[size];
  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden
        className={cn("grid place-items-center bg-foreground", s.box)}
      >
        <svg
          viewBox="0 0 80 80"
          fill="none"
          className={cn("text-background", s.svg)}
          aria-hidden
        >
          <path
            d="M22 30a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v0a8 8 0 0 1-8 8H30a8 8 0 0 0-8 8v0a8 8 0 0 0 8 8h20a8 8 0 0 0 8-8"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {showWordmark && (
        <span
          className={cn(
            "font-semibold tracking-[-0.02em] text-foreground",
            s.text
          )}
        >
          OpsSync
        </span>
      )}
    </div>
  );
}
