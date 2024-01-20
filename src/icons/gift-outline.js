import * as React from "react";
const SvgGiftOutline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="gift-outline_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={32}
      d="M256 104v56h56a56 56 0 1 0-56-56zm0 0v56h-56a56 56 0 1 1 56-56z"
    />
    <rect
      width={384}
      height={112}
      x={64}
      y={160}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      rx={32}
      ry={32}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M416 272v144a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V272m160-112v304"
    />
  </svg>
);
export default SvgGiftOutline;
