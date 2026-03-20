import type { BearEyeBrowProps } from "./types.ts";

export const BearEyebrow = ({ size, top, left, color = "#374151" }: BearEyeBrowProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 43 22"
    style={{
      width: size,
      top,
      left,
      position: 'absolute',
    }}
  >
    <path
      fill={color}
      d="M 40.5,5
         C 36,4.5  30,5    28,5.5
         C 22,6    14,7    9,6.5
         C 7,6.5   6,7     5.5,8
         C 6,8.5   8,8.5   16,8.5
         C 17,8.5  17,9    16.5,11
         C 16,12   14,12.5 8,12.5
         C 6,12.5  5,13.5  4.5,15
         C 6,15    10,14.5 16,13.5
         C 18,13.5 20,13.5 28.5,13
         C 33,12.5 38,12.5 39,11.5
         C 40,11   40,10   30,11.5
         C 29,11.5 28.5,9  28.5,9
         C 29,7    31,6.5  40.5,5 Z"
    />
  </svg>
);