import React from 'react';

const Logo = () => (
    <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-charcoal">
        <path d="M20 38C12.5 38 10 31.5 10 31.5C10 31.5 10 21 10 18C10 15 11 11.5 14.5 9.5C18 7.5 21 10.5 21 10.5V6.5C21 6.5 22.5 2 27 2C31.5 2 33 6.5 33 6.5V10.5C33 10.5 36 7.5 39.5 9.5C43 11.5 44 15 44 18C44 21 44 31.5 44 31.5C44 31.5 41.5 38 34 38C26.5 38 29 30 29 27C29 24 26.5 22 26.5 18C26.5 14 29 12 29 12C29 12 23.5 12.5 20 18C16.5 23.5 15 25 15 27C15 29 12.5 38 20 38Z" transform="scale(0.8) translate(-4, 0)" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


export const Footer: React.FC = () => {
    return (
        <footer className="bg-white py-8 border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-brand-charcoal-light">
                <div className="flex items-center justify-center mb-4">
                    <Logo />
                    <span className="ml-3 font-playfair font-bold text-brand-charcoal">Melissa Boukaia</span>
                </div>
                <p className="font-montserrat text-sm">
                    © {new Date().getFullYear()} Melissa Boukaia – Sophrologue à Rueil-Malmaison
                </p>
                <div className="flex justify-center space-x-4 mt-4 font-montserrat text-sm">
                    <a href="#" className="hover:text-brand-gold transition-colors">Mentions Légales</a>
                    <span className="text-gray-300">|</span>
                    <a href="#" className="hover:text-brand-gold transition-colors">LinkedIn</a>
                    <span className="text-gray-300">|</span>
                    <a href="#" className="hover:text-brand-gold transition-colors">Instagram</a>
                </div>
            </div>
        </footer>
    );
};