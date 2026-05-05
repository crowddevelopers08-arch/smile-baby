"use client";

import type { ReactNode } from "react";
import { X } from "lucide-react";
import SmileBabyForm from "../contact-froms";

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
};

export default function BookingModal({ isOpen, onClose, children }: BookingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 transition-all"
          aria-label="Close booking form"
        >
          <X size={20} />
        </button>
        <div className="max-h-[90vh] overflow-y-auto">{children ?? <SmileBabyForm />}</div>
      </div>
    </div>
  );
}
