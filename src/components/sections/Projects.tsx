import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../lib/animations';

const projects = [
    {
        title: "AI Content Generator",
        description: "A powerful tool for generating marketing copy and blog posts using advanced LLMs.",
        tech: ["Next.js", "OpenAI API", "Tailwind"],
        link: "#"
    },
    {
        title: "E-commerce Dashboard",
        description: "A comprehensive analytics dashboard for online retailers to track sales and inventory.",
        tech: ["React", "Tremor", "Supabase"],
        link: "#"
    },
    {
        title: "Task Management App",
        description: "A collaborative task manager focusing on simplicity and team productivity.",
        tech: ["Vue.js", "Firebase", "Pinia"],
        link: "#"
    },
    {
        title: "Financial Portfolio Tracker",
        description: "Real-time tracking of stocks and crypto assets with detailed performance metrics.",
        tech: ["TypeScript", "D3.js", "Node.js"],
        link: "#"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 md:py-32 px-4 bg-background border-t border-border/40">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    <motion.h2
                        variants={fadeUp}
                        className="text-4xl md:text-5xl font-bold mb-16 text-center uppercase tracking-tight"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        Selected Projects
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.a
                                key={index}
                                href={project.link}
                                variants={fadeUp}
                                className="group block p-8 bg-white border border-border rounded-xl hover:border-text-primary transition-all duration-300 hover:shadow-sm"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold group-hover:underline decoration-1 underline-offset-4">
                                        {project.title}
                                    </h3>
                                    <svg
                                        className="w-5 h-5 text-text-secondary group-hover:text-text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </div>
                                <p className="text-text-secondary mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs font-medium text-text-secondary/80 bg-background px-2 py-1 rounded border border-border">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
