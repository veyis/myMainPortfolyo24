import React from "react";
import { twMerge } from "tailwind-merge";

interface HeroOrbitProps {
  size: number;
  rotation: number;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  spinDuration?: string;
  orbitDuration?: string;
  children: React.ReactNode;
}

export const HeroOrbit: React.FC<HeroOrbitProps> = ({ children, size, rotation,shouldSpin, spinDuration,orbitDuration, shouldOrbit }) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 ">
  <div className={twMerge(shouldOrbit && "animate-spin")} 
     style={{
       animationDuration: orbitDuration,
     }}>
      
      <div
        className="flex items-start justify-start "
        style={{
          transform: `rotate(${rotation}deg)`,
          height: `${size}px`,
          width: `${size}px`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className={twMerge(shouldSpin === true && "animate-spin")} style={{
          animationDuration: spinDuration
        }} >
        <div
          className="inline-flex"
          style={{
            transform: `rotate(${-rotation}deg)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          {children}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

