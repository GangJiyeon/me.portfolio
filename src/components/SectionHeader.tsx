
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
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

const SectionHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">{title}</h2>
      {subtitle && <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">{formatText(subtitle)}</p>}
      <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-rose-500 mx-auto mt-6 rounded-full opacity-80"></div>
    </div>
  );
};

export default SectionHeader;
