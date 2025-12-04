import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground border-border",
        reported: "border-transparent bg-status-reported text-white",
        "in-progress": "border-transparent bg-status-in-progress text-black",
        resolved: "border-transparent bg-status-resolved text-white",
        pothole: "border-transparent bg-category-pothole text-white",
        garbage: "border-transparent bg-category-garbage text-white",
        streetlight: "border-transparent bg-category-streetlight text-black",
        water: "border-transparent bg-category-water text-white",
        other: "border-transparent bg-category-other text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
