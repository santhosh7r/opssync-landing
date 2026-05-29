import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-[110px] w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 text-[14px] text-foreground transition-colors resize-none",
          "placeholder:text-zinc-400",
          "focus-visible:outline-none focus-visible:border-zinc-400 focus-visible:ring-2 focus-visible:ring-zinc-900/5",
          "hover:border-zinc-300",
          "aria-[invalid=true]:border-red-400 aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-100",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
