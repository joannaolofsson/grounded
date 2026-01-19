// components/chat-container.tsx
import { cn } from "@/lib/utils";

export function ChatContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-4 p-4 overflow-y-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
