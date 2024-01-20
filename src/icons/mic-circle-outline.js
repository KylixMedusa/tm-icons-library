import * as React from "react";
const SvgMicCircleOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="mic-circle-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={32}
      d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M224 368h64m48-143.7v23.92c0 39.42-40.58 71.48-80 71.48h0c-39.42 0-80-32.06-80-71.48V224.3m80 95.7v48"
    />
    <rect width={96} height={160} x={208} y={128} rx={48} ry={48} />
  </svg>
);
export default SvgMicCircleOutline;
