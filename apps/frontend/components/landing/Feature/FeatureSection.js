import React from 'react';
import { Globe, Zap, Smartphone, Target, Download, ChevronRight } from 'lucide-react';

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Why learn with WoFi?</h2>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
          Our unique approach makes language learning feel like a game, but with real results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bento Card: Learn Together */}
        <div className="bg-wofiYellow p-12 rounded-[3.5rem] min-h-[500px] relative overflow-hidden group">
          <div className="relative z-10">
            <div className="bg-black/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Globe className="text-black" size={28} />
            </div>
            <h3 className="text-3xl font-bold mb-4">Learn more <br/>together</h3>
            <p className="text-gray-800 max-w-[280px] leading-relaxed">
              Connect with a global community of learners. Practice speaking with native partners.
            </p>
          </div>
          <div className="absolute -bottom-10 -right-10 w-4/5 h-1/2 bg-white rounded-tl-[3rem] shadow-2xl p-8 transform group-hover:-translate-y-4 transition-transform duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-xl">👤</div>
              <div className="h-3 w-32 bg-gray-100 rounded-full"></div>
            </div>
            <div className="space-y-3">
              <div className="h-3 w-full bg-orange-50 rounded-full"></div>
              <div className="h-3 w-4/5 bg-orange-50 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bento Card: Confident */}
        <div className="bg-wofiGreen p-12 rounded-[3.5rem] min-h-[500px] flex flex-col justify-between">
          <div>
            <div className="bg-black/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="text-black" size={28} />
            </div>
            <h3 className="text-3xl font-bold mb-4">Confident learning <br/>starts here</h3>
            <p className="text-gray-800 max-w-[280px] leading-relaxed">
              Bit-sized lessons that help you build habits and see progress every single day.
            </p>
          </div>
          <div className="bg-white/40 border-2 border-dashed border-green-400/30 rounded-[2rem] h-48 flex items-center justify-center font-bold text-green-700 tracking-wider">
            +250 XP Gained today
          </div>
        </div>

        {/* Tambahkan card lain di sini mengikuti pola yang sama... */}
        
        {/* Full Width Card: Personalized */}
        <div className="md:col-span-2 bg-wofiPeach p-12 rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden">
          <div className="flex-1">
            <h3 className="text-4xl font-bold mb-6">Personalized learning</h3>
            <p className="text-gray-800 text-xl mb-8 leading-relaxed max-w-lg">
              Our AI adapts to your level and learning style, providing challenges that are just right for you.
            </p>
            <button className="bg-black text-white px-8 py-3.5 rounded-full font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors">
              <Download size={18} />
              Get the app
            </button>
          </div>
          <div className="flex-1 w-full h-64 bg-white/30 rounded-[2.5rem] border-4 border-white/50 backdrop-blur-sm flex items-center justify-center">
             <span className="text-2xl font-bold opacity-40 italic">AI DASHBOARD</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;