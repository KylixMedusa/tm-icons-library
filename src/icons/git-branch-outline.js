import * as React from "react";
const SvgGitBranchOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="git-branch-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <circle
      cx={160}
      cy={96}
      r={48}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <circle
      cx={160}
      cy={416}
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
      d="M160 368V144"
    />
    <circle
      cx={352}
      cy={160}
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
      d="M352 208c0 128-192 48-192 160"
    />
  </svg>
);
export default SvgGitBranchOutline;
