import * as React from "react";
const SvgInformation = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="information_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={40}
      d="M196 220h64v172"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={40}
      d="M187 396h138"
    />
    <path d="M256 160a32 32 0 1 1 32-32 32 32 0 0 1-32 32" />
  </svg>
);
export default SvgInformation;
