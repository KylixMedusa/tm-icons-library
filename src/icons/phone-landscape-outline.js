import * as React from "react";
const SvgPhoneLandscapeOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="phone-landscape-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect
      width={256}
      height={480}
      x={128}
      y={16}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      rx={48}
      ry={48}
      transform="rotate(-90 256 256)"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M16 336v-24a8 8 0 0 1 8-8h0a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16h0a8 8 0 0 1-8-8v-24"
    />
  </svg>
);
export default SvgPhoneLandscapeOutline;
