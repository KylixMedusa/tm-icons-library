import * as React from "react";
const SvgTerminalOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="terminal-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect
      width={448}
      height={416}
      x={32}
      y={48}
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      rx={48}
      ry={48}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="m96 112 80 64-80 64m96 0h64"
    />
  </svg>
);
export default SvgTerminalOutline;