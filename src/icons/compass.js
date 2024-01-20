import * as React from "react";
const SvgCompass = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="compass_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <circle cx={256} cy={256} r={24} />
    <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48m105.07 113.33-46.88 117.2a64 64 0 0 1-35.66 35.66l-117.2 46.88a8 8 0 0 1-10.4-10.4l46.88-117.2a64 64 0 0 1 35.66-35.66l117.2-46.88a8 8 0 0 1 10.4 10.4" />
  </svg>
);
export default SvgCompass;
