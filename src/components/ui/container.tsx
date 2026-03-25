import { cn } from "@/lib/utils";

interface ContainerProps {
  size?: "narrow" | "default" | "wide" | "full";
  children: React.ReactNode;
  className?: string;
}

const sizeMap = {
  narrow: "max-w-4xl",
  default: "max-w-7xl",
  wide: "max-w-[88rem]",
  full: "max-w-none",
} as const;

export function Container({
  size = "default",
  children,
  className,
}: ContainerProps) {
  return (
    <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", sizeMap[size], className)}>
      {children}
    </div>
  );
}
