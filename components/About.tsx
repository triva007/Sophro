import React from 'react';

const MissionIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0117.657 18.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11.5a4.5 4.5 0 11-5.026-5.026" />
    </svg>
);

export const About: React.FC = () => {
    return (
        <section className="bg-brand-teal text-white py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                     <h2 className="font-playfair text-3xl md:text-4xl font-bold">Mais qui suis-je pour vous promettre cela ?</h2>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                    <div className="md:w-5/12 flex justify-center">
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" alt="Melissa Boukaia, Sophrologue" className="rounded-lg shadow-2xl w-full max-w-sm object-cover aspect-[4/5]" />
                    </div>
                    <div className="md:w-7/12 text-left">
                        <h3 className="font-playfair text-2xl font-bold mb-4">Je suis Melissa Boukaia, sophrologue certifiée.</h3>
                        <div className="space-y-4 font-montserrat text-gray-200">
                            <p>
                                Spécialisée dans la gestion du stress, de l’anxiété et des troubles du sommeil, j’ai accompagné de nombreuses personnes à retrouver confiance, calme et légèreté intérieure.
                            </p>
                            <p>
                                Avant d’exercer, j’ai moi-même connu le stress et la surcharge mentale d’un quotidien exigeant. C’est ce qui m’a amenée à la sophrologie et à la PNL — des approches que j’utilise aujourd’hui pour aider mes clients à reprendre le contrôle de leur bien-être.
                            </p>
                             <div className="flex items-start mt-8 pt-6 border-t border-white/20">
                                <MissionIcon />
                                <div className="ml-4">
                                    <h4 className="font-bold text-white">Ma mission :</h4>
                                    <p className="text-gray-200">
                                    vous aider à transformer votre mental pour atteindre la sérénité, la confiance et l’épanouissement durable.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};