import * as React from "react";
const SvgMedkitOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="medkit-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect
      width={448}
      height={352}
      x={32}
      y={112}
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      rx={48}
      ry={48}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M144 112V80a32 32 0 0 1 32-32h160a32 32 0 0 1 32 32v32m-112 96v160m80-80H176"
    />
  </svg>
);
export default SvgMedkitOutline;
