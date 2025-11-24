'use client';

import { cn } from '@/lib/utils';
import { motion, useMotionValue, animate, useMotionValueEvent } from 'framer-motion';
import { useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';

type InfiniteSliderProps = {
    children: React.ReactNode;
    gap?: number;
    duration?: number;
    durationOnHover?: number;
    speed?: number;
    speedOnHover?: number;
    direction?: 'horizontal' | 'vertical';
    reverse?: boolean;
    className?: string;
};

export function InfiniteSlider({
    children,
    gap = 16,
    duration,
    durationOnHover,
    speed,
    speedOnHover,
    direction = 'horizontal',
    reverse = false,
    className,
}: InfiniteSliderProps) {
    const [currentDuration, setCurrentDuration] = useState(duration || 25);
    const [ref, { width, height }] = useMeasure();
    const translation = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [key, setKey] = useState(0);

    useEffect(() => {
        let newDuration = duration || 25;
        if (speed) {
            newDuration = (direction === 'horizontal' ? width : height) / speed;
        }

        if (isHovered) {
            if (durationOnHover) {
                newDuration = durationOnHover;
            } else if (speedOnHover) {
                newDuration = (direction === 'horizontal' ? width : height) / speedOnHover;
            }
        }

        setCurrentDuration(newDuration);
    }, [isHovered, duration, durationOnHover, speed, speedOnHover, width, height, direction]);

    useEffect(() => {
        const controls = animate(
            translation,
            [0, direction === 'horizontal' ? -width / 2 : -height / 2],
            {
                ease: 'linear',
                duration: currentDuration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
            }
        );

        return controls.stop;
    }, [translation, currentDuration, width, height, direction]);

    return (
        <div
            className={cn(
                'overflow-hidden',
                direction === 'horizontal' ? 'w-full' : 'h-full',
                className
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className={cn(
                    'flex',
                    direction === 'horizontal' ? 'flex-row' : 'flex-col'
                )}
                style={{
                    gap: `${gap}px`,
                    x: direction === 'horizontal' ? translation : 0,
                    y: direction === 'vertical' ? translation : 0,
                }}
                ref={ref}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}
