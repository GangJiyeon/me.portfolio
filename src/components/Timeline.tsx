
import React from 'react';
import SectionHeader from './SectionHeader';
import { CareerItem } from '../types';

interface Props {
  section: { title: string; subtitle: string };
  career: CareerItem[];
}

const Timeline: React.FC<Props> = ({ section, career }) => {
  return (
    <section id="career" className="py-24 bg-[#FDFCFB] dark:bg-dark transition-colors">
      <div className="container mx-auto px-6">
        <SectionHeader title={section.title} subtitle={section.subtitle} />
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 h-full w-px bg-slate-200 dark:bg-slate-700 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {career.map((item, idx) => (
              <div key={item.id} className={`flex flex-col md:flex-row items-center w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 px-10 md:px-12">
                  <div className={`p-8 bg-white dark:bg-slate-800/60 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 relative ${idx % 2 === 0 ? 'text-left md:text-right' : 'text-left'}`}>
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${idx % 2 === 0 ? '-right-24' : '-left-24'} bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full text-xs font-bold text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800 z-10`}>
                      {item.period}
                    </div>
                    
                    <span className="text-[10px] font-black uppercase text-indigo-500 dark:text-indigo-400 tracking-widest mb-2 block">
                      {item.type === 'education' ? 'Academic' : 'Experience'}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">{item.organization} | <span className="md:hidden">{item.period}</span></p>
                    
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description.map((desc, dIdx) => (
                        <li key={dIdx}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-indigo-500 border-4 border-white dark:border-dark rounded-full transform -translate-x-1/2 shadow-lg z-20"></div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
