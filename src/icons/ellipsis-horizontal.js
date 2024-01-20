import * as React from "react";
const SvgEllipsisHorizontal = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ellipsis-horizontal_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <circle cx={256} cy={256} r={48} />
    <circle cx={416} cy={256} r={48} />
    <circle cx={96} cy={256} r={48} />
  </svg>
);
export default SvgEllipsisHorizontal;
