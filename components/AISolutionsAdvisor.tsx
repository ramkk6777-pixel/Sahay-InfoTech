
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, RefreshCw } from 'lucide-react';
import { ChatMessage, SectionId } from '../types';
import { getAIAdvisorResponse } from '../services/geminiService';

export const AISolutionsAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am your Sahay AI Solutions Advisor. Describe a challenge your business is facing, and I will recommend the best technology solutions from our portfolio.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    const newHistory: ChatMessage[] = [...messages, { role: 'user', text: userMessage }];
    setMessages(newHistory);
    setIsLoading(true);

    const response = await getAIAdvisorResponse(messages, userMessage);
    setMessages([...newHistory, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  const resetChat = () => {
    setMessages([{ role: 'model', text: 'Hello! I am your Sahay AI Solutions Advisor. Describe a challenge your business is facing, and I will recommend the best technology solutions from our portfolio.' }]);
  };

  return (
    <section id={SectionId.AIAdvisor} className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Interactive Consulting</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">AI Solutions Advisor</h3>
            <p className="text-slate-600">
              Not sure where to start? Chat with our intelligent advisor powered by Google Gemini 
              to identify the best tech stack and services for your project goals.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[600px]">
            {/* Header */}
            <div className="bg-slate-900 p-6 flex items-center justify-between text-white">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Advisor Assistant</h4>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-xs text-slate-400 font-medium">Online & Ready</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={resetChat}
                className="p-2 hover:bg-slate-800 rounded-full transition-colors"
                title="Reset conversation"
              >
                <RefreshCw className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50"
            >
              {messages.map((msg, idx) => (
                <div 
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                >
                  <div className={`flex max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-3`}>
                    <div className={`p-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-slate-800 border border-slate-200 shadow-sm'}`}>
                      {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                    </div>
                    <div className={`p-4 rounded-2xl ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-slate-800 border border-slate-200 shadow-sm rounded-tl-none'}`}>
                      <p className="text-sm leading-relaxed whitespace-pre-line">
                        {msg.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start animate-pulse">
                  <div className="flex max-w-[80%] flex-row items-start gap-3">
                    <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-sm">
                      <Bot className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm rounded-tl-none flex items-center space-x-2">
                      <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                      <span className="text-sm text-slate-500 font-medium">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-200">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="e.g. We need to build a secure patient portal for our clinic..."
                  className="w-full pl-6 pr-14 py-4 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all text-slate-900"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="mt-3 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                Powered by Gemini 3 Flash
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
