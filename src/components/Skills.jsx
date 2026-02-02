import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../data';

const Skills = () => {
    return (
        <section id="skills" className="section bg-[var(--bg-secondary)] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent)] rounded-full blur-[120px] opacity-[0.03] pointer-events-none" />

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Skills & Technologies</h2>

                    <div className="skills-grid">
                        {SKILLS.map((group, index) => (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="skill-card"
                            >
                                <h3 className="text-lg font-semibold mb-4 text-[var(--accent)]">
                                    {group.category}
                                </h3>
                                <ul className="skill-list">
                                    {group.items.map((skill) => (
                                        <li key={skill}>
                                            <span className="skill-dot" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
