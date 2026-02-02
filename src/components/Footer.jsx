import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-[var(--border)] text-center text-[var(--text-tertiary)] text-sm">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Abhay Raj. All rights reserved.</p>
                <p className="mt-2">Designed with logic & creativity.</p>
            </div>
        </footer>
    );
};

export default Footer;
