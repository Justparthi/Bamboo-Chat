import * as React from "react"
import { cn } from "@/lib/utils"

// Extend `InputProps` with custom properties if needed in the future
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  // Custom properties can go here, e.g.:
  isValid?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isValid, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
          isValid ? "border-green-500" : "border-red-500" // Example: apply custom class based on `isValid`
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
