import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded border border-zinc-800 bg-surface px-4 py-4 text-base text-zinc-50 placeholder:text-zinc-600 focus:border-accent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
        className
      )}
      ref={ref}
      {...props}
    />
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
