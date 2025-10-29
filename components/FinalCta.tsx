import React from 'react';
import { CtaButtons } from './CtaButtons';

export const FinalCta: React.FC = () => {
    return (
        <section 
            className="bg-cover bg-center py-20 md:py-32" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop')" }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center bg-brand-teal/70 backdrop-blur-sm py-12 rounded-lg max-w-4xl">
                <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white">Venez découvrir tout ce que la sophrologie peut vous apporter.</h2>
                <CtaButtons isLight={true} />
                <p className="font-montserrat text-xs text-gray-200 mt-4">Je prendrai contact avec vous rapidement pour convenir d’un échange sur vos besoins.</p>
            </div>
        </section>
    );
};