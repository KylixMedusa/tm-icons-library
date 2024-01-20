import React from 'react';

import * as Icons from './icons';
import { IconName } from './IconTypes';
import { toPascalCase } from './toPascalCase';

interface Props {
  name: IconName;
  size?: string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const TMIcon: React.FC<Props> = ({ name, ...props }) => {
  const pascalCaseName = toPascalCase(name);
  const SVGIcon = Icons[pascalCaseName as keyof typeof Icons];
  if (!SVGIcon) {
    console.warn(`Icon not found: ${name}`);
    return null;
  }
  return <SVGIcon {...props} />;
};

export default TMIcon;
