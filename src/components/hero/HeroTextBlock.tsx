import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/animations';

export default function HeroTextBlock() {
    return (
        <div className="absolute inset-0 flex flex-col justify-end pb-20 md:pb-32 px-4 z-20 pointer-events-none">
            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end gap-8 md:gap-20">

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.6 }}
                    className="md:max-w-xs pointer-events-auto"
                >
                    <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                        Hello, I’m Hidayat Abisena, a product-minded engineer based in Indonesia. I craft AI-powered tools and build small, reliable web apps that are easy to use and simple to maintain.
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.8 }}
                    className="md:max-w-xs text-right pointer-events-auto"
                >
                    <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                        I turn complex ideas into clear interfaces. I build enterprise SaaS platforms with a focus on stability, predictable performance, and features that solve tangible business problems.
                    </p>
                </motion.div>

            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex items-center gap-2 text-xs text-text-secondary/60 pointer-events-auto"
            >
                <span>(Scroll down)</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
            </motion.div>
        </div>
    );
}
