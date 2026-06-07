import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded text-base font-medium ring-offset-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-accent-btn text-white hover:bg-accent-btn-hover",
        primary: "bg-zinc-800 text-zinc-50 hover:bg-zinc-700",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-accent bg-transparent text-accent hover:bg-accent/10",
        secondary:
          "bg-zinc-800 text-zinc-200 hover:bg-zinc-700",
        ghost: "hover:bg-zinc-800 hover:text-zinc-50",
        link: "text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[44px] px-6",
        md: "h-[48px] px-6",
        lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
