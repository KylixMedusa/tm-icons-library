import * as React from "react";
const SvgPrintOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="print-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M384 368h24a40.12 40.12 0 0 0 40-40V168a40.12 40.12 0 0 0-40-40H104a40.12 40.12 0 0 0-40 40v160a40.12 40.12 0 0 0 40 40h24"
    />
    <rect
      width={256}
      height={208}
      x={128}
      y={240}
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      rx={24.32}
      ry={24.32}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M384 128v-24a40.12 40.12 0 0 0-40-40H168a40.12 40.12 0 0 0-40 40v24"
    />
    <circle cx={392} cy={184} r={24} />
  </svg>
);
export default SvgPrintOutline;
