
import React from 'react';
import SectionHeader from './SectionHeader';
import { SkillCategory } from '../types';

interface Props {
  section: { title: string; subtitle: string };
  categories: SkillCategory[];
}

const Skills: React.FC<Props> = ({ section, categories }) => {
  return (
    <section id="skills" className="py-24 bg-[#F8FAFC] dark:bg-dark transition-colors">
      <div className="container mx-auto px-6">
        <SectionHeader title={section.title} subtitle={section.subtitle} />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, idx) => (
            <div key={idx} className="bg-white/50 dark:bg-slate-800/50 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-slate-600 dark:text-slate-400 flex items-center gap-2 text-sm font-medium">
                    <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
