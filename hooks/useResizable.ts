'use client'

import React, { useRef, useCallback, useEffect, useState } from "react"

export function useResizable(initialLeftWidth: number = 50) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [leftWidth,setLeftWidth] = useState(initialLeftWidth);

    const handleMouseDown = useCallback((e: React.MouseEvent)=>{
        e.preventDefault();
        const startX = e.clientX;
        const startWidth = leftWidth;

        const handleMouseMove = (e: MouseEvent) => {
            if(!containerRef.current) return;
            const newWidth = startWidth + ((e.clientX - startX)*100) / containerRef.current.offsetWidth;
            setLeftWidth(Math.max(20,Math.min(80,newWidth))); // limit
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove',handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove',handleMouseMove);
        document.addEventListener('mouseup',handleMouseUp);
    },[leftWidth])

    return { containerRef, leftWidth, handleMouseDown}
}