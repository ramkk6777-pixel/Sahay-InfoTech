
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AISolutionsAdvisor } from './components/AISolutionsAdvisor';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <AISolutionsAdvisor />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
