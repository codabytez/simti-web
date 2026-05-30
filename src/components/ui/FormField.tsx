import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function FormField({ label, error, required, children, className }: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label className="text-sm font-medium text-brown-dark">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-600 mt-0.5">{error}</p>}
    </div>
  );
}

export const inputBase =
  "w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-brown-dark placeholder:text-brown-light/60 outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/15";
