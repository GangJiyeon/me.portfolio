export interface Project {
  id: string;
  title: string;
  description: string;
  period: string;
  tags: string[];
  role: string;
  learnings: string;
  image: string;
  category: 'backend' | 'game' | 'ai';
  githubUrl?: string;
  demoUrl?: string;
}

export interface CareerItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string[];
  type: 'education' | 'work';
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SiteContent {
  projects: Project[];
  career: CareerItem[];
  skills: SkillCategory[];
  nav: { [key: string]: string };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    btn1: string;
    btn2: string;
  };
  about: {
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
  portfolio: {
    title: string;
    subtitle: string;
    tabs: { [key: string]: string };
  };
  skillsSection: {
    title: string;
    subtitle: string;
  };
  careerSection: {
    title: string;
    subtitle: string;
  };
  footer: {
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
