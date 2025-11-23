import { motion } from 'framer-motion';

export default function HeroNameBackground() {
    return (
        <div className="relative md:absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0 w-full h-auto md:h-full py-10 md:py-0 order-1 md:order-none">
            <div className="flex items-center justify-center gap-[2vw] md:gap-4 w-full translate-y-0 md:translate-y-[-10%]">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className="text-[22vw] md:text-[18vw] leading-none font-bold text-black uppercase whitespace-nowrap select-none md:-translate-y-[15%]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    ABISENA
                </motion.h1>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-background/40" />
        </div>
    );
}
