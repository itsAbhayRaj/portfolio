import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        // Initialize theme based on preference or device setting
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        // Default to dark if no saved theme and system prefers dark, otherwise saved, otherwise light
        const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
        setTheme(initialTheme);
        document.documentElement.setAttribute('data-theme', initialTheme);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const navLinks = [
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}>
            <div className="container nav-container">
                <a href="#" className="nav-logo">
                    Abhay<span style={{ color: 'var(--accent)' }}>.Raj</span>
                </a>

                {/* Desktop Menu */}
                <div className="nav-links-desktop">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-[var(--accent)] transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-[var(--bg-secondary)] transition-colors text-[var(--text-primary)]"
                        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    <a href="#contact" className="btn btn-primary text-sm px-4 py-2">
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Toggle & Theme */}
                <div className="mobile-controls">
                    <button
                        onClick={toggleTheme}
                        className="p-2 text-[var(--text-primary)]"
                        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    <button
                        className="mobile-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-menu"
                    >
                        <div className="container flex flex-col gap-4 py-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium hover:text-[var(--accent)]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex gap-4 mt-4 pt-4 border-t border-[var(--border)]">
                                <a href="#" className="p-2 hover:text-[var(--accent)]"><Github size={20} /></a>
                                <a href="#" className="p-2 hover:text-[var(--accent)]"><Linkedin size={20} /></a>
                                <a href="#" className="p-2 hover:text-[var(--accent)]"><Mail size={20} /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
