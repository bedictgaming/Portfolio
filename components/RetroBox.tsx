import React from 'react';

export default function RetroBox({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`p-4 border-4 border-gray-900 border-b-8 border-r-8 ${className}`}>
      {children}
    </div>
  );
}