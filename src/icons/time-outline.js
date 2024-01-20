import * as React from "react";
const SvgTimeOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="time-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={32}
      d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M256 128v144h96"
    />
  </svg>
);
export default SvgTimeOutline;
