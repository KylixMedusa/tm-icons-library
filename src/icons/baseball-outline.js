import * as React from "react";
const SvgBaseballOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="baseball-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="m294.25 108.6-60.57 17.59m83.45 29.92-51.5 36.4m90.26 2.36-36.4 51.5m83.91-28.62-17.59 60.57"
    />
    <circle
      cx={256}
      cy={256}
      r={192}
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
      d="M432.94 255.05a192 192 0 0 1-176.31-180.7M108.54 294.31l17.59-60.57m29.92 83.45 36.4-51.5m2.36 90.26 51.5-36.4m-28.62 83.91 60.57-17.59M255 433.61A192 192 0 0 0 74.29 256.69"
    />
  </svg>
);
export default SvgBaseballOutline;
