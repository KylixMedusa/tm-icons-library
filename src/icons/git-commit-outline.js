import * as React from "react";
const SvgGitCommitOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="git-commit-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <circle
      cx={256}
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
      d="M160 256H48m416 0H352"
    />
  </svg>
);
export default SvgGitCommitOutline;
