import React, { useEffect } from 'react';

const WallyScoreDetail: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFB] dark:bg-slate-950 text-slate-800 dark:text-slate-200">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 to-rose-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-6">
          <a href="/" className="inline-flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </a>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-indigo-100 dark:bg-indigo-900/30 rounded-full border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300">
              Backend · AI
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
              월리스코어 (Wally Score)
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              워킹홀리데이 희망자를 위한 지역별 점수 산출 및 AI 기반 맞춤형 추천 서비스
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                2024.01 - 2024.03
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Solo Project
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12 bg-slate-100 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=1600" 
              alt="Wally Score"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">프로젝트 개요</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                월리스코어는 워킹홀리데이를 준비하는 사람들이 자신에게 가장 적합한 지역을 찾을 수 있도록 돕는 서비스입니다. 
                단순한 정보 제공을 넘어, 사용자의 목표와 선호도를 분석하여 AI가 맞춤형 가이드를 제공합니다.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                이 프로젝트를 통해 복잡한 의사결정 과정을 데이터와 AI로 단순화하여, 
                사용자가 확신을 갖고 워킹홀리데이를 준비할 수 있도록 지원합니다.
              </p>
            </div>

            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="p-8 bg-rose-50 dark:bg-rose-900/20 rounded-2xl border border-rose-100 dark:border-rose-800">
                <h3 className="text-xl font-bold mb-4 text-rose-900 dark:text-rose-300">문제점</h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">•</span>
                    <span>워킹홀리데이 지역 선택 시 산재된 정보로 인한 혼란</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">•</span>
                    <span>개인 상황에 맞는 맞춤형 추천 부재</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">•</span>
                    <span>준비 과정에서의 불확실성과 불안감</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800">
                <h3 className="text-xl font-bold mb-4 text-indigo-900 dark:text-indigo-300">해결 방법</h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">✓</span>
                    <span>데이터 기반 지역별 점수 산출 시스템</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">✓</span>
                    <span>AI 기반 개인화된 추천 알고리즘</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">✓</span>
                    <span>단계별 준비 가이드 자동 생성</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">주요 기능</h2>
              <div className="space-y-6">
                <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <h4 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">📊 지역별 점수 산출</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    물가, 취업 난이도, 생활 환경, 언어 등 다양한 요소를 종합하여 각 지역의 점수를 산출합니다. 
                    사용자는 자신의 우선순위에 따라 가중치를 조절할 수 있습니다.
                  </p>
                </div>

                <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <h4 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">🤖 AI 추천 시스템</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    OpenAI API를 활용하여 사용자의 목표, 예산, 선호도를 분석하고 최적의 지역을 추천합니다. 
                    단순한 점수 비교를 넘어, 맥락을 이해한 상세한 가이드를 제공합니다.
                  </p>
                </div>

                <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <h4 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">📝 맞춤형 준비 가이드</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    선택한 지역에 맞춰 비자 신청부터 출국 준비까지 단계별 체크리스트를 자동으로 생성합니다. 
                    사용자의 출국 예정일에 맞춰 타임라인도 제공합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">기술 스택</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm rounded-lg font-semibold">FastAPI</span>
                    <span className="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm rounded-lg font-semibold">Python</span>
                    <span className="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm rounded-lg font-semibold">PostgreSQL</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm rounded-lg font-semibold">Next.js</span>
                    <span className="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm rounded-lg font-semibold">TypeScript</span>
                    <span className="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm rounded-lg font-semibold">React</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">AI/ML</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm rounded-lg font-semibold">OpenAI API</span>
                    <span className="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm rounded-lg font-semibold">LangChain</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">Infra</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm rounded-lg font-semibold">Docker</span>
                    <span className="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm rounded-lg font-semibold">AWS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Challenges */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">기술적 도전과 해결</h2>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">1. AI 응답의 일관성 유지</h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">
                    <strong className="text-slate-900 dark:text-white">문제:</strong> OpenAI API의 응답이 매번 달라져 사용자 경험이 일관되지 않았습니다.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-900 dark:text-white">해결:</strong> 프롬프트 엔지니어링을 통해 응답 구조를 표준화하고, 
                    temperature 파라미터를 조정하여 창의성과 일관성의 균형을 맞췄습니다. 
                    또한 Few-shot Learning 기법을 활용하여 원하는 형식의 응답을 유도했습니다.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">2. 점수 산출 알고리즘 최적화</h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">
                    <strong className="text-slate-900 dark:text-white">문제:</strong> 다양한 지표를 어떻게 정량화하고 가중치를 부여할지가 과제였습니다.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-900 dark:text-white">해결:</strong> Min-Max Normalization으로 각 지표를 0-100 범위로 정규화하고, 
                    사용자가 슬라이더로 가중치를 조절할 수 있게 했습니다. 
                    베타 테스터들의 피드백을 반영하여 기본 가중치를 설정했습니다.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">3. API 비용 최적화</h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">
                    <strong className="text-slate-900 dark:text-white">문제:</strong> OpenAI API 호출이 많아지면서 비용이 증가했습니다.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-900 dark:text-white">해결:</strong> Redis를 도입하여 자주 요청되는 지역 조합에 대한 응답을 캐싱했습니다. 
                    또한 프롬프트 길이를 최적화하고, 스트리밍 방식으로 응답 속도를 개선하여 사용자 경험을 향상시켰습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-16 p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">성과 및 배운 점</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">50+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">베타 테스터</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">95%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">추천 만족도</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">3개월</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">개발 기간</div>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                이 프로젝트를 통해 LLM을 실제 서비스에 통합하는 방법을 배웠습니다. 
                특히 프롬프트 엔지니어링의 중요성과 AI 응답의 품질을 일관되게 유지하는 방법을 체득했습니다. 
                또한 사용자 피드백을 빠르게 반영하여 서비스를 개선하는 애자일 개발 프로세스를 경험했습니다.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://github.com/GangJiyeon/whalley-score-engine"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-lg font-bold hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                View on GitHub
              </a>
              <a 
                href="/" 
                className="flex-1 px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-center"
              >
                Back to Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WallyScoreDetail;