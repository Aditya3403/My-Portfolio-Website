import ColoredIcon from "./ColoredIcon";

export default function TooltipIcon({
  title,
  svg,
  hex,
  className,
}: {
  title: string;
  svg: string;
  hex: string;
  className?: string;
}) {
  return (
    <span className="relative group inline-block mx-1">
      <ColoredIcon svg={svg} hex={hex} className={className} />

      {/* Tooltip */}
      <span
        className="
          absolute -top-7 left-1/2 -translate-x-1/2
          px-2 py-1 rounded text-xs font-medium whitespace-nowrap
          bg-black text-white opacity-0 pointer-events-none
          group-hover:opacity-100 transition-opacity duration-200
          dark:bg-gray-200 dark:text-black
        "
      >
        {title}

        {/* Arrow */}
        <span
          className="
            absolute left-1/2 top-full -translate-x-1/2
            w-0 h-0 border-l-6 border-r-6 border-t-6
            border-l-transparent border-r-transparent border-t-black
            dark:border-t-gray-200
          "
        />
      </span>
    </span>
  );
}
