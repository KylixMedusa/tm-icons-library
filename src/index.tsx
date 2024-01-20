import React from 'react';

import * as Icons from './icons';
import { IconName } from './IconTypes';
import { toPascalCase } from './toPascalCase';

interface Props {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const TMIcon: React.FC<Props> = ({ name, color, size, ...props }) => {
  const pascalCaseName = toPascalCase(name);
  const SVGIcon = Icons[pascalCaseName as keyof typeof Icons];
  if (!SVGIcon) {
    console.warn(`Icon not found: ${name}`);
    return null;
  }
  return (
    <SVGIcon
      className={`tm-icon tm-icon-${name}`}
      fill={color}
      color={color}
      width={size}
      height={size}
      {...props}
    />
  );
};

export default TMIcon;
