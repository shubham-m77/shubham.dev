"use client";
import { ReactLenis, useLenis } from 'lenis/react';
export function LenisScroll({ children }: { children: any }) {
    const lenis = useLenis((lenis) => {

    })
    return (
        <ReactLenis root>
            {children}
        </ReactLenis>
    );
}
