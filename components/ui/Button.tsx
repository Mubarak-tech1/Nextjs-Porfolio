import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}>
      {loading ? (
        <>
          {/* Spinner comes later */}
          Loading...
        </>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
}

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;

  size?: ButtonSize;

  loading?: boolean;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;

  fullWidth?: boolean;

  children: ReactNode;
}


const variants = {
  primary: "bg-violet-600 text-white hover:bg-violet-500",

  secondary: "bg-white/10 text-white hover:bg-white/20",

  outline: "border border-white/20 bg-transparent hover:bg-white/10",

  ghost: "hover:bg-white/10",
};

const sizes = {
  sm: "h-9 px-4 text-sm",

  md: "h-11 px-6",

  lg: "h-14 px-8 text-lg",
};

const baseStyles = `
inline-flex
items-center
justify-center
gap-2
rounded-xl
font-medium
transition-all
duration-300
focus:outline-none
focus:ring-2
focus:ring-violet-500
disabled:pointer-events-none
disabled:opacity-50
`;

