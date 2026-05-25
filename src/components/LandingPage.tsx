import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data';
import { Sparkles, ArrowRight, ShieldCheck, Mail, Send, Trophy, Flame, Shield, HelpCircle, Check, Star } from 'lucide-react';

export function LandingPage() {
  const { setCategoryAndGroup, setView, addToCart } = useShop();

  // Contact us form states
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [contactSuccess, setContactSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSuccess(true);
    setTimeout(() => {
      setContactForm({ name: '', email: '', message: '' });
      setContactSuccess(false);
    }, 4000);
  };

  // Pre-filter featured products
  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Cyber Hero Spotlight Section */}
      <section className="relative min-h-[92vh] flex items-center bg-[#020208] overflow-hidden pt-16">
        
        {/* Animated grid cyber floor background element */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,190,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,190,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Holographic lens flare effects */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neonpink/10 rounded-full filter blur-3xl opacity-60 animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-neoncyan/10 rounded-full filter blur-3xl opacity-60 animate-pulse pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12 lg:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Column Text info */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 bg-neonpink/10 border border-neonpink text-neonpink px-3.5 py-1 rounded-sm text-[10px] font-mono font-bold tracking-widest uppercase shadow-[0_0_8px_rgba(255,0,127,0.3)]">
                <Sparkles className="w-3.5 h-3.5 animate-spin" /> SYSTEM LINK // AKIHABARA DIRECT IMPORT
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[4.50rem] font-display font-black tracking-tight leading-[1.02] italic uppercase text-white">
                PULL THE HOLY <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonpink via-neonpurple to-neoncyan leading-none drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">GRAILS</span> DIRECTLY FROM TOKYO
              </h1>
              
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-medium">
                No scaled packs, zero tampered shells. Akiba Hub delivers strictly factory-sealed booster packs, rare premium box-breaks, and exquisite anime collectibles direct from Akihabara, Tokyo. 100% authentic protocol locked.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 font-mono">
                <button
                  id="hero-shop-cta"
                  onClick={() => setView('shop')}
                  className="w-full sm:w-auto px-8 py-3.5 bg-neoncyan text-slate-950 font-bold text-xs tracking-widest rounded-md border border-neoncyan shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.7)] hover:bg-[#00d0e0] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  INITIALIZE SHOP CATALOGUE
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  id="hero-featured-cta"
                  onClick={() => {
                    const el = document.getElementById('about-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-neonpink hover:text-white border border-neonpink hover:bg-neonpink/10 transition-all font-bold text-xs tracking-widest rounded-md shadow-[0_0_8px_rgba(255,0,127,0.15)] cursor-pointer"
                >
                  READ OUR PROTOCOL ARCHIVE
                </button>
              </div>

              {/* live details ribbon */}
              <div className="pt-6 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 border-t border-white/10 text-left font-mono text-[9px] text-gray-400">
                <div>
                  <span className="font-extrabold text-neonpink text-xs block">&gt; 100.0%</span>
                  <span>AUTHENTIC PROTOCOL</span>
                </div>
                <div>
                  <span className="font-extrabold text-neoncyan text-xs block">&gt; EXPRES AIR</span>
                  <span>COURIER VAULT CONDUIT</span>
                </div>
                <div>
                  <span className="font-extrabold text-neonyellow text-xs block">&gt; PURE TCG</span>
                  <span>UNSCALED MINT PACKS</span>
                </div>
              </div>
            </div>

            {/* Hero Right Column Visual cards image placeholder with tech frame */}
            <div className="lg:col-span-5 relative w-full h-[340px] sm:h-[420px] flex items-center justify-center">
              
              <div className="absolute w-[270px] h-[350px] bg-[#07071a] border-2 border-neonpink rounded-xl rotate-[-6deg] translate-x-[-30px] shadow-[0_0_20px_rgba(255,0,127,0.35)] overflow-hidden group hover:rotate-0 hover:translate-x-0 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1627856013091-fed6e4e30025?w=500&auto=format&fit=crop&q=80"
                  alt="Pokemon card packs"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all animate-[pulse_6s_infinite] group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0a0a28]/95 p-3 rounded border border-neonpink z-20">
                  <span className="text-[9px] font-mono font-black text-neonpink tracking-widest block font-bold">POKÉMON ORIGINAL 151</span>
                  <span className="text-[8px] text-gray-300 block mt-0.5 font-bold font-mono">SEALED JPN EDITION // SECURED</span>
                </div>
              </div>
              
              <div className="absolute w-[270px] h-[350px] bg-[#07071a] border-2 border-neoncyan rounded-xl rotate-[6deg] translate-x-[30px] translate-y-4 shadow-[0_0_20px_rgba(0,240,255,0.35)] overflow-hidden group hover:rotate-0 hover:translate-x-0 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1559897200-b0ebb809f72e?w=500&auto=format&fit=crop&q=80"
                  alt="Anime figure Luffy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all animate-[pulse_8s_infinite] group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0a0a28]/95 p-3 rounded border border-neoncyan z-20">
                  <span className="text-[9px] font-mono font-black text-neoncyan tracking-widest block font-bold">LUFFY GEAR 5 STATUE</span>
                  <span className="text-[8px] text-gray-300 block mt-0.5 font-bold font-mono">SCALE PVC MODEL // VAULTED</span>
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </section>

      {/* 2. Main different Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-2 mb-12">
          <span className="text-[9px] font-mono tracking-widest text-[#00f0ff] font-bold uppercase py-1 bg-neoncyan/10 border border-neoncyan/30 px-3 rounded-md shadow-[0_0_8px_rgba(0,240,255,0.1)]">
            MAIN_ROUTE: CATEGORY_QUERY_SELECTORS
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-wider uppercase">
            CHOOSE YOUR INTERACTIVE LANE
          </h2>
          <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed font-sans font-semibold">
            Choose your collection portal below. On interactive select, you will be piped straight to our real-time inventory terminal with live availability.
          </p>
        </div>

        {/* Categories cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              id: 'pokemon-english',
              title: 'Pokémon English',
              accent: 'border-neonpink/30 hover:border-neonpink bg-[#090924] hover:shadow-[0_0_15px_rgba(255,0,127,0.25)]',
              img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80',
              desc: 'English print packs with original silver foils.',
              badge: 'USA STANDARD',
              emoji: '⚡'
            },
            {
              id: 'pokemon-japanese',
              title: 'Pokémon Japanese',
              accent: 'border-neoncyan/30 hover:border-neoncyan bg-[#090924] hover:shadow-[0_0_15px_rgba(0,240,255,0.25)]',
              img: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80',
              desc: 'Pristine textured imports with iconic gold seals.',
              badge: 'TOKYO DIRECT',
              emoji: '⛩️'
            },
            {
              id: 'onepiece-english',
              title: 'One Piece English',
              accent: 'border-neonpink/30 hover:border-neonpink bg-[#090924] hover:shadow-[0_0_15px_rgba(255,0,127,0.25)]',
              img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
              desc: 'Manga themed game card packs in western print.',
              badge: 'USA STANDARD',
              emoji: '🏴‍☠️'
            },
            {
              id: 'onepiece-japanese',
              title: 'One Piece Japanese',
              accent: 'border-neoncyan/30 hover:border-neoncyan bg-[#090924] hover:shadow-[0_0_15px_rgba(0,240,255,0.25)]',
              img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&auto=format&fit=crop&q=80',
              desc: 'Premium holo Japanese collectibles and box-toppers.',
              badge: 'TOKYO DIRECT',
              emoji: '⚔️'
            },
            {
              id: 'action-fig',
              title: 'Action Figures',
              accent: 'border-neonyellow/30 hover:border-neonyellow bg-[#090924] hover:shadow-[0_0_15px_rgba(254,254,0,0.25)]',
              img: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop&q=80',
              desc: 'Categorized by anime. Beautiful scale sculptures.',
              badge: 'PVC DIORAMA',
              emoji: '👾'
            }
          ].map((cat) => (
            <div
              key={cat.id}
              onClick={() => setCategoryAndGroup(cat.id)}
              className={`group flex flex-col justify-between border rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.03] cursor-pointer ${cat.accent}`}
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-950 border-b border-white/5">
                <img
                  src={cat.img}
                  alt={cat.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter brightness-90 group-hover:brightness-100"
                />
                <span className="absolute top-2 left-2 bg-[#050518] border border-neoncyan/50 text-neoncyan font-mono text-[8px] uppercase font-black px-1.5 py-0.5 rounded shadow-sm">
                  {cat.badge}
                </span>
                <span className="absolute bottom-2 right-2 text-xs bg-[#050518] text-white p-1 rounded-full border border-white/5 shadow-sm">
                  {cat.emoji}
                </span>
              </div>
              
              <div className="p-4 space-y-1 bg-[#050516]/90">
                <h3 className="text-xs font-black font-display text-white uppercase tracking-wider group-hover:text-neoncyan transition-colors">
                  {cat.title}
                </h3>
                <p className="text-[10px] text-gray-400 font-semibold leading-normal line-clamp-2">
                  {cat.desc}
                </p>
                <div className="text-[9px] text-neoncyan font-mono font-bold pt-3 flex items-center gap-1 transition-all">
                  &gt; LINK_PORTAL <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured Products showcase */}
      <section className="bg-[#05051a]/40 border-y border-white/5 py-16 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
            <div>
              <span className="text-[9px] font-mono tracking-widest text-neonpink font-bold uppercase block bg-neonpink/10 border border-neonpink/30 px-2.5 py-0.5 rounded-md inline-block shadow-[0_0_8px_rgba(255,0,127,0.15)]">
                AUTHENTICATION SECURED // SEAL PROTOCOL
              </span>
              <h2 className="text-2xl font-display font-medium text-white tracking-widest uppercase mt-2">
                FEATURED TOKYO PRODUCTS
              </h2>
            </div>
            <button
              onClick={() => setView('shop')}
              className="text-xs font-mono font-bold text-neoncyan hover:text-neonpink transition-all flex items-center gap-1 cursor-pointer"
            >
              &gt;_ ACCESS FULL VAULT <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {featuredProducts.length === 0 ? (
            <div className="py-12 px-6 text-center bg-[#04041c] border border-white/10 rounded-xl p-8 max-w-2xl mx-auto shadow-xl">
              <span className="text-3xl animate-pulse block mb-4">🚚</span>
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider mb-2">
                Inventory Refueling In Progress
              </h3>
              <p className="text-xs text-gray-400 leading-normal max-w-md mx-auto">
                Our latest batch of direct-import Japanese collectibles is currently unloading. The stock is currently being imported and checked for pristine quality and perfect factory-seals. Check back in a few moments!
              </p>
              <div className="mt-6 flex items-center justify-center gap-2 max-w-xs mx-auto">
                <div className="w-2.5 h-2.5 bg-neonpink rounded-full animate-ping"></div>
                <span className="text-[10px] font-mono font-bold text-neonpink tracking-wider">
                  IMPORT STREAM BUFFERING
                </span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((p) => (
                <div key={p.id} className="group bg-[#040416] border border-white/10 rounded-xl overflow-hidden shadow-xl hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:border-neoncyan/50 duration-300 flex flex-col justify-between">
                  
                  <div className="relative aspect-4/3 overflow-hidden bg-[#03030c] border-b border-white/5">
                    <img
                      src={p.image}
                      alt={p.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter brightness-90 group-hover:scale-102 transition-transform duration-300"
                    />
                    <span className="absolute top-2 left-2 bg-[#05051c] border border-neoncyan/40 text-neoncyan font-mono text-[8px] font-bold px-2 py-0.5 rounded">
                      {p.releaseYear} SYSTEM_EDITION
                    </span>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between bg-[#040416]/95">
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-neonpink font-mono block tracking-widest">
                        // {p.category.replace('onepiece', 'One Piece').replace('pokemon', 'Pokémon').toUpperCase()}
                      </span>
                      <h3 className="text-xs font-bold text-white line-clamp-1 truncate block font-sans">{p.name}</h3>
                    </div>

                    <div className="pt-3 border-t border-white/5 mt-3 flex items-center justify-between font-mono">
                      <span className="text-xs font-black text-neoncyan">${p.price.toFixed(2)}</span>
                      <button
                        id={`hero-item-add-${p.id}`}
                        onClick={() => addToCart(p)}
                        className="px-3.5 py-1.5 bg-transparent border border-neonpink text-neonpink hover:bg-neonpink hover:text-white rounded text-[10px] font-bold tracking-widest transition-all cursor-pointer shadow-[0_0_8px_rgba(255,0,127,0.15)] hover:shadow-[0_0_15px_rgba(255,0,127,0.45)]"
                      >
                        Instant Add
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 4. "About Us" founding saga section */}
      <section id="about-section" className="scroll-mt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#070720]/80 border border-neonpink/30 hover:border-neonpink/60 rounded-xl p-6 md:p-10 shadow-[0_0_25px_rgba(255,0,127,0.08)] relative overflow-hidden backdrop-blur-md">
          
          <div className="absolute bottom-0 right-0 translate-y-20 translate-x-20 w-48 h-48 bg-neonpink/5 rounded-full filter blur-2xl pointer-events-none"></div>
          
          {/* left visual saga icon details */}
          <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-[#0c0c2a] border border-neoncyan/30 rounded-lg">
            <span className="text-5xl animate-bounce">⛩️</span>
            <span className="text-xs font-mono font-bold text-neoncyan mt-3 block tracking-widest">TOKYO CENTRAL GRID</span>
            <span className="text-[9px] font-mono text-gray-400 mt-1 block">Akihabara Sotokanda Segment</span>
          </div>

          {/* right content column */}
          <div className="md:col-span-8 space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-[#00f0ff] font-bold">
              // LOG_ARCHIVE: AKIBA_HUB_SAGA_INIT
            </span>
            <h2 className="text-2xl font-display font-medium text-white tracking-widest uppercase leading-none">
              Direct Tokyo Pipelines to Your Deck
            </h2>
            <p className="text-xs text-gray-300 leading-relaxed font-sans font-medium">
              Founded by three lifelong collectors in Akihabara, Tokyo, Akiba Hub was built on a single hardware protocols: <span className="text-neonpink font-bold">strictly countering unboxed scalers and scaled single booster foils.</span> In the collectibles segment, pulls represent dreams. When packs are analyzed or weighed, those matrices are corrupted.
            </p>
            <p className="text-xs text-gray-300 leading-relaxed font-sans font-medium">
              That’s why Akiba Hub acts as a certified <span className="text-neoncyan font-bold font-mono">SEALED VAULT PIPELINE</span>. Every booster box, card pack, and high-fidelity anime figure is loaded directly from official publishers (The Pokémon Company, Bandai Namco Japan, and official European syndicates). Everything is packaged inside anti-static, clean glass cases before direct courier transmission. Yes, we collect under active validation blocks.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5 font-mono text-[9px] text-[#00f0ff]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-neongreen" />
                No weighted packs
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-neongreen" />
                Clean-air vault storage
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-neongreen" />
                Verify video packing
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. "Contact Us" interactive form section */}
      <section id="contact-section" className="scroll-mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-2 mb-10">
          <span className="text-[9px] font-mono tracking-widest text-neonyellow font-bold uppercase py-1 bg-neonyellow/10 border border-neonyellow/30 px-3.5 rounded-md shadow-[0_0_8px_rgba(254,254,0,0.15)] flex justify-center items-center max-w-fit mx-auto self-center">
            SYS: STREAMS_SUPPORT_DESK
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-widest uppercase">
            CONNECT TO THE LIVE TERMINAL
          </h2>
          <p className="text-xs text-gray-400 max-w-md mx-auto font-sans font-semibold">
            Have queries regarding upcoming release waves, Japanese pull rate ratios, or wholesale case packages? Signal our collectors team immediately!
          </p>
        </div>

        <div className="bg-[#05051c]/80 border border-neoncyan/30 rounded-xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-neoncyan/5 rounded-full filter blur-xl pointer-events-none" />
          
          <form onSubmit={handleContactSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            
            <div className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-[10px] text-[#00f0ff] uppercase mb-1 tracking-widest font-bold">Your Collector Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ash Ketchum"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full bg-[#080828] border border-white/10 hover:border-white/20 focus:border-neoncyan rounded px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-neoncyan font-semibold transition-all"
                />
              </div>
              <div>
                <label className="block text-[10px] text-[#00f0ff] uppercase mb-1 tracking-widest font-bold">Sub-link Mail Address</label>
                <input
                  type="email"
                  required
                  placeholder="ash@pallet.com"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full bg-[#080828] border border-white/10 hover:border-white/20 focus:border-neoncyan rounded px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-neoncyan font-semibold transition-all"
                />
              </div>
            </div>

            <div className="font-mono text-xs">
              <label className="block text-[10px] text-[#00f0ff] uppercase mb-1 tracking-widest font-bold">Detailed Signal message</label>
              <textarea
                required
                rows={4}
                placeholder="Signal details regarding booster boxes, action figures, custom import request..."
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full bg-[#080828] border border-white/10 hover:border-white/20 focus:border-neoncyan rounded px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-neoncyan font-semibold transition-all"
              />
            </div>

            <div className="md:col-span-2 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[10px] text-neonpink font-bold font-mono flex items-center gap-1">
                <Mail className="w-4 h-4 text-neonpink filter drop-shadow-[0_0_3px_#ff007f]" /> EST RESPONSE LATENCY: &lt; 4 HOURS ENCRYPTED
              </span>
              
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-neonpink hover:bg-neonpink/90 text-white border border-neonpink font-mono font-bold text-xs tracking-wider rounded shadow-[0_0_15px_rgba(255,0,127,0.3)] hover:shadow-[0_0_20px_rgba(255,0,127,0.6)] cursor-pointer transition-all flex items-center justify-center gap-1.5"
                disabled={contactSuccess}
              >
                <Send className="w-3.5 h-3.5" />
                BROADCAST SIGNAL OUT
              </button>
            </div>

          </form>

          {contactSuccess && (
            <div className="mt-6 p-4 bg-neongreen/10 border border-neongreen/30 text-neongreen rounded-lg text-xs text-center font-bold font-mono flex items-center justify-center gap-2 animate-bounce shadow-[0_0_10px_rgba(57,255,20,0.1)]">
              <Check className="w-4 h-4" /> BROADCAST COMPLETED! Our Akiba HQ crew is deciphering your frequency link. Standard dispatch mail incoming shortly!
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
