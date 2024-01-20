import * as React from "react";
const SvgImage = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="image_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M416 64H96a64.07 64.07 0 0 0-64 64v256a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V128a64.07 64.07 0 0 0-64-64m-80 64a48 48 0 1 1-48 48 48.05 48.05 0 0 1 48-48M96 416a32 32 0 0 1-32-32v-67.63l94.84-84.3a48.06 48.06 0 0 1 65.8 1.9l64.95 64.81L172.37 416zm352-32a32 32 0 0 1-32 32H217.63l121.42-121.42a47.72 47.72 0 0 1 61.64-.16L448 333.84z" />
  </svg>
);
export default SvgImage;