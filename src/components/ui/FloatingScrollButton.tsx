'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function FloatingScrollButton() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1500);

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            setIsScrolled(scrollPosition > windowHeight * 0.3);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToPosition = () => {
        setIsClicking(true);

        if (isScrolled) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        }

        setTimeout(() => setIsClicking(false), 300);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: isClicking ? 0.95 : 1
                    }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToPosition}
                    className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-50 flex items-center gap-2 text-xs text-text-secondary/60 hover:text-text-secondary transition-colors duration-200 cursor-pointer bg-transparent border-none p-2 group active:scale-95 pointer-events-auto"
                    aria-label={isScrolled ? 'Scroll to top' : 'Scroll to bottom'}
                >
                    <motion.span
                        initial={false}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isScrolled ? '(Scroll up)' : '(Scroll down)'}
                    </motion.span>

                    <motion.svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={false}
                        animate={{ rotate: isScrolled ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="group-hover:translate-y-0.5 transition-transform duration-300"
                    >
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </motion.svg>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
