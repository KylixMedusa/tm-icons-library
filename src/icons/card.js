import * as React from "react";
const SvgCard = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="card_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M32 376a56 56 0 0 0 56 56h336a56 56 0 0 0 56-56V222H32zm66-76a30 30 0 0 1 30-30h48a30 30 0 0 1 30 30v20a30 30 0 0 1-30 30h-48a30 30 0 0 1-30-30zM424 80H88a56 56 0 0 0-56 56v26h448v-26a56 56 0 0 0-56-56" />
  </svg>
);
export default SvgCard;
