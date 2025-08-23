"use client";
import React from "react";

interface HexBoxProps {
  children?: React.ReactNode;
  className?: string;
}

const HexBox: React.FC<HexBoxProps> = ({ children, className }) => {
  return (
    <div
      className={`relative w-32 h-32 bg-[#B39793] text-[#2F2A28] 
        flex items-center justify-center 
        clip-hex hover:bg-[#8A6E6C] transition-all cursor-pointer shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export default HexBox;
