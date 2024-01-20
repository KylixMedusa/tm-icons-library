import * as React from "react";
const SvgStopwatch = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="stopwatch_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <circle cx={256} cy={272} r={16} />
    <path d="M280 81.5V72a24 24 0 0 0-48 0v9.5a191 191 0 0 0-84.43 32.13L137 103a24 24 0 0 0-34 34l8.6 8.6A191.17 191.17 0 0 0 64 272c0 105.87 86.13 192 192 192s192-86.13 192-192c0-97.74-73.42-178.66-168-190.5M256 320a48 48 0 0 1-16-93.25V152a16 16 0 0 1 32 0v74.75A48 48 0 0 1 256 320" />
  </svg>
);
export default SvgStopwatch;
