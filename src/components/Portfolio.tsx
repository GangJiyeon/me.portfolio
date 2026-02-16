import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { Project } from '../types';

interface Props {
  section: { title: string; subtitle: string; tabs: { [key: string]: string } };
  projects: Project[];
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

const Portfolio: React.FC<Props> = ({ section, projects }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const tabs = Object.entries(section.tabs);

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-dark transition-colors">
      <div className="container mx-auto px-6">
        <SectionHeader title={section.title} subtitle={section.subtitle} />
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeTab === key
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20'
                  : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-100 dark:border-slate-700 hover:border-indigo-300 hover:text-indigo-500'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-[#FDFCFB] dark:bg-slate-800/40 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp"
            >
              <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-[10px] font-black rounded-lg text-slate-800 dark:text-white shadow-sm uppercase tracking-widest">
                    {section.tabs[project.category] || 'Project'}
                  </span>
                </div>
              </div>
              
              <div className="md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                    <span className="text-[10px] text-slate-400 font-mono mt-1">{project.period}</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 leading-relaxed">
                    {formatText(project.description)}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-[10px] rounded-md font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 border-t border-slate-100 dark:border-slate-700 pt-4">
                    <div className="flex items-start gap-2">
                      <span className="text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase mt-0.5">Role</span>
                      <p className="text-xs text-slate-700 dark:text-slate-300">{project.role}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase mt-0.5">Note</span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 italic font-serif leading-tight">"{formatText(project.learnings)}"</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                  {/* 월리스코어만 상세 페이지 링크 */}
                  {project.id === 'wally-score' && (
                    <a
                      href={`/project/${project.id}`}
                      className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-500 transition-colors text-center"
                    >
                      View Details
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.id === 'wally-score' ? 'flex-1' : 'flex-1'} px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white rounded-lg text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors text-center flex items-center justify-center gap-2`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                  
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.id === 'wally-score' || project.githubUrl ? 'flex-1' : 'flex-1'} px-4 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-center flex items-center justify-center gap-2`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
