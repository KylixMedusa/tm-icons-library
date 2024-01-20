import * as React from "react";
const SvgTodayOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="today-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect
      width={416}
      height={384}
      x={48}
      y={80}
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      rx={48}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M128 48v32m256-32v32"
    />
    <rect
      width={96}
      height={96}
      x={112}
      y={224}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      rx={13}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M464 160H48"
    />
  </svg>
);
export default SvgTodayOutline;
