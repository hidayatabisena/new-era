import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function NavBar() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.name.toLowerCase());
            const scrollPosition = window.scrollY + 100;

            if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
                setActiveSection(sections[sections.length - 1]);
                return;
            }

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
        >
            <div className="bg-white/80 backdrop-blur-md border border-border rounded-full p-1.5 shadow-sm flex gap-1">
                {navItems.map((item) => {
                    const isActive = activeSection === item.name.toLowerCase();
                    return (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById(item.name.toLowerCase());
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                    setActiveSection(item.name.toLowerCase());
                                }
                            }}
                            className={clsx(
                                "relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300",
                                isActive ? "text-white" : "text-text-secondary hover:text-text-primary"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-black rounded-full"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{item.name}</span>
                        </a>
                    );
                })}
            </div>
        </motion.nav>
    );
}
