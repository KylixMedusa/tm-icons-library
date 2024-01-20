import * as React from "react";
const SvgLocate = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="locate_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={48}
      d="M256 96V56m0 400v-40m0-304a144 144 0 1 0 144 144 144 144 0 0 0-144-144m160 144h40m-400 0h40"
    />
  </svg>
);
export default SvgLocate;
