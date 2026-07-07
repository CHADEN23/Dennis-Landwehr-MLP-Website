import Link from "next/link";
import { getBookingUrl, type BookingSource } from "@/lib/booking";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type BookingLinkProps = {
  children: React.ReactNode;
  source?: BookingSource;
  variant?: Variant;
  size?: Size;
  className?: string;
  fullWidth?: boolean;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2",
  secondary:
    "bg-secondary text-primary border border-primary hover:bg-primary hover:text-white focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2",
  ghost:
    "bg-transparent text-primary underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-focus",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function BookingLink({
  children,
  source,
  variant = "primary",
  size = "md",
  className = "",
  fullWidth = false,
}: BookingLinkProps) {
  const url = getBookingUrl(source);
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 outline-none min-h-[44px] min-w-[44px]";
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <Link
      href={url}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      aria-label={typeof children === "string" ? undefined : "Termin vereinbaren"}
    >
      {children}
    </Link>
  );
}
