"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full z-0 overflow-hidden",
        className
      )}
      {...rest}
    >
      {/* Lightweight CSS-based grid background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(51 185 245 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(51 185 245 / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'skewY(-3deg)',
        }}
      />
      
      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgb(0 168 232 / 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgb(125 211 252 / 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgb(147 197 253 / 0.15) 0%, transparent 50%)
          `,
          animation: 'pulse 4s ease-in-out infinite',
        }}
      />
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
