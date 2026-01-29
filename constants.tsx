
import React from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Cloud, 
  ShieldCheck, 
  Database, 
  Smartphone,
  CheckCircle2,
  Users,
  Trophy,
  Activity
} from 'lucide-react';
import { Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'software-dev',
    title: 'Custom Software Development',
    description: 'Bespoke web and mobile applications tailored to your specific business workflows and user needs.',
    icon: 'Code2'
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Transforming data into actionable insights using advanced predictive models and generative AI integration.',
    icon: 'BrainCircuit'
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud architecture and seamless migration services for AWS, Azure, and Google Cloud.',
    icon: 'Cloud'
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    description: 'End-to-end security audits, threat detection, and compliance management to protect your digital assets.',
    icon: 'ShieldCheck'
  },
  {
    id: 'data',
    title: 'Data Analytics',
    description: 'Advanced data engineering and visualization to help you make data-driven decisions at speed.',
    icon: 'Database'
  },
  {
    id: 'mobile',
    title: 'Mobile Solutions',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.',
    icon: 'Smartphone'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CTO',
    company: 'FinEdge Solutions',
    content: 'Sahay InfoTech revolutionized our backend infrastructure. Their team is exceptionally talented and responsive.',
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder',
    company: 'EcoStream',
    content: 'The AI advisor suggested exactly what we needed to scale our logistics platform. Highly recommended!',
    avatar: 'https://picsum.photos/seed/michael/100/100'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Operations Lead',
    company: 'GlobalLogistics',
    content: 'Professional, innovative, and thorough. They don\'t just build code; they build business value.',
    avatar: 'https://picsum.photos/seed/elena/100/100'
  }
];

export const STATS = [
  { label: 'Successful Projects', value: '250+', icon: <CheckCircle2 className="w-6 h-6 text-blue-600" /> },
  { label: 'Happy Clients', value: '120+', icon: <Users className="w-6 h-6 text-blue-600" /> },
  { label: 'Industry Awards', value: '15+', icon: <Trophy className="w-6 h-6 text-blue-600" /> },
  { label: 'System Uptime', value: '99.9%', icon: <Activity className="w-6 h-6 text-blue-600" /> },
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-8 h-8" />,
  BrainCircuit: <BrainCircuit className="w-8 h-8" />,
  Cloud: <Cloud className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  Database: <Database className="w-8 h-8" />,
  Smartphone: <Smartphone className="w-8 h-8" />,
};
