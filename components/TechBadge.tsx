import { SVGProps } from "react";

interface TechBadgeProps {
  svg: string;
  hex: string;
  label: string;
}

export default function TechBadge({ svg, hex, label }: TechBadgeProps) {
  return (
    <span
      className="
        inline-flex items-center gap-2 px-3 py-1
        rounded-md border border-dashed inset-shadow-sm text-sm font-medium
        bg-gray-100 dark:bg-[#2F2F2F]
        text-gray-800 dark:text-gray-200
        border-gray-300 dark:border-gray-700
      "
    >
      <svg
        viewBox="0 0 24 24"
        fill={`#${hex}`}
        dangerouslySetInnerHTML={{ __html: svg }}
        className="h-4 w-4"
      />
      {label}
    </span>
  );
}
