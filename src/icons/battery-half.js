import * as React from "react";
const SvgBatteryHalf = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="battery-half_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect
      width={400}
      height={224}
      x={32}
      y={144}
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeMiterlimit={10}
      strokeWidth={32}
      rx={45.7}
      ry={45.7}
    />
    <rect
      width={154.31}
      height={114.13}
      x={85.69}
      y={198.93}
      stroke="currentColor"
      strokeLinecap="square"
      strokeMiterlimit={10}
      strokeWidth={32}
      rx={4}
      ry={4}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={32}
      d="M480 218.67v74.66"
    />
  </svg>
);
export default SvgBatteryHalf;
