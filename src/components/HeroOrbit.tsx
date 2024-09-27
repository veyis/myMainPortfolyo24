import React from "react";

interface HeroOrbitProps {
  size: number;
  rotation: number;
  children: React.ReactNode;
}

export const HeroOrbit: React.FC<HeroOrbitProps> = ({ children, size, rotation }) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="flex items-start justify-start"
        style={{
          transform: `rotate(${rotation}deg)`,
          height: `${size}px`,
          width: `${size}px`,
          transition: "transform 0.3s ease-out",
        }}
      >
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
  );
};

