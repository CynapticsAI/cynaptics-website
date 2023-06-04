import React from "react";

export default function PongLayout({ children }) {
    return (
        <div className="!bg-black h-full w-full flex items-center justify-center absolute top-0 !z-[-1]">
            {children}
        </div>
    );
}
