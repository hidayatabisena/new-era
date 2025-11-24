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
                maskImage: `linear-gradient(${gradientDirection[direction]}, black, transparent)`,
                backdropFilter: `blur(${blurIntensity * 10}px)`,
            }}
        />
    );
}
