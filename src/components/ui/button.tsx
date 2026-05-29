"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-[13.5px] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-foreground text-background hover:bg-foreground/90 active:scale-[0.98]",
        secondary:
          "bg-background text-foreground border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 active:scale-[0.98]",
        ghost:
          "text-zinc-600 hover:text-foreground hover:bg-zinc-100/70",
        link: "text-foreground underline-offset-[5px] hover:underline",
      },
      size: {
        sm: "h-8 px-3.5 gap-1.5",
        md: "h-9 px-4 gap-1.5",
        lg: "h-11 px-5 gap-2",
        xl: "h-12 px-6 gap-2 text-[14px]",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
