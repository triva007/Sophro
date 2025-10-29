import React from 'react';
import { CtaButtons } from './CtaButtons';
import type { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
    { name: "Charlotte R.", text: "Depuis mes séances avec Melissa, je dors enfin sereinement. Je gère beaucoup mieux mon stress au travail." },
    { name: "Flavie M.", text: "Je souffrais d’angoisses depuis des années. Grâce à la sophrologie, j’ai retrouvé confiance et sérénité." },
    { name: "Sophie L.", text: "Je me sens apaisée, plus concentrée, et surtout en paix avec moi-même." },
];

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-gold" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col text-center h-full border-t-4 border-brand-gold">
        <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
        </div>
        <p className="font-montserrat text-brand-charcoal-light flex-grow italic">"{testimonial.text}"</p>
        <p className="font-playfair font-bold text-brand-charcoal mt-6">- {testimonial.name}</p>
    </div>
);

export const Testimonials: React.FC = () => {
    return (
        <section className="bg-brand-cream py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <p className="font-montserrat text-brand-gold font-semibold tracking-wider">EXCELLENT SUR GOOGLE</p>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-charcoal mt-4">Des dizaines de personnes m’ont déjà fait confiance</h2>
                
                <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>

                <CtaButtons />
                 <p className="font-montserrat text-xs text-gray-500 mt-4">(Je prendrai contact avec vous sous 24h.)</p>
            </div>
        </section>
    );
};