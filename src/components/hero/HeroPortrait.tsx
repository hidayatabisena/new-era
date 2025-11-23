import { motion } from 'framer-motion';

export default function HeroPortrait() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="relative z-10 w-full max-w-md mx-auto mt-10 md:mt-0"
        >
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group">
                <motion.img
                    src="https://res.cloudinary.com/moyadev/image/upload/v1763883763/Moyadev/hansena_ypms0x.jpg"
                    alt="Hidayat Abisena"
                    className="w-full h-full object-cover object-center"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>
        </motion.div>
    );
}
