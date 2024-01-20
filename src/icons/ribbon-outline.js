import * as React from "react";
const SvgRibbonOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ribbon-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <circle
      cx={256}
      cy={160}
      r={128}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M143.65 227.82 48 400l86.86-.42a16 16 0 0 1 13.82 7.8L192 480l88.33-194.32"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M366.54 224 464 400l-86.86-.42a16 16 0 0 0-13.82 7.8L320 480l-64-140.8"
    />
    <circle
      cx={256}
      cy={160}
      r={64}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
  </svg>
);
export default SvgRibbonOutline;
