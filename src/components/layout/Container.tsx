import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className }, ref) => (
    <div ref={ref} className={cn("mx-auto w-full max-w-7xl px-6 lg:px-16", className)}>
      {children}
    </div>
  )
);

Container.displayName = "Container";
