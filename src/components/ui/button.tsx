import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        default: "h-10 px-4 py-2",
        none: "w-auto h-auto px-0 py-0",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90 disabled:hover:bg-primary",
            destructive:
                "bg-destructive text-destructive-foreground hover:bg-destructive/90 disabled:hover:bg-destructive",
            outline:
                "border border-input bg-background hover:bg-accent hover:text-accent-foreground disabled:hover:bg-background",
            secondary:
                "bg-secondary text-secondary-foreground hover:bg-secondary/80 disabled:hover:bg-secondary",
            ghost: "hover:bg-accent hover:text-accent-foreground disabled:hover:bg-transparent",
            link: "text-primary underline-offset-4 hover:underline p-0 m-0 h-auto disabled:hover:no-underline",
        },
        rounded: {
            default: "",
            full: "rounded-full",
        },
        noHover: {
            default: "",
            true: "hover:bg-transparent hover:text-primary-foreground/80 disabled:hover:bg-transparent",
        }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded,  asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
