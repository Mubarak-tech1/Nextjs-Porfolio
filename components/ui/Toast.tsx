import { ReactNode } from "react";

export type ToastType = "success" | "error";

interface ToastProps {
  type: ToastType;
  children: ReactNode;
}
export default function Toast({ type, children }: ToastProps) {
  return (
    <div
      className={`rounded-lg border px-4 py-3 text-sm${
          type === "success"
            ? "border-green-200 bg-green-50 text-green-700"
            : "border-red-200 bg-red-50 text-red-700"
        }
      `}>
      {children}
    </div>
  );
}