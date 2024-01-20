import * as React from "react";
const SvgTrashBin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="trash-bin_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect width={448} height={80} x={32} y={48} rx={32} ry={32} />
    <path d="M74.45 160a8 8 0 0 0-8 8.83l26.31 252.56a1.5 1.5 0 0 0 0 .22A48 48 0 0 0 140.45 464h231.09a48 48 0 0 0 47.67-42.39v-.21l26.27-252.57a8 8 0 0 0-8-8.83zm248.86 180.69a16 16 0 1 1-22.63 22.62L256 318.63l-44.69 44.68a16 16 0 0 1-22.63-22.62L233.37 296l-44.69-44.69a16 16 0 0 1 22.63-22.62L256 273.37l44.68-44.68a16 16 0 0 1 22.63 22.62L278.62 296z" />
  </svg>
);
export default SvgTrashBin;