import * as React from "react";
const SvgToggleOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="toggle-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <circle
      cx={368}
      cy={256}
      r={128}
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <rect
      width={480}
      height={256}
      x={16}
      y={128}
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      rx={128}
      ry={128}
    />
  </svg>
);
export default SvgToggleOutline;
