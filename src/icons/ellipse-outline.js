import * as React from "react";
const SvgEllipseOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ellipse-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <circle
      cx={256}
      cy={256}
      r={192}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
  </svg>
);
export default SvgEllipseOutline;
