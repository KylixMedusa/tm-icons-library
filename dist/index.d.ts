import React from 'react';
import { IconName } from './IconTypes';
interface Props {
    name: IconName;
    size?: string;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}
declare const TMIcon: React.FC<Props>;
export default TMIcon;
