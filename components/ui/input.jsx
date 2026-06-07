import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-[48px] w-full rounded border border-zinc-800 focus:border-accent font-light bg-surface px-4 py-5 text-base text-zinc-50 placeholder:text-zinc-600 outline-none transition-colors",
        className
      )}
      ref={ref}
      {...props}
    />
  );
})
Input.displayName = "Input"

export { Input }
