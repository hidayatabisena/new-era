import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/animations';
import FloatingScrollButton from '../ui/FloatingScrollButton';

export default function HeroTextBlock() {
    return (
        <div className="relative md:absolute inset-0 flex flex-col justify-end pb-10 md:pb-32 px-4 z-20 pointer-events-none order-3 md:order-none w-full h-auto md:h-full">
            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end gap-8 md:gap-20">

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.6 }}
                    className="md:max-w-xs pointer-events-auto"
                >
                    <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                        Hello, I'm Hidayat Abisena, a product-minded engineer based in Indonesia. I craft AI-powered tools and build small, reliable web apps that are easy to use and simple to maintain.
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

            <FloatingScrollButton />
        </div>
    );
}
