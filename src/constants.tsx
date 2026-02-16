import { SiteContent } from './types';

export const CONTENT: { ko: SiteContent; en: SiteContent } = {
  ko: {
    nav: { home: '홈', about: '소개', skills: '기술', portfolio: '포트폴리오', history: '경력' },
    hero: {
      badge: '백엔드 개발자 **강지연**',
      title1: '코드로 **세상과 연결**되는,',
      title2: '개발자 **강지연**입니다.',
      desc: '견고한 백엔드 로직 위에 **직관적인 경험**을 담습니다. 빠르게 변화하는 기술을 배우고, 책과 생명과학에서 얻은 통찰을 코드에 녹여냅니다.',
      btn1: '프로젝트 보기',
      btn2: '더 알아보기'
    },
    about: {
      title: 'About Me',
      badge: 'Build, Learn, Grow',
      heading: '복잡한 문제를 **명확한 시스템**으로 풀어내는 개발자입니다.',
      p1: '저는 책을 읽고, 동물을 관찰하고, 다양한 문화를 접하며 세상을 이해합니다. 식물생명과학을 전공하며 배운 **생명의 시스템적 사고**가 지금의 개발 철학에 녹아있습니다.',
      p2: '빠르게 변화하는 기술을 공부하는 걸 즐기고, 배운 것을 바로 적용하는 것을 좋아합니다. 워킹홀리데이를 꿈꾸는 이들을 위한 **Wally Score**, 게임 개발자들을 위한 **Dot Studio**, 그리고 AI 기반 협업 도구인 **AI Company**를 만들며 실질적인 문제를 해결하고 있습니다.',
      p3: '백엔드 개발자로서 **안정적인 데이터 흐름**을 설계하되, 사용자가 직접 체감하는 **경험의 가치**를 놓치지 않으려 합니다.',
      loves: '관심사',
      lovesVal: '독서 · 동물 · 문화',
      lang: '언어',
      langVal: 'IELTS 7.0'
    },
    portfolio: {
      title: 'Selected Projects',
      subtitle: '문제를 정의하고, 기술로 **해결**한 프로젝트들입니다.',
      tabs: { all: '전체', backend: 'Backend', game: 'Game Dev', ai: 'Vibe Coding' }
    },
    skillsSection: {
      title: 'My Toolkit',
      subtitle: '백엔드의 **안정성**과 프론트엔드의 **유연함**을 함께 추구합니다.'
    },
    careerSection: {
      title: 'My Journey',
      subtitle: '끊임없이 배우고 성장하는 **개발자의 기록**입니다.'
    },
    projects: [
      {
        id: 'ai-company',
        title: 'AI Company (바이브코딩)',
        period: '2024.09 - 진행중',
        description: '여러 AI 모델을 연결해 나만의 **가상 회사**를 만드는 플랫폼입니다. 프로젝트별로 부서를 구성하고, AI 직원을 고용해 업무를 분담하며 협업할 수 있습니다.',
        tags: ['FastAPI', 'Next.js', 'OpenAI', 'Claude API', 'WebSocket'],
        role: 'AI 연동 아키텍처 설계 및 실시간 협업 시스템 구현',
        learnings: '여러 AI 모델의 특성을 파악하고, **컨텍스트를 유지하는 대화형 워크플로우**를 설계했습니다.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
        category: 'ai'
      },
      {
        id: 'wally-score',
        title: '월리스코어 (Walley Score)',
        period: '2024.01 - 2024.03',
        description: '워킹홀리데이 희망자를 위한 **지역별 점수 산출 및 AI 추천 서비스**입니다. 개인의 목표와 선호도를 분석해 최적의 지역과 준비 가이드를 제안합니다.',
        tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'OpenAI API'],
        role: 'RESTful API 설계 및 AI 기반 추천 알고리즘 구현',
        learnings: 'LLM을 활용한 **개인화된 응답 생성** 시스템을 구축했습니다.',
        image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=1200',
        category: 'backend',
        githubUrl: 'https://github.com/GangJiyeon/whalley-score-engine'
      },
      {
        id: 'wally-commu',
        title: '월리커뮤 (Walley Commu)',
        period: '2023.11 - 2024.01',
        description: '워킹홀리데이를 주제로 한 **커뮤니티 플랫폼**입니다. 나만의 캐릭터와 공간을 꾸며 다른 사용자들과 소통하고, Wally Coin 경제 시스템으로 Dot Studio 에셋을 거래할 수 있습니다.',
        tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'Vector DB', 'WebSocket'],
        role: '실시간 채팅 인프라 및 가상 화폐 경제 시스템 설계',
        learnings: 'Dot Studio와 **마켓플레이스를 연동**하여 에셋 생태계를 구축했습니다.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        category: 'backend',
        githubUrl: 'https://github.com/GangJiyeon/whalley'
      },
      {
        id: 'schedule-manager',
        title: '스케줄 관리 시스템',
        period: '2022.07 - 2022.09 / 리팩토링 진행중',
        description: 'Java Spring 기반 **일정 관리 웹 애플리케이션**입니다. 사용자별 일정 등록, 수정, 삭제 및 알림 기능을 제공합니다. 현재 **Spring Boot 3.x + JPA + React**로 모던한 아키텍처로 전환 중입니다.',
        tags: ['Spring Boot', 'JPA', 'MySQL', 'React', 'REST API'],
        role: 'MVC 패턴 기반 CRUD 구현 및 JPA 기반 데이터 계층 리팩토링',
        learnings: 'Spring Framework의 **계층 구조**와 최신 Spring Boot 생태계를 경험했습니다.',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1200',
        category: 'backend',
        githubUrl: 'https://github.com/GangJiyeon/springboot-modernization-2026'
      },
      {
        id: 'isekai-restaurant',
        title: '이세계 식당 (Isekai Restaurant)',
        period: '2024.05 - 2024.08',
        description: '판타지 세계를 탐험하며 재료를 수급하고, **나만의 텃밭**을 가꾸어 손님에게 특별한 요리를 대접하는 **타이쿤 시뮬레이션**입니다.',
        tags: ['Unity', 'C#', 'Firebase', 'Game Design'],
        role: '게임 시스템 설계 및 탐험/재배 로직 구현',
        learnings: '복잡한 **아이템 조합 시스템**과 생산 사이클 최적화를 경험했습니다.',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200',
        category: 'game'
      },
      {
        id: 'dot-studio',
        title: '도트 스튜디오 (Dot Studio)',
        period: '2023.08 - 2023.10',
        description: 'AI가 생성한 초안을 바탕으로 **픽셀 아트를 편집**할 수 있는 웹 에디터입니다. 머리/몸 비율을 선택해 **캐릭터를 조합하고 커스텀**할 수 있으며, 제작된 에셋은 Wally Commu 마켓플레이스로 즉시 연동됩니다.',
        tags: ['TypeScript', 'Canvas API', 'Stable Diffusion', 'Vite'],
        role: 'AI 이미지 변환 알고리즘, 캔버스 렌더링 및 캐릭터 조합 시스템 개발',
        learnings: '**AI 생성 결과물을 실용적인 포맷으로 변환**하고, 사용자가 직관적으로 커스텀할 수 있는 UI를 구현했습니다.',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200',
        category: 'ai'
      }
    ],
    career: [
      {
        id: 'pknu',
        title: '부경대학교 컴퓨터공학과',
        organization: '학사 편입',
        period: '2025 - 2027',
        description: ['자료구조, 알고리즘, 정보보안 등 핵심 CS 역량 강화', '컴퓨터 그래픽스, 양자컴퓨팅, 컴파일러 등 심화 과목 이수', '캡스톤 디자인 프로젝트 수행'],
        type: 'education'
      },
      {
        id: 'adfun',
        title: '웹에이전시 애드펀 (Adfun)',
        organization: '백엔드 개발자',
        period: '2022.10 - 2023.06',
        description: [
          'Flask 기반 실무 API 개발 및 유지보수',  // <- 여기 Flask 명시
          '데이터베이스 쿼리 최적화'
        ],
        type: 'work'
      },
      {
        id: 'mega-it',
        title: 'MEGA IT 자바 백엔드 취업반',
        organization: '교육 수료',
        period: '2022.03 - 2022.09',
        description: ['Spring Framework 기반 MVC 패턴 학습', 'RESTful API 설계 및 구현', 'JSP / Servlet 활용 웹 애플리케이션 개발', 'Python 기초 및 자동화 스크립트 작성'],
        type: 'education'
      },
    ],
    skills: [
      { title: 'Backend', skills: ['FastAPI', 'Python', 'Spring Boot', 'PostgreSQL'] },
      { title: 'Frontend', skills: ['Next.js', 'TypeScript', 'React', 'Tailwind'] },
      { title: 'Cloud & Tools', skills: ['AWS', 'Docker', 'Git', 'CI/CD'] },
      { title: 'Credentials', skills: ['IELTS 7.0', 'AWS Practitioner', 'SQLD'] }
    ],
    footer: {
      heading: '함께 **성장**합시다.',
      desc: '새로운 기술적 도전과 협업은 언제나 환영입니다.',
      connect: 'Connect',
      subscribe: '구독',
      placeholder: '이메일 주소 입력',
      rights: '© 2024 강지연. All rights reserved.',
      blog: 'https://gjy-dev.tistory.com/',
      devBlog: 'https://gangjiyeon.github.io/'
    }
  },
  en: {
    nav: { home: 'Home', about: 'About', skills: 'Skills', portfolio: 'Portfolio', history: 'History' },
    hero: {
      badge: 'Backend Developer **Jiyeon Kang**',
      title1: 'Connecting with the world',
      title2: 'through **code**.',
      desc: 'I build robust backend logic with **intuitive experiences**. I love learning fast-changing tech and integrating insights from books and life sciences into my code.',
      btn1: 'View Projects',
      btn2: 'About Me'
    },
    about: {
      title: 'About Me',
      badge: 'Build, Learn, Grow',
      heading: 'A developer who turns complex problems into **clear systems**.',
      p1: 'I understand the world through books, animals, and diverse cultures. My background in **plant life science** taught me systemic thinking, which now shapes my development philosophy.',
      p2: 'I enjoy studying rapidly evolving technologies and applying what I learn immediately. I solve real problems through projects like **Wally Score** for working holiday seekers, **Dot Studio** for game developers, and **AI Company** for AI-powered collaboration.',
      p3: 'As a backend developer, I design **stable data flows** while never losing sight of the **user experience**.',
      loves: 'Interests',
      lovesVal: 'Reading · Animals · Culture',
      lang: 'Language',
      langVal: 'IELTS 7.0'
    },
    portfolio: {
      title: 'Selected Projects',
      subtitle: 'Defining problems and solving them with **technology**.',
      tabs: { all: 'All', backend: 'Backend', game: 'Game Dev', ai: 'Vibe Coding' }
    },
    skillsSection: {
      title: 'My Toolkit',
      subtitle: 'Pursuing both backend **stability** and frontend **flexibility**.'
    },
    careerSection: {
      title: 'My Journey',
      subtitle: 'The record of a developer who **never stops learning**.'
    },
    projects: [
      {
        id: 'ai-company',
        title: 'AI Company (Vibe Coding)',
        period: '2024.09 - Ongoing',
        description: 'A platform to build your own **virtual company** by connecting multiple AI models. Create departments by project and hire AI employees to distribute and collaborate on tasks.',
        tags: ['FastAPI', 'Next.js', 'OpenAI', 'Claude API', 'WebSocket'],
        role: 'AI Integration Architecture & Real-time Collaboration System',
        learnings: 'Designed **context-aware conversational workflows** by understanding different AI model characteristics.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
        category: 'ai'
      },
      {
        id: 'wally-score',
        title: 'Walley Score',
        period: '2024.01 - 2024.03',
        description: 'A **region scoring & AI recommendation service** for working holiday seekers. Analyzes personal goals and preferences to suggest optimal locations and preparation guides.',
        tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'OpenAI API'],
        role: 'RESTful API Design & AI-based Recommendation Algorithm',
        learnings: 'Built a **personalized response generation system** using LLMs.',
        image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=1200',
        category: 'backend',
        githubUrl: 'https://github.com/GangJiyeon/whalley-score-engine'

      },
      {
        id: 'wally-commu',
        title: 'Walley Commu',
        period: '2023.11 - 2024.01',
        description: 'A **community platform** centered around working holidays. Customize your character and space to interact with others, and trade Dot Studio assets using the Wally Coin economy.',
        tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'Vector DB', 'WebSocket'],
        role: 'Real-time Chat Infrastructure & Virtual Currency Economy Design',
        learnings: 'Built an asset ecosystem by **integrating Dot Studio with a marketplace**.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        category: 'backend',
        githubUrl: 'https://github.com/GangJiyeon/whalley'
      },
      {
        id: 'schedule-manager',
        title: 'Schedule Manager',
        period: '2022.07 - 2022.09 / Refactoring',
        description: 'A **schedule management web app** built with Java Spring. Provides user-specific schedule registration, editing, deletion, and notifications. Currently refactoring with **Spring Boot 3.x + JPA + React** for modern architecture.',
        tags: ['Spring Boot', 'JPA', 'MySQL', 'React', 'REST API'],
        role: 'MVC-based CRUD Implementation & JPA Data Layer Refactoring',
        learnings: 'Experienced Spring Framework\'s **layered architecture** and the modern Spring Boot ecosystem.',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1200',
        category: 'backend',
        githubUrl: 'https://github.com/GangJiyeon/springboot-modernization-2026'
      },
      {
        id: 'isekai-restaurant',
        title: 'Isekai Restaurant',
        period: '2024.05 - 2024.08',
        description: 'A **tycoon simulation** set in a fantasy world. Explore for ingredients, grow your own garden, and serve special dishes to customers.',
        tags: ['Unity', 'C#', 'Firebase', 'Game Design'],
        role: 'Game System Design & Exploration/Farming Logic',
        learnings: 'Optimized complex **item crafting systems** and production cycles.',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200',
        category: 'game'
      },
      {
        id: 'dot-studio',
        title: 'Dot Studio',
        period: '2023.08 - 2023.10',
        description: 'A web-based **pixel art editor** that allows editing based on AI-generated drafts. Choose head-to-body ratios to **combine and customize characters**, with instant marketplace integration to Wally Commu.',
        tags: ['TypeScript', 'Canvas API', 'Stable Diffusion', 'Vite'],
        role: 'AI Image Translation Algorithm, Canvas Rendering & Character Assembly System',
        learnings: 'Built a pipeline to **convert AI outputs into practical formats** and implemented intuitive customization UI.',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200',
        category: 'ai'
      }
    ],
    career: [
      {
        id: 'pknu',
        title: 'PKNU Computer Engineering',
        organization: 'Bachelor Transfer',
        period: '2025 - 2027',
        description: ['Core CS: Data Structures, Algorithms, Information Security', 'Advanced Topics: Computer Graphics, Quantum Computing, Compilers', 'Capstone Design Project'],
        type: 'education'
      },
      {
        id: 'adfun',
        title: 'Adfun Web Agency',
        organization: 'Backend Developer',
        period: '2022.10 - 2023.06',
        description: ['API Development & Maintenance', 'Database Query Optimization'],
        type: 'work'
      },
      {
        id: 'mega-it',
        title: 'MEGA IT Java Backend Course',
        organization: 'Training Completed',
        period: '2022.03 - 2022.09',
        description: ['Spring Framework MVC Pattern', 'RESTful API Design & Implementation', 'Web Apps with JSP / Servlets', 'Python Basics & Automation Scripts'],
        type: 'education'
      },
      {
        id: 'plant-science',
        title: 'Pusan National Univ. Plant Life Science',
        organization: 'Major (Before Transfer)',
        period: '2021',
        description: ['Structural understanding of life systems', 'Experiment design & data analysis skills'],
        type: 'education'
      }
    ],
    skills: [
      { title: 'Backend', skills: ['FastAPI', 'Python', 'Spring Boot', 'PostgreSQL'] },
      { title: 'Frontend', skills: ['Next.js', 'TypeScript', 'React', 'Tailwind'] },
      { title: 'Cloud & Tools', skills: ['AWS', 'Docker', 'Git', 'CI/CD'] },
      { title: 'Credentials', skills: ['IELTS 7.0', 'AWS Practitioner', 'SQLD'] }
    ],
    footer: {
      heading: "Let's **grow** together.",
      desc: 'Always open to new technical challenges and collaboration.',
      connect: 'Connect',
      subscribe: 'Subscribe',
      placeholder: 'Enter your email',
      rights: '© 2024 Jiyeon Kang. All rights reserved.',
      blog: 'https://gjy-dev.tistory.com/',
      devBlog: 'https://gangjiyeon.github.io/'
    }
  }
};
