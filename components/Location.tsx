import React from 'react';

const LocationPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block text-brand-charcoal" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);

const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-teal mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.375a.375.375 0 01.375.375v1.5a.375.375 0 01-.375.375H9a.375.375 0 01-.375-.375v-1.5A.375.375 0 019 6.75zM9 12.75h6.375a.375.375 0 01.375.375v1.5a.375.375 0 01-.375.375H9a.375.375 0 01-.375-.375v-1.5a.375.375 0 01.375-.375z" />
    </svg>
);

export const Location: React.FC = () => {
    return (
        <section className="bg-brand-cream py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <HomeIcon />
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-charcoal mt-4">Je vous accueille dans mon cabinet privé à Rueil-Malmaison</h2>
                <p className="font-montserrat text-brand-charcoal-light mt-4">
                    <LocationPinIcon />
                    33 rue d’Hastingues, 92500 Rueil-Malmaison
                </p>
                <p className="font-montserrat text-gray-500 mt-2 max-w-2xl mx-auto">
                    Un lieu chaleureux et apaisant, pensé pour favoriser la détente et la reconnexion à soi. Chaque séance est personnalisée selon vos besoins.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
                    <div className="rounded-lg overflow-hidden shadow-xl h-72 md:h-96">
                         <a href="https://www.google.com/maps/place/33+Rue+de+Hastings,+92500+Rueil-Malmaison,+France" target="_blank" rel="noopener noreferrer">
                            <img src="https://i.imgur.com/2sO3i2Z.png" alt="Carte de Rueil-Malmaison" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
                        </a>
                    </div>
                     <div className="rounded-lg overflow-hidden shadow-xl h-72 md:h-96">
                        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop" alt="Intérieur du cabinet de sophrologie" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};