import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../data';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Experience</h2>

                    <div className="experience-list">
                        {EXPERIENCE.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="timeline-item"
                            >
                                <div className="timeline-dot" />
                                <div className="experience-header">
                                    <h3 className="text-xl font-bold">{job.role}</h3>
                                    <span className="experience-date">
                                        {job.period}
                                    </span>
                                </div>
                                <div className="text-[var(--accent)] font-medium mb-4">{job.company}</div>
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    {job.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
