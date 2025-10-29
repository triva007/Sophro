import React from 'react';

const TransformationCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
    <div className="bg-brand-cream p-8 rounded-lg shadow-lg text-center h-full border-b-4 border-brand-gold">
        <div className="text-brand-teal mb-4 flex justify-center">
            {icon}
        </div>
        <h3 className="font-playfair text-xl font-bold text-brand-charcoal mb-2">{title}</h3>
        <p className="font-montserrat text-brand-charcoal-light">{text}</p>
    </div>
);

const MindIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a6 6 0 01-2.56 5.84m-2.56-5.84a6 6 0 01-5.84-2.56m11.24 0a6 6 0 01-2.56-5.84m-5.84 5.84a6 6 0 01-5.84 2.56m5.84-11.24a6 6 0 015.84 2.56M9.76 14.37a6 6 0 01-5.84-7.38v4.82m9.24-9.24a6 6 0 01-5.84-2.56m-2.56 5.84a6 6 0 012.56-5.84" />
    </svg>
)

const BrainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.871 4.123c1.334-.23 2.738-.344 4.129-.344s2.795.114 4.129.344m-8.258 15.754c1.334.23 2.738.344 4.129.344s2.795-.114 4.129-.344M4.871 4.123c.883 3.334 1.488 6.837 1.488 10.377 0 1.25-.138 2.474-.403 3.655M17.629 4.123c-.883 3.334-1.488 6.837-1.488 10.377 0 1.25.138 2.474.403 3.655" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.871 4.123c2.934-1.12 6.312-1.12 9.246 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.274 18.252c2.934 1.12 6.312 1.12 9.246 0" />
    </svg>
)

const BalanceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.75c0 1.132-.375 2.16-1 3-1.002 1.25-2.25 2.5-2.25 2.5s-1.248-1.25-2.25-2.5c-.625-.84-1-1.868-1-3C5.5 2.119 7.619 0 10.25 0c1.75 0 3.063.938 3.75 2.063C14.687.938 16 0 17.75 0c2.631 0 4.75 2.119 4.75 4.75zM12 10.333V24m-4.333-5H20M4 19.333h11.333" />
    </svg>
)

export const Transformation: React.FC = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-charcoal">La sophrologie peut littéralement transformer votre vie.</h2>
                <p className="font-montserrat text-brand-charcoal-light mt-4 max-w-3xl mx-auto">Je vous accompagne pour faire disparaître ce qui entretient votre mal-être et retrouver un vrai bien-être.</p>
                
                <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
                    <TransformationCard icon={<MindIcon/>} title="Apaiser le mental" text="Gérer les émotions et retrouver la paix intérieure." />
                    <TransformationCard icon={<BrainIcon/>} title="Reprogrammer les pensées" text="Créer de nouveaux schémas positifs et durables." />
                    <TransformationCard icon={<BalanceIcon/>} title="Retrouver l’équilibre" text="Libérer le corps et l’esprit des tensions." />
                </div>
                
                <div className="mt-12">
                    <a href="#" className="bg-brand-gold text-white hover:bg-opacity-90 inline-block px-8 py-3 text-sm font-semibold rounded-full transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                        APPEL DÉCOUVERTE GRATUIT (15 MIN)
                    </a>
                </div>
            </div>
        </section>
    );
};