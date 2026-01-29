
import React from 'react';
import { Rocket, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Sahay<span className="text-blue-600">InfoTech</span>
              </span>
            </a>
            <p className="text-slate-500 mb-8 max-w-xs">
              Empowering businesses through digital excellence and sustainable innovation since 2018.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Services</h5>
            <ul className="space-y-4">
              {['Custom Software', 'AI & ML', 'Cloud Solutions', 'Cybersecurity', 'Data Analytics'].map((item) => (
                <li key={item}><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Company</h5>
            <ul className="space-y-4">
              {['About Us', 'Case Studies', 'Careers', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Newsletter</h5>
            <p className="text-slate-500 mb-4 text-sm">Join our newsletter to stay updated on tech trends.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-50 border border-slate-200 rounded-l-xl px-4 py-2 w-full outline-none focus:ring-1 focus:ring-blue-600 transition-all text-sm"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-xl font-bold text-sm hover:bg-blue-700 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm">
          <p>© 2024 Sahay InfoTech. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built with ❤️ for Innovation.</p>
        </div>
      </div>
    </footer>
  );
};
