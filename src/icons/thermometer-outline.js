import * as React from "react";
const SvgThermometerOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="thermometer-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={32}
      d="M307.72 302.27a8 8 0 0 1-3.72-6.75V80a48 48 0 0 0-48-48h0a48 48 0 0 0-48 48v215.52a8 8 0 0 1-3.71 6.74 97.51 97.51 0 0 0-44.19 86.07A96 96 0 0 0 352 384a97.49 97.49 0 0 0-44.28-81.73zM256 112v272"
    />
    <circle cx={256} cy={384} r={48} />
  </svg>
);
export default SvgThermometerOutline;
