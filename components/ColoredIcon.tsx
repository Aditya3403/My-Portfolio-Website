import { SVGProps } from "react";

export default function ColoredIcon({
  svg,
  hex,
  ...props
}: {
  svg: string;
  hex: string;
} & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={`#${hex}`}
      dangerouslySetInnerHTML={{ __html: svg }}
      {...props}
    />
  );
}
