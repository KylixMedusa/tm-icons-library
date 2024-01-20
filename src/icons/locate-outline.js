import * as React from "react";
const SvgLocateOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="locate-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={48}
      d="M256 96V56m0 400v-40"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={32}
      d="M256 112a144 144 0 1 0 144 144 144 144 0 0 0-144-144z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={48}
      d="M416 256h40m-400 0h40"
    />
  </svg>
);
export default SvgLocateOutline;
