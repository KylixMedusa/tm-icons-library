import * as React from "react";
const SvgHelpBuoyOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="help-buoy-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <circle
      cx={256}
      cy={256}
      r={208}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <circle
      cx={256}
      cy={256}
      r={80}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="m208 54 8 132m80 0 8-132m-96 404 8-132m80 0 8 132m154-250-132 8m0 80 132 8M54 208l132 8m0 80-132 8"
    />
  </svg>
);
export default SvgHelpBuoyOutline;
