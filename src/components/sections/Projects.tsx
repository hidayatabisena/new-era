import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../lib/animations';

const projects = [
    {
        title: "Multi-Tenant Operations Platform",
        description:
            "A SaaS platform for managing distributed field operations, tasks, and workflows across multiple organizations, with tenant-scoped data and role-based access.",
        tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
        link: "#"
    },
    {
        title: "Enterprise AI Workspace & Router",
        description:
            "A unified AI workspace that routes requests across multiple LLMs, adds guardrails, tracks usage, and enables private, ChatGPT-like environments for teams.",
        tech: ["Node.js", "AdonisJS", "LLM Router", "Redis", "PostgreSQL"],
        link: "#"
    },
    {
        title: "AI-Driven Procurement & Scoring",
        description:
            "An AI-assisted procurement flow that analyzes documents, summarizes proposals, and generates scoring insights to support decision-making for enterprise buyers.",
        tech: ["TypeScript", "LLMs", "n8n", "PostgreSQL"],
        link: "#"
    },
    {
        title: "Employee Onboarding AI Assistant",
        description:
            "A prototype onboarding assistant that turns SOPs and training material into quizzes, micro-lessons, and guided flows for new hires in their first week.",
        tech: ["Astro", "React", "Tailwind", "Material UI"],
        link: "#"
    },
    {
        title: "AI-Augmented Sales & Pitch Generator",
        description:
            "A personal CRM and AI engine that transforms public company data into tailored pitch ideas, cold email angles, and deck outlines for different industries.",
        tech: ["React", "Vite", "LLMs", "PostgreSQL"],
        link: "#"
    },
    {
        title: "Logging, Audit & Security Toolkit",
        description:
            "A logging and audit layer that enriches backend requests with metadata (IP, country, tenant, device), flags suspicious activity, and exposes data for dashboards.",
        tech: ["Node.js", "Express", "Winston", "PM2"],
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
