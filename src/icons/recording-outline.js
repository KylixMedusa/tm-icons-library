import * as React from "react";
const SvgRecordingOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="recording-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <circle
      cx={128}
      cy={256}
      r={96}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <circle
      cx={384}
      cy={256}
      r={96}
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
      d="M128 352h256"
    />
  </svg>
);
export default SvgRecordingOutline;
