import * as React from "react";
const SvgQrCode = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="qr-code_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect width={80} height={80} x={336} y={336} rx={8} ry={8} />
    <rect width={64} height={64} x={272} y={272} rx={8} ry={8} />
    <rect width={64} height={64} x={416} y={416} rx={8} ry={8} />
    <rect width={48} height={48} x={432} y={272} rx={8} ry={8} />
    <rect width={48} height={48} x={272} y={432} rx={8} ry={8} />
    <path d="M448 32H304a32 32 0 0 0-32 32v144a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m-32 136a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8zM208 32H64a32 32 0 0 0-32 32v144a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m-32 136a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8zm32 104H64a32 32 0 0 0-32 32v144a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V304a32 32 0 0 0-32-32m-32 136a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8z" />
  </svg>
);
export default SvgQrCode;
