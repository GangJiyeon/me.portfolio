import { useEffect, useState } from 'react';


import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import { CONTENT } from './constants';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<'ko' | 'en'>('ko');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      // localStorage에 저장된 값이 있으면 그 값 사용
      if (saved) {
        return saved === 'dark';
      }
      // localStorage에 값이 없으면 시스템 설정 따라가기
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const currentContent = CONTENT[lang];
  const navItems = [
    { name: currentContent.nav.home, href: '#home' },
    { name: currentContent.nav.about, href: '#about' },
    { name: currentContent.nav.skills, href: '#skills' },
    { name: currentContent.nav.portfolio, href: '#portfolio' },
    { name: currentContent.nav.history, href: '#career' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-800 dark:bg-slate-950 dark:text-slate-200">
    {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md py-4 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a
            href="#home"
            className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter shrink-0"
          >
            JIYEON.
          </a>

          <div className="flex items-center gap-2 md:gap-8">
            <div className="hidden md:flex gap-8 items-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 pl-2 md:pl-4 border-l border-slate-200 dark:border-slate-700">
              {/* Language Toggle */}
              <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-full text-[10px] font-bold">
                <button
                  onClick={() => setLang('ko')}
                  className={`px-2 py-1 rounded-full transition-all ${
                    lang === 'ko'
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-500 hover:text-indigo-500'
                  }`}
                >
                  KO
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-2 py-1 rounded-full transition-all ${
                    lang === 'en'
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-500 hover:text-indigo-500'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Dark Mode Switch */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 focus:outline-none ${
                  isDarkMode ? 'bg-indigo-600' : 'bg-slate-300'
                }`}
                aria-label="Toggle Dark Mode"
              >
                <span
                  className={`${
                    isDarkMode ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ease-in-out shadow-lg flex items-center justify-center`}
                >
                  {isDarkMode ? (
                    <svg
                      className="w-2.5 h-2.5 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-2.5 h-2.5 text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" />
                    </svg>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero content={currentContent.hero} />
        <About content={currentContent.about} />
        <Skills
          section={currentContent.skillsSection}
          categories={currentContent.skills}
        />
        <Portfolio
          section={currentContent.portfolio}
          projects={currentContent.projects}
        />
        <Timeline
          section={currentContent.careerSection}
          career={currentContent.career}
        />
      </main>

      <Footer content={currentContent.footer} />
    </div>
  );
}
