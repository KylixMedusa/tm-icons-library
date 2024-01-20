import * as React from "react";
const SvgBasketballOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="basketball-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <circle
      cx={256}
      cy={256}
      r={192}
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
      d="M432.94 255.05a192 192 0 0 1-176.31-180.7M255 433.61A192 192 0 0 0 74.29 256.69m45.95-136.45 271.52 271.52m-271.52 0 271.52-271.52"
    />
  </svg>
);
export default SvgBasketballOutline;
