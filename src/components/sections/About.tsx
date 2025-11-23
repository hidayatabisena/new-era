import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../lib/animations';

const skills = [
    "TypeScript", "React", "Node.js", "Astro", "Tailwind CSS",
    "PostgreSQL", "Containerization", "Cloud", "System Design", "UI/UX", "Swift", "Kotlin"
];

export default function About() {
    return (
        <section id="about" className="py-24 md:py-32 px-4 bg-background">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 gap-12 md:gap-20"
                >
                    <motion.div variants={fadeUp}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                            About Me
                        </h2>
                        <div className="space-y-6 text-text-secondary leading-relaxed">
                            <p>
                                I am a founder-engineer who builds end-to-end products, not just features. My journey combines entrepreneurship, software engineering, and applied AI turning bold ideas into products that work.
                            </p>
                            <p>
                                Beyond engineering, I’m deeply involved in business development and strategic partnerships with enterprises. I enjoy conversations where technology becomes leverage.
                            </p>
                            <p>
                                For me, building software isn’t only about product, it’s about ecosystems. Software is a tool that helps people, teams, and organizations operate at their best.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                            Skills & Technologies
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-white border border-border rounded-full text-sm text-text-secondary hover:border-text-primary hover:text-text-primary transition-colors duration-300 cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
