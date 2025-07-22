import { ReactLenis } from 'lenis/react';

export function LenisScroll({ children }: { children: React.ReactNode }) {
    // No need to use useLenis here unless you want to control scroll programmatically

    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1, // lower = smoother, higher = snappier (default is 0.1)
                duration: 1.2, // seconds, adjust for more/less smoothness
                touchMultiplier: 1.5, // makes touch scroll feel more natural
            }}
        >
            {children}
        </ReactLenis>
    );
}
