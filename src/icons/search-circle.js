import * as React from "react";
const SvgSearchCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="search-circle_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192 192-86.13 192-192S361.87 64 256 64m91.31 283.31a16 16 0 0 1-22.62 0l-42.84-42.83a88.08 88.08 0 1 1 22.63-22.63l42.83 42.84a16 16 0 0 1 0 22.62" />
    <circle cx={232} cy={232} r={56} />
  </svg>
);
export default SvgSearchCircle;
