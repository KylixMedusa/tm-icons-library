import * as React from "react";
const SvgBarChart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="bar-chart_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M480 496H48a32 32 0 0 1-32-32V32a16 16 0 0 1 32 0v432h432a16 16 0 0 1 0 32" />
    <path d="M156 432h-40a36 36 0 0 1-36-36V244a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v152a36 36 0 0 1-36 36m144 0h-40a36 36 0 0 1-36-36V196a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v200a36 36 0 0 1-36 36m143.64 0h-40a36 36 0 0 1-36-36V132a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v264a36 36 0 0 1-36 36" />
  </svg>
);
export default SvgBarChart;
