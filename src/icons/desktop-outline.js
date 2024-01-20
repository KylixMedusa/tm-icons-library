import * as React from "react";
const SvgDesktopOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="desktop-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect
      width={448}
      height={320}
      x={32}
      y={64}
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      rx={32}
      ry={32}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="m304 448-8-64h-80l-8 64z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M368 448H144"
    />
    <path d="M32 304v48a32.09 32.09 0 0 0 32 32h384a32.09 32.09 0 0 0 32-32v-48zm224 64a16 16 0 1 1 16-16 16 16 0 0 1-16 16" />
  </svg>
);
export default SvgDesktopOutline;
