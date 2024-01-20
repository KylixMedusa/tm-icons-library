import * as React from "react";
const SvgTvOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="tv-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect
      width={448}
      height={272}
      x={32}
      y={96}
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      rx={32.14}
      ry={32.14}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={32}
      d="M128 416h256"
    />
  </svg>
);
export default SvgTvOutline;
