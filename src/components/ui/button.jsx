import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-[13px] font-medium tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-hover shadow-soft",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-soft",
        outline:
          "border border-border-strong bg-transparent text-foreground hover:bg-secondary hover:border-primary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-muted",
        ghost: "text-foreground hover:bg-secondary hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        /* Premium variants */
        premium:
          "bg-primary text-primary-foreground hover:bg-primary-hover shadow-soft relative overflow-hidden border-b-2 border-accent",
        gold:
          "bg-accent text-accent-foreground hover:bg-gold-deep hover:text-white shadow-soft font-semibold",
        navy:
          "bg-navy-deep text-white hover:bg-primary shadow-soft",
        "outline-light":
          "border border-white/25 bg-transparent text-white hover:bg-white/10 hover:border-accent",
        "outline-gold":
          "border border-accent text-accent bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-[12.5px]",
        lg: "h-12 px-8 text-[14px]",
        xl: "h-14 px-10 text-[14px]",
        icon: "h-10 w-10",
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
      {...props} />
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
