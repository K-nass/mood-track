import React from "react";

export default function Overlay({ children }) {
  return (
    <div className="fixed inset-0 z-2 flex items-center justify-center">
      <div className="absolute inset-0 bg-[#616183]/80"></div>
      <div className="z-3">{children}</div>
    </div>
  );
}
