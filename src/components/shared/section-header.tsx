import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  heading: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  label,
  heading,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center")}>
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F97316]">
        {label}
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 font-[family-name:var(--font-plus-jakarta-sans)]">
        {heading}
      </h2>
      <div
        className={cn(
          "w-16 h-1 bg-[#F97316] rounded-full mt-4",
          centered && "mx-auto"
        )}
      />
      {description && (
        <p
          className={cn(
            "text-[#9CA3AF] mt-4 max-w-2xl text-base sm:text-lg leading-relaxed",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
