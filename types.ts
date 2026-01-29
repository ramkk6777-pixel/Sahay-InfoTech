
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum SectionId {
  Home = 'home',
  Services = 'services',
  About = 'about',
  AIAdvisor = 'ai-advisor',
  Contact = 'contact'
}
