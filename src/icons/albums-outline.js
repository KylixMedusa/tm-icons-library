import * as React from "react";
const SvgAlbumsOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="albums-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect
      width={384}
      height={256}
      x={64}
      y={176}
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      rx={28.87}
      ry={28.87}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={32}
      d="M144 80h224m-256 48h288"
    />
  </svg>
);
export default SvgAlbumsOutline;
