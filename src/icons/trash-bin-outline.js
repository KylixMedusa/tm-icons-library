import * as React from "react";
const SvgTrashBinOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="trash-bin-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="m432 144-28.67 275.74A32 32 0 0 1 371.55 448H140.46a32 32 0 0 1-31.78-28.26L80 144"
    />
    <rect
      width={448}
      height={80}
      x={32}
      y={64}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      rx={16}
      ry={16}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M312 240 200 352m112 0L200 240"
    />
  </svg>
);
export default SvgTrashBinOutline;
