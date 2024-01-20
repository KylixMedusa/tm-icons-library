import * as React from "react";
const SvgBarcodeSharp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="barcode-sharp_svg__ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={32}
      d="m400 400.33 48-.33V112l-48 .33M112 112l-48 .33v288l48-.33m272-208v128m-64-160v192m-64-176v160m-64-176v192m-64-160v128"
    />
  </svg>
);
export default SvgBarcodeSharp;
