import { useState, type ReactNode } from "react";

export function ReadMore({ label, children }: { label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const collapsedLabel = label || "Read More";
  const expandedLabel = collapsedLabel.replace(/^Read More/i, "Read Less");

  return (
    <>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="mt-4 inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:gap-2.5 transition-all"
      >
        {open ? expandedLabel : collapsedLabel}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-chevron-down w-4 h-4 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </>
  );
}
