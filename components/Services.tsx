
import React from 'react';
import { SERVICES, ICON_MAP } from '../constants';
import { SectionId } from '../types';

export const Services: React.FC = () => {
  return (
    <section id={SectionId.Services} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">World-Class Tech Services</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We provide a comprehensive suite of digital solutions designed to help your business 
            thrive in an increasingly competitive technological landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {ICON_MAP[service.icon]}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
              <a href={`#${SectionId.Contact}`} className="mt-6 inline-flex items-center text-blue-600 font-semibold text-sm hover:underline">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
