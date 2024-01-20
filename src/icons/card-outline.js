import * as React from "react";
const SvgCardOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="card-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect
      width={416}
      height={320}
      x={48}
      y={96}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      rx={56}
      ry={56}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={60}
      d="M48 192h416M128 300h48v20h-48z"
    />
  </svg>
);
export default SvgCardOutline;
