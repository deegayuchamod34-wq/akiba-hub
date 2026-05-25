import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { Logo } from './Logo';
import { ShoppingCart, Menu, X, ChevronDown, BookOpen, MessageSquare, Flame, Pocket } from 'lucide-react';

export function Header() {
  const { getCartItemsCount, activeView, setView, setCartOpen, setCategoryAndGroup } = useShop();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTcgDropdownOpen, setIsTcgDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: 'landing' | 'shop', sectionId?: string) => {
    setView(view);
    setIsMobileMenuOpen(false);
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

  const handleCategorySelect = (category: string) => {
    setCategoryAndGroup(category);
    setIsMobileMenuOpen(false);
    setIsTcgDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-[#03030c]/85 border-b-2 border-neoncyan/55 backdrop-blur-md shadow-[0_4px_20px_rgba(0,240,255,0.15)] ${
        isScrolled ? 'py-1.5' : 'py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* logo */}
          <div className="cursor-pointer hover:opacity-90 transition-opacity" onClick={() => handleNavClick('landing')}>
            <Logo />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 font-mono">
            <button
              id="nav-home"
              onClick={() => handleNavClick('landing')}
              className={`text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                activeView === 'landing' ? 'text-neoncyan glow-cyan-text' : 'text-gray-400 hover:text-white'
              }`}
            >
              [ HOME ]
            </button>

            {/* shop with dropdown catalog category filter links */}
            <div className="relative group">
              <button
                id="nav-shop-menu"
                onMouseEnter={() => setIsTcgDropdownOpen(true)}
                onClick={() => handleNavClick('shop')}
                className={`flex items-center gap-1 text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                  activeView === 'shop' ? 'text-neoncyan glow-cyan-text' : 'text-gray-400 hover:text-white'
                }`}
              >
                [ CATALOGUE ]
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isTcgDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Flyout dropdown menu */}
              <div
                className="absolute left-0 mt-3 w-60 rounded-lg bg-[#050518] border-2 border-neoncyan/80 shadow-[0_0_20px_rgba(0,240,255,0.25)] p-2 transition-all duration-250 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto text-white backdrop-blur-lg"
                onMouseLeave={() => setIsTcgDropdownOpen(false)}
              >
                <div className="text-[9px] font-mono font-bold tracking-widest text-neonpink px-3 py-1.5 uppercase border-b border-white/5">
                  &gt;_ TRADING CARD PACKS
                </div>
                <button
                  id="dropdown-poke-en"
                  onClick={() => handleCategorySelect('pokemon-english')}
                  className="w-full text-left px-3 py-2 text-xs font-semibold rounded-md hover:bg-neonpink/20 hover:text-white text-gray-300 transition-all flex items-center justify-between cursor-pointer"
                >
                  Pokémon Packs (English)
                  <span className="text-[9px] bg-neonpink text-white px-1.5 py-0.25 rounded-md font-mono font-bold">USA</span>
                </button>
                <button
                  id="dropdown-poke-jp"
                  onClick={() => handleCategorySelect('pokemon-japanese')}
                  className="w-full text-left px-3 py-2 text-xs font-semibold rounded-md hover:bg-neonpink/20 hover:text-white text-gray-300 transition-all flex items-center justify-between cursor-pointer"
                >
                  Pokémon Packs (Japanese)
                  <span className="text-[9px] bg-neoncyan text-slate-950 px-1.5 py-0.25 rounded-md font-mono font-black">JPN</span>
                </button>
                <button
                  id="dropdown-op-en"
                  onClick={() => handleCategorySelect('onepiece-english')}
                  className="w-full text-left px-3 py-2 text-xs font-semibold rounded-md hover:bg-neoncyan/20 hover:text-white text-gray-300 transition-all flex items-center justify-between cursor-pointer"
                >
                  One Piece (English)
                  <span className="text-[9px] bg-neonpink text-white px-1.5 py-0.25 rounded-md font-mono font-bold">USA</span>
                </button>
                <button
                  id="dropdown-op-jp"
                  onClick={() => handleCategorySelect('onepiece-japanese')}
                  className="w-full text-left px-3 py-2 text-xs font-semibold rounded-md hover:bg-neoncyan/20 hover:text-white text-gray-300 transition-all flex items-center justify-between cursor-pointer"
                >
                  One Piece (Japanese)
                  <span className="text-[9px] bg-neoncyan text-slate-950 px-1.5 py-0.25 rounded-md font-mono font-black">JPN</span>
                </button>
 
                <div className="text-[9px] font-mono font-bold tracking-widest text-neonyellow px-3 py-1.5 mt-2 uppercase border-b border-white/5">
                  &gt;_ REALM DIORAMAS
                </div>
                <button
                  id="dropdown-figures"
                  onClick={() => handleCategorySelect('action-fig')}
                  className="w-full text-left px-3 py-2 text-xs font-semibold rounded-md hover:bg-neonyellow/20 hover:text-white text-gray-300 transition-all flex items-center justify-between cursor-pointer"
                >
                  Action Figures (PVCs)
                  <span className="text-[9px] bg-neongreen text-slate-950 px-1.5 py-0.25 rounded-md font-mono font-bold">SCALE</span>
                </button>
              </div>
            </div>
 
            <button
              id="nav-about"
              onClick={() => handleNavClick('landing', 'about-section')}
              className="text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              [ INFO ]
            </button>
 
            <button
              id="nav-contact"
              onClick={() => handleNavClick('landing', 'contact-section')}
              className="text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              [ SUPPORT ]
            </button>
          </nav>
 
          {/* Cart & Mobile menu controller right icons */}
          <div className="flex items-center gap-4">
            
            {/* Cart trigger button styling from layout */}
            <button
              id="header-cart-btn"
              onClick={() => setCartOpen(true)}
              className="relative bg-transparent text-neonpink px-5 py-2.5 rounded-lg font-mono font-bold border border-neonpink/80 hover:bg-neonpink hover:text-white shadow-[0_0_8px_rgba(255,0,127,0.2)] hover:shadow-[0_0_15px_rgba(255,0,127,0.5)] transition-all cursor-pointer text-xs uppercase tracking-widest flex items-center gap-2 group"
              aria-label="Open Shopping Cart"
            >
              <ShoppingCart className="w-3.5 h-3.5 group-hover:scale-110 transition-transform text-neonpink group-hover:text-white" />
              <span>CART ({getCartItemsCount()})</span>
            </button>
 
            {/* mobile menu toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-transparent border-2 border-neoncyan text-neoncyan hover:bg-neoncyan/10 cursor-pointer flex items-center justify-center w-10 h-10 shadow-[0_0_8px_rgba(0,240,255,0.2)]"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#050518]/95 border-b-2 border-neoncyan border-t border-neonpink px-4 pt-3 pb-6 flex flex-col gap-3 shadow-2xl max-h-[85vh] overflow-y-auto text-gray-100 backdrop-blur-lg">
          <button
            onClick={() => handleNavClick('landing')}
            className="text-left px-4 py-2.5 font-bold text-xs tracking-wider font-mono text-neoncyan hover:bg-neoncyan/10 rounded-lg transition-all"
          >
            &gt;_ HOME NODE
          </button>
          <button
            onClick={() => handleNavClick('shop')}
            className="text-left px-4 py-2.5 font-bold text-xs tracking-wider font-mono text-neoncyan hover:bg-neoncyan/10 rounded-lg transition-all"
          >
            &gt;_ ALL PRODUCTS INDEX
          </button>

          <div className="border-t border-white/5 pt-3 pl-3">
            <span className="text-[10px] font-mono tracking-widest text-neonpink font-bold uppercase block py-1">
              [ POKÉMON PACK MODULES ]
            </span>
            <div className="grid grid-cols-2 gap-2 mt-1 pr-3">
              <button
                onClick={() => handleCategorySelect('pokemon-english')}
                className="text-left px-3 py-2 text-xs font-bold bg-[#0c0c28] hover:bg-neonpink/20 border border-white/5 hover:border-neonpink/40 text-gray-300 rounded-md transition-all font-mono"
              >
                + English TCG
              </button>
              <button
                onClick={() => handleCategorySelect('pokemon-japanese')}
                className="text-left px-3 py-2 text-xs font-bold bg-[#0c0c28] hover:bg-neonpink/20 border border-white/5 hover:border-neonpink/40 text-gray-300 rounded-md transition-all font-mono"
              >
                + Japanese TCG
              </button>
            </div>
            
            <span className="text-[10px] font-mono tracking-widest text-[#00f0ff] font-bold uppercase block py-1 mt-3">
              [ ONE PIECE MODULES ]
            </span>
            <div className="grid grid-cols-2 gap-2 mt-1 pr-3">
              <button
                onClick={() => handleCategorySelect('onepiece-english')}
                className="text-left px-3 py-2 text-xs font-bold bg-[#0c0c28] hover:bg-neoncyan/20 border border-white/5 hover:border-neoncyan/40 text-gray-300 rounded-md transition-all font-mono"
              >
                + English OPC
              </button>
              <button
                onClick={() => handleCategorySelect('onepiece-japanese')}
                className="text-left px-3 py-2 text-xs font-bold bg-[#0c0c28] hover:bg-neoncyan/20 border border-white/5 hover:border-neoncyan/40 text-gray-300 rounded-md transition-all font-mono"
              >
                + Japanese OPC
              </button>
            </div>

            <span className="text-[10px] font-mono tracking-widest text-neonyellow font-bold uppercase block py-1 mt-3">
              [ EXTRACTION ASSETS ]
            </span>
            <button
              onClick={() => handleCategorySelect('action-fig')}
              className="w-[calc(100%-12px)] text-left px-3 py-2 text-xs font-bold bg-[#0c0c28] hover:bg-neonyellow/20 border border-white/5 hover:border-neonyellow/40 text-gray-300 rounded-lg flex items-center justify-between transition-colors font-mono"
            >
              + PVC Anime Diorama Units
            </button>
          </div>

          <div className="border-t border-white/5 pt-3 flex flex-col gap-1">
            <button
              onClick={() => handleNavClick('landing', 'about-section')}
              className="text-left px-4 py-2.5 text-xs font-mono font-bold text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              &gt;_ OUR STORY NODE
            </button>
            <button
              onClick={() => handleNavClick('landing', 'contact-section')}
              className="text-left px-4 py-2.5 text-xs font-mono font-bold text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              &gt;_ MAIN NET FEEDBACK
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
