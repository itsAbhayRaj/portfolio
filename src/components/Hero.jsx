import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { PROFILE } from '../data';

const Hero = () => {
    return (
        <section className="section hero-wrapper">
            <div className="container text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="hero-role">
                        {PROFILE.role}
                    </span>
                    <h1 className="hero-title">
                        Building <span className="text-gradient">digital products</span> that matter.
                    </h1>
                    <p className="hero-desc">
                        {PROFILE.bio}
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary w-full sm:w-auto group">
                            View Projects
                            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#contact" className="btn btn-outline w-full sm:w-auto">
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
