
import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  return (
    <section id={SectionId.Home} className="relative pt-32 pb-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-8 border border-blue-100 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Redefining Digital Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            Building the <span className="text-gradient">Future of Tech</span> One Solution at a Time
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Sahay InfoTech empowers global enterprises with cutting-edge software engineering, 
            intelligent AI integration, and transformative cloud strategies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href={`#${SectionId.Services}`}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center group"
            >
              Explore Our Services
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={`#${SectionId.AIAdvisor}`}
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
            >
              Consult AI Advisor
            </a>
          </div>
        </div>

        {/* Dashboard Preview mockup */}
        <div className="mt-20 relative mx-auto max-w-5xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl overflow-hidden animate-slide-up">
            <img 
              src="https://picsum.photos/seed/tech/1200/600" 
              alt="Dashboard Preview" 
              className="rounded-xl w-full h-auto grayscale-[20%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
