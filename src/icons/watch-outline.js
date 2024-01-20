import * as React from "react";
const SvgWatchOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="watch-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect
      width={288}
      height={288}
      x={112}
      y={112}
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      rx={64}
      ry={64}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M176 112V40a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v72m0 288v72a8 8 0 0 1-8 8H184a8 8 0 0 1-8-8v-72"
    />
  </svg>
);
export default SvgWatchOutline;
