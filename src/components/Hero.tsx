
import React from 'react';

interface Props {
  content: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    btn1: string;
    btn2: string;
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

const Hero: React.FC<Props> = ({ content }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden relative bg-[#FDFCFB] dark:bg-slate-950">
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-rose-50 dark:bg-rose-900/20 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="inline-block px-4 py-1.5 mb-8 text-sm font-medium bg-indigo-50 dark:bg-indigo-900/30 rounded-full border border-indigo-100 dark:border-indigo-800 text-slate-700 dark:text-slate-300">
          {formatText(content.badge)}
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.3] tracking-tight dark:text-white">
          <span className="block">{formatText(content.title1)}</span>
          <span className="text-gradient block">{formatText(content.title2)}</span>
        </h1>

        <div>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            {formatText(content.desc)}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#portfolio" className="px-8 py-4 bg-slate-900 dark:bg-indigo-600 text-white rounded-2xl font-medium hover:bg-slate-800 dark:hover:bg-indigo-500 transition-all shadow-lg transform hover:-translate-y-1 text-center">
              {content.btn1}
            </a>
            <a href="#about" className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all transform hover:-translate-y-1 text-center">
              {content.btn2}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
