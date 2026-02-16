import React from 'react';

interface Props {
  content: {
    heading: string;
    desc: string;
    connect: string;
    subscribe: string;
    placeholder: string;
    rights: string;
    blog: string;
    devBlog: string;
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

const Footer: React.FC<Props> = ({ content }) => {
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />, 
      url: 'https://github.com/GangJiyeon' 
    },
    { 
      name: 'Dev Blog', 
      icon: <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4.41 0-8-3.59-8-8V8.5l8-4 8 4V12c0 4.41-3.59 8-8 8zm-1-13v6h2v-6h-2zm0 8v2h2v-2h-2z" />, 
      url: content.devBlog 
    },
    { 
      name: 'Tistory', 
      icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />, 
      url: content.blog 
    },
    { 
      name: 'LinkedIn', 
      icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />, 
      url: 'https://linkedin.com' 
    }
  ];

  return (
    <footer id="contact" className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{formatText(content.heading)}</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md leading-relaxed">
              {formatText(content.desc)}
            </p>
            <div className="space-y-4">
              <a href="mailto:contact@jiyeon.dev" className="flex items-center gap-4 text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>contact@jiyeon.dev</span>
              </a>
              <div className="flex items-center gap-4 text-slate-900 dark:text-slate-300">
                <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Busan, South Korea</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-end">
            <p className="text-xs font-bold text-slate-600 dark:text-slate-500 uppercase tracking-widest mb-4">{content.connect}</p>
            <div className="flex flex-wrap gap-3 mb-10">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-xl flex flex-col items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300 relative group"
                  aria-label={link.name}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    {link.icon}
                  </svg>
                  <span className="absolute -bottom-8 bg-slate-700 dark:bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
            <div className="bg-slate-200 dark:bg-slate-800 p-1 rounded-xl flex items-center max-w-md">
              <input 
                type="email" 
                placeholder={content.placeholder} 
                className="bg-transparent border-none focus:ring-0 text-sm px-4 flex-grow text-slate-900 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-500 transition-colors shrink-0">{content.subscribe}</button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-300 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-600 dark:text-slate-500">{content.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
