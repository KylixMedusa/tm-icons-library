import * as React from "react";
const SvgMenu = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="menu_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={48}
      d="M88 152h336M88 256h336M88 360h336"
    />
  </svg>
);
export default SvgMenu;
