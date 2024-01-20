declare module "tm-icons-library" {
  import React from "react";
  import { IconName } from "./IconTypes";

  interface IconProps {
    name: IconName;
    size?: string;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
  }

  export const Icon: React.FC<IconProps>;
}
