import * as React from "react";
const SvgEaselOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="easel-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect
      width={416}
      height={272}
      x={48}
      y={80}
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      rx={32}
      ry={32}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M256 416v-64m0-272V48m144 416-32-112M112 464l32-112"
    />
  </svg>
);
export default SvgEaselOutline;
