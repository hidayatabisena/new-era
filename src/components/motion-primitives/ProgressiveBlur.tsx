import { cn } from '@/lib/utils';

interface ProgressiveBlurProps {
    direction?: 'top' | 'bottom' | 'left' | 'right';
    blurIntensity?: number;
    className?: string;
}

export function ProgressiveBlur({
    direction = 'bottom',
    blurIntensity = 1,
    className,
}: ProgressiveBlurProps) {
    const gradientDirection = {
        top: 'to top',
        bottom: 'to bottom',
        left: 'to left',
        right: 'to right',
    };

    return (
        <div
            className={cn('pointer-events-none absolute z-10', className)}
            style={{
                maskImage: `linear-gradient(${gradientDirection[direction]}, rgba(0,0,0,0) 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.5) 65%, rgba(0,0,0,0.75) 85%, black 100%)`,
                backdropFilter: `blur(${blurIntensity * 22}px)`,
                WebkitBackdropFilter: `blur(${blurIntensity * 22}px)`,
            }}
        />
    );
}
