"use client";
import { ReactLenis } from 'lenis/react';

export function LenisScroll({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1, // lower = smoother, higher = snappier
                duration: 1.1, // duration in seconds for scroll animations
                touchMultiplier: 1.5, // enhances touch scroll feel
            }}
        >
            {children}
        </ReactLenis>
    );
}
