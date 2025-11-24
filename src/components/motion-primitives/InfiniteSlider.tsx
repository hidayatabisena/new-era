'use client';

import { cn } from '@/lib/utils';
import { motion, useAnimationFrame } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
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
    const [ref, { width, height }] = useMeasure();
    const [isHovered, setIsHovered] = useState(false);
    const translation = useRef(0);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const getCurrentSpeed = () => {
        const dimension = direction === 'horizontal' ? width : height;

        if (dimension === 0) return 0;

        let currentSpeed = speed || dimension / (duration || 25);

        if (isHovered) {
            if (speedOnHover !== undefined) {
                currentSpeed = speedOnHover;
            } else if (durationOnHover !== undefined) {
                currentSpeed = dimension / durationOnHover;
            }
        }

        return reverse ? -currentSpeed : currentSpeed;
    };

    useAnimationFrame((time, delta) => {
        const dimension = direction === 'horizontal' ? width : height;

        if (dimension === 0) return;

        const speed = getCurrentSpeed();
        const distance = (speed * delta) / 1000;

        translation.current -= distance;

        const resetPoint = -(dimension / 2 + gap / 2);
        if (translation.current < resetPoint) {
            translation.current = translation.current % resetPoint;
        } else if (translation.current > 0) {
            translation.current = translation.current % resetPoint;
        }

        if (direction === 'horizontal') {
            setX(translation.current);
        } else {
            setY(translation.current);
        }
    });

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
                    x: direction === 'horizontal' ? x : 0,
                    y: direction === 'vertical' ? y : 0,
                }}
                ref={ref}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}
