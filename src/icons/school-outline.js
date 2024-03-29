import * as React from "react";
const SvgSchoolOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="school-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M32 192 256 64l224 128-224 128z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M112 240v128l144 80 144-80V240m80 128V192M256 320v128"
    />
  </svg>
);
export default SvgSchoolOutline;
