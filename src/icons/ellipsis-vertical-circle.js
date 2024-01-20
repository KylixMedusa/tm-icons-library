import * as React from "react";
const SvgEllipsisVerticalCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ellipsis-vertical-circle_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <circle cx={256} cy={256} r={26} />
    <circle cx={256} cy={346} r={26} />
    <circle cx={256} cy={166} r={26} />
    <path
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={32}
      d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
    />
  </svg>
);
export default SvgEllipsisVerticalCircle;
