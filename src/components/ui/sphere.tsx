import React from 'react';

interface HeroSphereProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function HeroSphere({ className = '', ...props }: HeroSphereProps) {
  return (
    <svg
      width="1149"
      height="442"
      viewBox="0 0 1149 442"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="574.5" cy="574.5" r="414.5" stroke="#CBFC01" strokeWidth="320" />
    </svg>
  );
}