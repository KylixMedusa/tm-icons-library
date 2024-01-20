import * as React from "react";
const SvgNuclearOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="nuclear-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <circle
      cx={256}
      cy={256}
      r={192}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={32}
    />
    <circle
      cx={256}
      cy={256}
      r={64}
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={32}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={32}
      d="M224 192 171 85m117 107 53-107m-13.45 170.81 119.41.13m-147.87 57.19 72.25 95.06M184.45 255.81l-119.41.13m147.87 57.19-72.25 95.06"
    />
  </svg>
);
export default SvgNuclearOutline;
