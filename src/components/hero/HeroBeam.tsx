import { motion } from 'framer-motion';

export default function HeroBeam() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center z-0">
            <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                transition={{
                    opacity: { duration: 1.5, ease: "easeOut" },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                className="w-[150vh] h-[150vh] opacity-50"
                style={{
                    background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 80deg, rgba(250, 204, 21, 0.15) 120deg, transparent 160deg, transparent 360deg)',
                    filter: 'blur(60px)',
                }}
            />
            <motion.div
                initial={{ opacity: 0, rotate: 180 }}
                animate={{ opacity: 1, rotate: 540 }}
                transition={{
                    opacity: { duration: 1.5, ease: "easeOut", delay: 0.5 },
                    rotate: { duration: 25, repeat: Infinity, ease: "linear", repeatType: "loop" }
                }}
                className="absolute w-[120vh] h-[120vh] opacity-30"
                style={{
                    background: 'conic-gradient(from 180deg at 50% 50%, transparent 0deg, transparent 100deg, rgba(250, 204, 21, 0.2) 140deg, transparent 180deg, transparent 360deg)',
                    filter: 'blur(40px)',
                }}
            />
        </div>
    );
}
