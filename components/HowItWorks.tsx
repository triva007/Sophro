import React from 'react';
import { CtaButtons } from './CtaButtons';

const CheckIconSolid = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-teal" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);


export const HowItWorks: React.FC = () => {
    return (
        <section className="bg-brand-cream py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-6xl mx-auto">
                    <div className="md:w-1/2 text-left">
                        <p className="font-montserrat text-brand-gold tracking-wider font-semibold">LA MÉTHODE</p>
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-charcoal mt-2">Sortir de cette situation grâce à la Sophrologie</h2>
                        <p className="font-montserrat text-brand-charcoal-light mt-6 mb-8">
                            La sophrologie est une méthode douce mais puissante, qui agit sur le mental et le corps. Elle vous aide à reprogrammer vos pensées, apaiser vos émotions et retrouver un équilibre durable.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <CheckIconSolid />
                                <span className="ml-3 font-montserrat text-brand-charcoal">Diminuer le stress et les angoisses.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckIconSolid />
                                <span className="ml-3 font-montserrat text-brand-charcoal">Retrouver un sommeil réparateur.</span>
                            </li>
                             <li className="flex items-start">
                                <CheckIconSolid />
                                <span className="ml-3 font-montserrat text-brand-charcoal">Reprendre confiance en vous.</span>
                            </li>
                             <li className="flex items-start">
                                <CheckIconSolid />
                                <span className="ml-3 font-montserrat text-brand-charcoal">Vous libérer des blocages intérieurs.</span>
                            </li>
                        </ul>
                        <div className="pt-4">
                          <CtaButtons />
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img src="https://images.unsplash.com/photo-1576426863848-c21f68c6aa98?q=80&w=2070&auto=format&fit=crop" alt="Séance de sophrologie" className="rounded-lg shadow-2xl w-full max-w-md object-cover aspect-[4/5]" />
                    </div>
                </div>
            </div>
        </section>
    );
};