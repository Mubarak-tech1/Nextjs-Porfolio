"use client";

import { AnimatePresence, motion } from "motion/react";
import { ReactNode, useEffect } from "react";

export type ToastType = "success" | "error";

interface ToastProps {
  type: ToastType;
  children: ReactNode;
  onClose: () => void;
}

export default function Toast({ type, children, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      aria-live="polite"
      className={`
        rounded-lg
        border
        px-4
        py-3
        text-sm
        ${
          type === "success"
            ? "border-green-200 bg-green-50 text-green-700"
            : "border-red-200 bg-red-50 text-red-700"
        }
      `}>
      {children}
    </motion.div>
  );
}
