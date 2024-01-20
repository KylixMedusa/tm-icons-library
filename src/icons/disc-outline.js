import * as React from "react";
const SvgDiscOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="disc-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <circle
      cx={256}
      cy={256}
      r={208}
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={32}
    />
    <circle
      cx={256}
      cy={256}
      r={96}
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={32}
    />
    <circle cx={256} cy={256} r={32} />
  </svg>
);
export default SvgDiscOutline;
