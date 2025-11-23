import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../lib/animations';

const skills = [
    "TypeScript", "React", "Node.js", "Astro", "Tailwind CSS",
    "PostgreSQL", "Docker", "AWS", "System Design", "UI/UX"
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
                                I am a software engineer with a passion for building tools that empower people.
                                My journey began with a curiosity about how things work, which led me to dive deep into full-stack development.
                            </p>
                            <p>
                                Over the years, I've worked on a diverse range of projects, from early-stage startups to large-scale enterprise systems.
                                I believe in writing clean, maintainable code and designing intuitive user experiences.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.
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
