import * as React from "react";
const SvgMedalOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="medal-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <circle
      cx={256}
      cy={352}
      r={112}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <circle
      cx={256}
      cy={352}
      r={48}
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
      d="M147 323 41.84 159.32a32 32 0 0 1-1.7-31.61l31-62A32 32 0 0 1 99.78 48h312.44a32 32 0 0 1 28.62 17.69l31 62a32 32 0 0 1-1.7 31.61L365 323m6-179H37m391.74-91.4L305 250M140.55 144 207 250"
    />
  </svg>
);
export default SvgMedalOutline;
