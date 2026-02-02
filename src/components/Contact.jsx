import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { PROFILE } from '../data';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section bg-[var(--bg-secondary)]">
            <div className="container max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="hero-desc mb-10">
                        I'm currently available for freelance work and open to full-time opportunities.
                        If you have a project that needs some creative touch, let's talk.
                    </p>

                    <a
                        href={`mailto:${PROFILE.email}`}
                        className="btn btn-primary btn-large mb-12"
                    >
                        <Mail size={20} />
                        Say Hello
                    </a>

                    <div className="social-links">
                        <a href={PROFILE.github} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                            <Github size={24} />
                        </a>
                        <a href={PROFILE.linkedin} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                            <Linkedin size={24} />
                        </a>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
