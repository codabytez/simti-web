import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Narrower measure for long-form copy. */
  width?: "default" | "prose";
}

const widths = {
  default: "max-w-7xl",
  prose: "max-w-3xl",
} as const;

export function Container({ children, className, width = "default", ...props }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-gutter", widths[width], className)} {...props}>
      {children}
    </div>
  );
}
