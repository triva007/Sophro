import React from 'react';

const Logo = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-teal">
        <path d="M20 38C12.5 38 10 31.5 10 31.5C10 31.5 10 21 10 18C10 15 11 11.5 14.5 9.5C18 7.5 21 10.5 21 10.5V6.5C21 6.5 22.5 2 27 2C31.5 2 33 6.5 33 6.5V10.5C33 10.5 36 7.5 39.5 9.5C43 11.5 44 15 44 18C44 21 44 31.5 44 31.5C44 31.5 41.5 38 34 38C26.5 38 29 30 29 27C29 24 26.5 22 26.5 18C26.5 14 29 12 29 12C29 12 23.5 12.5 20 18C16.5 23.5 15 25 15 27C15 29 12.5 38 20 38Z" transform="scale(0.8) translate(-4, 0)" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


export const Header: React.FC = () => {
    return (
        <header className="py-5 px-4 sm:px-6 lg:px-8 bg-brand-cream sticky top-0 z-50 border-b border-gray-200/80 backdrop-blur-sm">
            <div className="container mx-auto flex items-center justify-center text-center">
                <Logo />
                <div className="ml-4">
                    <h1 className="font-playfair text-xl font-bold text-brand-charcoal">Melissa Boukaia</h1>
                    <p className="text-sm text-brand-charcoal-light font-montserrat tracking-wider">SOPHROLOGUE</p>
                </div>
            </div>
        </header>
    );
};