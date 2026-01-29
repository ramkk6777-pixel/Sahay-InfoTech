
import React from 'react';
import { TESTIMONIALS, STATS } from '../constants';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y border-slate-100 py-12">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Client Trust</h2>
          <h3 className="text-4xl font-bold text-slate-900">What Our Partners Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center space-x-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h5 className="font-bold text-slate-900">{t.name}</h5>
                  <p className="text-sm text-slate-500">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
