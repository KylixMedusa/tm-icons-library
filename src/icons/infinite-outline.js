import * as React from "react";
const SvgInfiniteOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="infinite-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={32}
      d="M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c37.51 0 71-22.41 94-48m32-48s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-37.51 0-71 22.41-94 48"
    />
  </svg>
);
export default SvgInfiniteOutline;
