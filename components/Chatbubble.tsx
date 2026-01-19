import * as React from "react";
import { cn } from "@/lib/utils";

export type Side = "left" | "right";

export interface ChatbubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: Side;
}

export function Chatbubble({
  side = "left",
  className,
  children,
  ...props
}: ChatbubbleProps) {
  const isLeft = side === "left";

  return (
    <div className={cn("flex w-full", isLeft ? "justify-start" : "justify-end")}>
      <div className="relative max-w-[75%]" {...props}>
        <div
          className={cn(
            "relative bg-[#00aabb] text-white p-4 rounded-md",
            "after:content-[''] after:absolute after:w-0 after:h-0",
            isLeft
              ? "after:left-4 after:bottom-0 after:border-[20px] after:border-transparent after:border-t-[#00aabb] after:border-b-0 after:border-l-0 after:-mb-[20px]"
              : "after:right-4 after:bottom-0 after:border-[20px] after:border-transparent after:border-t-[#00aabb] after:border-b-0 after:border-r-0 after:-mb-[20px]",
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
