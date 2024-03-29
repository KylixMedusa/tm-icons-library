import * as React from "react";
const SvgBanOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ban-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <circle
      cx={256}
      cy={256}
      r={208}
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
      d="m108.92 108.92 294.16 294.16"
    />
  </svg>
);
export default SvgBanOutline;
