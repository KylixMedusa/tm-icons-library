import * as React from "react";
const SvgRepeat = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="repeat_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="m320 120 48 48-48 48"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M352 168H144a80.24 80.24 0 0 0-80 80v16m128 128-48-48 48-48"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M160 344h208a80.24 80.24 0 0 0 80-80v-16"
    />
  </svg>
);
export default SvgRepeat;
