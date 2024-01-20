import * as React from "react";
const SvgStarOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="star-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
    />
  </svg>
);
export default SvgStarOutline;
