'use client'

import { SvgContainer } from './styled';

interface LogoProps {
  color?: 'dark' | 'light';
}

export function Logo({ color = 'dark' }: LogoProps) {
  return (
    <SvgContainer
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      fill="none"
      viewBox="0 0 46 46"
      className={color}
    >
      <path
        d="M23 0C10.35 0 0 10.35 0 23c0 3.45.704 6.656 2.084 9.416l.216-.36v.144l8.05-13.8H5.247C7.312 10.5 14.477 4.6 23 4.6c5.75 0 10.781 2.544 14.231 6.684l2.588-4.168C35.449 2.746 29.44 0 23 0zm-2.3 9.2v4.6h-2.3a2.28 2.28 0 00-.216 0 2.3 2.3 0 00-2.084 2.3V23a2.3 2.3 0 002.3 2.3h6.9v2.3h-9.2v4.6h4.6v4.6h4.6v-4.6h2.3a2.3 2.3 0 002.3-2.3V23a2.3 2.3 0 00-2.3-2.3h-6.9v-2.3h9.2v-4.6h-4.6V9.2h-4.6zm23.216 4.384l-.216.36V13.8l-8.05 13.8h5.103C38.688 35.5 31.523 41.4 23 41.4c-5.75 0-10.781-2.544-14.231-6.684L6.18 38.884C10.551 43.254 16.56 46 23 46c12.65 0 23-10.35 23-23 0-3.45-.704-6.656-2.084-9.416z"
      ></path>
    </SvgContainer>
  );
}
