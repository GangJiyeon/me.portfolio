
import React from 'react';
import SectionHeader from './SectionHeader';

interface Props {
  content: {
    title: string;
    badge: string;
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    loves: string;
    lovesVal: string;
    lang: string;
    langVal: string;
  };
}

const formatText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <span key={i} className="text-indigo-600 dark:text-indigo-400 font-bold">{part.slice(2, -2)}</span>;
    }
    return part;
  });
};

const About: React.FC<Props> = ({ content }) => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-dark/50 transition-colors">
      <div className="container mx-auto px-6">
        <SectionHeader title={content.title} />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=600&h=800" 
              alt="Jiyeon's Vibes" 
              className="relative rounded-2xl shadow-xl z-10 w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500 rounded-2xl z-20 flex items-center justify-center text-white p-4 shadow-lg">
              <span className="text-sm font-bold text-center italic">{content.badge}</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug">
              {formatText(content.heading)}
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>{formatText(content.p1)}</p>
              <p>{formatText(content.p2)}</p>
              <p>{formatText(content.p3)}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">{content.loves}</p>
                <p className="font-semibold text-slate-700 dark:text-slate-200">{content.lovesVal}</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">{content.lang}</p>
                <p className="font-semibold text-slate-700 dark:text-slate-200">{content.langVal}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
