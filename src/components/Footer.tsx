import React from 'react';
import { Logo } from './Logo';
import { useShop } from '../context/ShopContext';
import { MapPin, Mail, Phone, Flame, Trophy, Shield, HelpCircle } from 'lucide-react';

export function Footer({ className = '' }: { className?: string }) {
  const { setCategoryAndGroup, setView } = useShop();

  const handleCategorySelect = (category: string) => {
    setCategoryAndGroup(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (view: 'landing' | 'shop', sectionId?: string) => {
    setView(view);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className={`bg-[#050515] border-t-2 border-neonpink text-gray-400 text-sm font-sans ${className}`}>
      
      {/* Upper features container */}
      <div className="border-b border-white/5 bg-[#080820]/60 p-6 md:p-8 backdrop-blur-md">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 bg-[#0c0c28] p-4 rounded-xl border border-neonpink/30 hover:border-neonpink/60 transition-all glow-pink/5">
            <div className="p-3 bg-neonpink/10 rounded-full text-neonpink">
              <Shield className="w-5 h-5 filter drop-shadow-[0_0_5px_rgba(255,0,127,0.5)]" />
            </div>
            <div>
              <h4 className="text-white text-xs font-bold font-mono tracking-wider text-neonpink uppercase">100% AUTHENTIC GUARANTEED</h4>
              <p className="text-[11px] text-gray-300 mt-0.5 font-medium leading-relaxed">Every pack, booster box, and action figure is imported from official Tokyo publishers directly.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#0c0c28] p-4 rounded-xl border border-neoncyan/30 hover:border-neoncyan/60 transition-all glow-cyan/5">
            <div className="p-3 bg-neoncyan/10 rounded-full text-neoncyan">
              <Trophy className="w-5 h-5 filter drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]" />
            </div>
            <div>
              <h4 className="text-white text-xs font-bold font-mono tracking-wider text-neoncyan uppercase">COLLECTOR GRADE PACKAGING</h4>
              <p className="text-[11px] text-gray-300 mt-0.5 font-medium leading-relaxed">We double-wrap and box all card packs and figures with ultimate caution to guarantee mint arrivals.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#0c0c28] p-4 rounded-xl border border-neongreen/30 hover:border-neongreen/50 transition-all">
            <div className="p-3 bg-neongreen/10 rounded-full text-neongreen">
              <Flame className="w-5 h-5 filter drop-shadow-[0_0_5px_rgba(57,255,20,0.5)]" />
            </div>
            <div>
              <h4 className="text-white text-xs font-bold font-mono tracking-wider text-neongreen uppercase">WORLDWIDE EXPEDITED SHIPPING</h4>
              <p className="text-[11px] text-gray-300 mt-0.5 font-medium leading-relaxed">Full international tracking on all orders with live status emails and PayPal Buyer Protection.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About column */}
        <div className="space-y-4">
          <Logo />
          <p className="text-xs text-gray-400 mt-2 leading-relaxed font-semibold">
            Founded in Akihabara, Tokyo, Akiba Hub is your premier direct pipeline to pristine Japanese and English trading card game packs and high-quality anime collectibles. We source directly so you can pull your absolute holy grail.
          </p>
          <div className="flex items-center gap-2 text-xs text-neongreen pt-1 font-bold">
            <span className="w-2 h-2 rounded-full bg-neongreen animate-pulse shadow-[0_0_8px_#39ff14]"></span>
            <span className="font-mono text-[10px]">CYBER-LINK PROCESSED LIVE</span>
          </div>
        </div>

        {/* Categories helper column */}
        <div>
          <h3 className="text-white font-display font-medium text-xs uppercase tracking-widest border-l-2 border-neonpink pl-2 mb-4">
            Collectibles Catalogue
          </h3>
          <ul className="space-y-2 text-xs font-semibold text-gray-400 font-mono">
            <li>
              <button onClick={() => handleCategorySelect('pokemon-english')} className="hover:text-neonpink hover:underline text-left cursor-pointer transition-colors">
                &gt;_ Pokémon Packs (English)
              </button>
            </li>
            <li>
              <button onClick={() => handleCategorySelect('pokemon-japanese')} className="hover:text-neonpink hover:underline text-left cursor-pointer transition-colors">
                &gt;_ Pokémon Packs (Japanese)
              </button>
            </li>
            <li>
              <button onClick={() => handleCategorySelect('onepiece-english')} className="hover:text-neoncyan hover:underline text-left cursor-pointer transition-colors">
                &gt;_ One Piece English TCG
              </button>
            </li>
            <li>
              <button onClick={() => handleCategorySelect('onepiece-japanese')} className="hover:text-neoncyan hover:underline text-left cursor-pointer transition-colors">
                &gt;_ One Piece Japanese TCG
              </button>
            </li>
            <li>
              <button onClick={() => handleCategorySelect('action-fig')} className="hover:text-neongreen hover:underline text-left cursor-pointer transition-colors">
                &gt;_ Anime Figures & Dioramas
              </button>
            </li>
          </ul>
        </div>

        {/* Support links column */}
        <div>
          <h3 className="text-white font-display font-medium text-xs uppercase tracking-widest border-l-2 border-neonyellow pl-2 mb-4">
            Customer Care
          </h3>
          <ul className="space-y-2 text-xs font-semibold text-gray-400 font-mono">
            <li>
              <button onClick={() => handleNavClick('landing')} className="hover:text-neonyellow hover:underline text-left cursor-pointer transition-colors">
                &gt;_ Home Matrix
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('landing', 'about-section')} className="hover:text-neonyellow hover:underline text-left cursor-pointer transition-colors">
                &gt;_ Our Akiba Mission
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('landing', 'contact-section')} className="hover:text-neonyellow hover:underline text-left cursor-pointer transition-colors">
                &gt;_ Support Terminal
              </button>
            </li>
            <li>
              <span className="text-neoncyan flex items-center gap-1 font-semibold">
                <HelpCircle className="w-3.5 h-3.5" />
                PayPal Sandbox Secured
              </span>
            </li>
          </ul>
        </div>

        {/* Contact information column */}
        <div>
          <h3 className="text-white font-display font-medium text-xs uppercase tracking-widest border-l-2 border-neoncyan pl-2 mb-4">
            Tokyo Headquarters
          </h3>
          <ul className="space-y-3 text-xs font-semibold text-gray-300">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-neonpink flex-shrink-0 mt-0.5" />
              <span className="font-mono text-xs text-gray-400">1-12-3 Sotokanda, Chiyoda-ku, Tokyo, Japan 101-0021 (Main Akihabara Storefront)</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-neoncyan flex-shrink-0" />
              <span className="hover:text-neoncyan transition-colors font-mono">support@akibahub.jp</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-neongreen flex-shrink-0" />
              <span className="font-mono">+81 3-5555-0199</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Legal copy block */}
      <div className="bg-[#02020a] border-t border-white/5 py-6 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px]">
          <p>© {new Date().getFullYear()} Akiba Hub Collectibles. System Version 4.0.9 (Cyber Vibe).</p>
          <p className="max-w-md text-center sm:text-right leading-relaxed text-gray-600">
            All Pokémon, Pikachu, and One Piece artwork and trademarks remain property of Nintendo, Game Freak, Bandai Namco, Shueisha, or Toei Animation. No corporate affiliation implied.
          </p>
        </div>
      </div>
    </footer>
  );
}
