import React from 'react';
import { CtaButtons } from './CtaButtons';

export const Hero: React.FC = () => {
    return (
        <section 
            className="relative bg-cover bg-center text-white py-24 md:py-40" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508921340878-ba53e1f416ec?q=80&w=2070&auto=format&fit=crop')" }}
        >
            <div className="absolute inset-0 bg-brand-teal bg-opacity-70"></div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
                <p className="font-montserrat text-sm tracking-widest uppercase text-gray-200 mb-2">
                    Cabinet à Rueil-Malmaison (92500)
                </p>
                <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    La Sophrologie au Service de Votre Bien-Être
                </h1>
                <p className="font-montserrat text-gray-200 mt-6 max-w-2xl mx-auto">
                    Libérez-vous du stress, de l'anxiété et des troubles du sommeil. Apaisez votre mental, transformez vos émotions et retrouvez un équilibre durable.
                </p>
                <CtaButtons isLight={true} />
                <p className="font-montserrat text-xs text-gray-300 mt-4">Échangeons ensemble sur vos besoins.</p>
            </div>
             <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
                <p className="font-montserrat text-sm text-white bg-black/20 py-2 px-4 inline-block rounded-full backdrop-blur-sm">
                    Places limitées chaque mois
                </p>
            </div>
        </section>
    );
};