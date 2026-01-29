
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SectionId } from '../types';

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id={SectionId.Contact} className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-3">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Let's Discuss Your Next <span className="text-blue-500">Innovation</span></h3>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              Ready to take your project to the next level? Fill out the form or reach out to us directly. 
              Our team of expert consultants will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="bg-slate-800 p-4 rounded-2xl">
                  <Mail className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-medium">Email Us</p>
                  <p className="text-xl font-bold">hello@sahayinfotech.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="bg-slate-800 p-4 rounded-2xl">
                  <Phone className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-medium">Call Us</p>
                  <p className="text-xl font-bold">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="bg-slate-800 p-4 rounded-2xl">
                  <MapPin className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-medium">Visit Us</p>
                  <p className="text-xl font-bold">Tech Park, Silicon Valley, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 text-slate-900 shadow-2xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                <div className="bg-green-100 p-4 rounded-full mb-6">
                  <Send className="w-12 h-12 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                <p className="text-slate-600">Thank you for reaching out. We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                    placeholder="Project Inquiry"
                    value={formState.subject}
                    onChange={(e) => setFormState({...formState, subject: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">How can we help?</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
