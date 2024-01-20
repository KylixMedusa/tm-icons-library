import * as React from "react";
const SvgRefresh = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="refresh_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={32}
      d="M320 146s24.36-12-64-12a160 160 0 1 0 160 160"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="m256 58 80 80-80 80"
    />
  </svg>
);
export default SvgRefresh;
