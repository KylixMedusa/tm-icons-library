import * as React from "react";
const SvgStopwatchOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="stopwatch-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M256 232v-80"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={48}
      d="M256 88V72m-124 60-12-12"
    />
    <circle
      cx={256}
      cy={272}
      r={32}
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={32}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={32}
      d="M256 96a176 176 0 1 0 176 176A176 176 0 0 0 256 96z"
    />
  </svg>
);
export default SvgStopwatchOutline;
