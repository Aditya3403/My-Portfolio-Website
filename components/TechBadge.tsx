import { SVGProps } from "react";

interface TechBadgeProps {
  svg: string;
  hex?: string;
  label: string;
}

export default function TechBadge({ svg, hex, label }: TechBadgeProps) {
  return (
    <span
      className="
        inline-flex items-center
        gap-1.5 sm:gap-2
        px-2 sm:px-3
        py-0.5 sm:py-1
        rounded-md
        border border-dashed
        inset-shadow-sm
        text-xs sm:text-sm
        font-medium
        bg-gray-100 dark:bg-[#2F2F2F]
        text-gray-800 dark:text-gray-200
        border-gray-300 dark:border-gray-600
        whitespace-nowrap
      "
    >
      <svg
        viewBox="0 0 24 24"
        fill={hex ? `#${hex}` : "currentColor"}
        dangerouslySetInnerHTML={{ __html: svg }}
        className="h-3.5 w-3.5 sm:h-4 sm:w-4"
      />
      {label}
    </span>
  );
}
