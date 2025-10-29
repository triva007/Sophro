import React from 'react';
import { CtaButtons } from './CtaButtons';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const AudienceItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-white/10 p-6 rounded-lg flex items-start space-x-4 backdrop-blur-sm">
        <div className="flex-shrink-0 mt-1">
           <CheckIcon />
        </div>
        <p className="font-montserrat text-gray-200">{children}</p>
    </div>
);

export const TargetAudience: React.FC = () => {
    return (
        <section className="bg-brand-teal text-white py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="font-playfair text-3xl md:text-4xl font-bold">Je m’adresse à toutes les personnes qui…</h2>
                <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto text-left">
                    <AudienceItem>Souffrent d’un mal-être, de stress ou d’anxiété au quotidien.</AudienceItem>
                    <AudienceItem>Ont des troubles du sommeil ou se sentent mentalement épuisées.</AudienceItem>
                    <AudienceItem>Ont vécu une période difficile ou un choc émotionnel (séparation, burn-out, maladie).</AudienceItem>
                    <AudienceItem>Cherchent à retrouver calme, confiance et sérénité intérieure.</AudienceItem>
                </div>
                <CtaButtons isLight={true} />
            </div>
        </section>
    );
};