import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../data';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Featured Projects</h2>

                    <div className="grid-projects">
                        {PROJECTS.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card flex flex-col h-full"
                            >
                                {/* Thumbnail */}
                                <div className="card-image-placeholder relative overflow-hidden">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'block';
                                            }}
                                        />
                                    ) : null}

                                    {/* Fallback / Placeholder if no image or error */}
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            display: project.image ? 'none' : 'block',
                                            background: `linear-gradient(135deg, var(--bg-secondary) 0%, var(--card-bg) 100%)`,
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-[var(--accent)] opacity-5 group-hover:opacity-10 transition-opacity" />
                                        {/* Decorative element */}
                                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--accent)] rounded-full blur-3xl opacity-20" />
                                    </div>
                                </div>

                                <div className="project-content flex-1 flex flex-col">
                                    <div className="project-header">
                                        <h3 className="text-xl font-bold hover:text-[var(--accent)] transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="flex gap-4">
                                            <a href={project.github} className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors">
                                                <Github size={22} />
                                            </a>
                                            <a href={project.link} className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors">
                                                <ExternalLink size={22} />
                                            </a>
                                        </div>
                                    </div>

                                    <p className="text-[var(--text-secondary)] mb-6 leading-relaxed flex-1">
                                        {project.description}
                                    </p>

                                    <div className="project-tags">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="tag"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
