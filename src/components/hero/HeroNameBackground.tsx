import React from 'react';
import { motion } from 'framer-motion';

export default function HeroNameBackground() {
    return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
            <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="text-[18vw] leading-none font-bold text-black uppercase tracking-tighter whitespace-nowrap select-none"
                style={{ fontFamily: 'var(--font-heading)' }}
            >
                HIDAYAT ABISENA
            </motion.h1>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-background/40" />
        </div>
    );
}
