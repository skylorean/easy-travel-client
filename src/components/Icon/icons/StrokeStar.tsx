import { FC } from 'react';
import type { SingleIconProps } from '../Icon';

const StrokeStar: FC<SingleIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 4L30.18 16.52L44 18.54L34 28.28L36.36 42.04L24 35.54L11.64 42.04L14 28.28L4 18.54L17.82 16.52L24 4Z"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StrokeStar;
