import React from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle2, Package, Truck, Printer, ShoppingBag, Landmark, MapPin, Check } from 'lucide-react';

export function OrderSuccess() {
  const { currentOrder, setView } = useShop();

  if (!currentOrder) {
    return (
      <div className="pt-28 pb-16 min-h-screen text-center flex flex-col items-center justify-center bg-[#020208] text-white font-mono">
        <span className="text-4xl animate-bounce">🔎</span>
        <h2 className="text-md font-bold text-white uppercase tracking-widest mt-4">// RECORD_NOT_FOUND</h2>
        <p className="text-xs text-gray-400 mt-2 max-w-xs leading-relaxed font-sans font-semibold">
          No order dispatch parameters could be mapped to your current local token session.
        </p>
        <button
          onClick={() => setView('landing')}
          className="mt-6 px-5 py-2.5 bg-neoncyan text-slate-950 font-bold rounded tracking-widest shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all uppercase text-xs"
        >
          RETURN_HOME_LINK
        </button>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-28 pb-16 min-h-screen bg-[#020208] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Success header animations details */}
        <div className="text-center p-8 bg-[#04041c] border border-white/10 rounded-xl shadow-xl overflow-hidden relative mb-8">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-48 h-48 bg-neongreen/5 rounded-full filter blur-2xl pointer-events-none"></div>
          
          <div className="w-16 h-16 bg-neongreen/10 text-neongreen rounded-full flex items-center justify-center mx-auto mb-4 border border-neongreen/30 shadow-[0_0_15px_rgba(57,255,20,0.15)]">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>

          <span className="text-[9px] font-mono select-none tracking-widest text-[#39ff14] font-bold uppercase bg-neongreen/15 border border-neongreen/30 px-3 py-1 rounded">
            PAYMENT_SECURE_CAPTURED
          </span>
          <h1 className="text-2xl font-display font-medium text-white mt-4 leading-tight uppercase tracking-wider">
            TRANSACTION COMPLETED SUCCESSFULLY
          </h1>
          <p className="text-xs text-gray-300 max-w-md mx-auto mt-2 leading-relaxed font-sans font-semibold">
            Your connection details were authenticated. A secure digital tracking codex has been dispatched to your links at <span className="text-neoncyan font-bold underline font-mono">{currentOrder.shippingDetails.email}</span>.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6 p-4 bg-[#08082c] rounded border border-white/5 max-w-md mx-auto font-mono text-[10px]">
            <div className="text-left">
              <span className="text-gray-500 block text-[9px] font-bold uppercase">// HUB_ORDER_ID</span>
              <span className="text-white font-extrabold">{currentOrder.id}</span>
            </div>
            <div className="text-right">
              <span className="text-gray-500 block text-[9px] font-bold uppercase">// PAY_CAPTURE_ID</span>
              <span className="text-neoncyan font-extrabold truncate block">{currentOrder.paymentId}</span>
            </div>
          </div>
        </div>

        {/* Live Delivery Tracker roadmap bar */}
        <div className="bg-[#04041c] border border-white/10 rounded-xl p-6 shadow-xl mb-8">
          <h3 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-6 block border-b border-white/5 pb-2">
            // LIVE_DISPATCH_TIMELINE (Priority Air Logistics)
          </h3>

          <div className="relative flex justify-between items-center pr-2">
            {/* track line gray */}
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[2px] bg-white/10 z-0"></div>
            {/* fill line green */}
            <div className="absolute left-6 w-[28%] top-1/2 -translate-y-1/2 h-[2px] bg-neongreen z-0 shadow-[0_0_8px_#39ff14]"></div>

            {/* steps bubble list */}
            {[
              { label: 'Authorized', desc: 'Secure Gate OK', icon: CheckCircle2, active: true, done: true },
              { label: 'Fulfilling', desc: 'Akiba Depot Vault', icon: Package, active: true, done: false },
              { label: 'Dispatched', desc: 'Tokyo Haneda Int', icon: Truck, active: false, done: false },
              { label: 'Delivered', desc: 'Collector Base', icon: MapPin, active: false, done: false }
            ].map((st) => (
              <div key={st.label} className="relative z-10 flex flex-col items-center font-mono">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                  st.done
                    ? 'bg-neongreen border-neongreen text-slate-950 shadow-[0_0_12px_rgba(57,255,20,0.45)] font-bold'
                    : st.active
                      ? 'bg-transparent border-neoncyan text-neoncyan animate-pulse shadow-[0_0_8px_rgba(0,240,255,0.3)] font-bold'
                      : 'bg-[#08082a] border-white/10 text-gray-500'
                }`}>
                  <st.icon className="w-4 h-4 font-black" />
                </div>
                <span className="text-[10px] font-bold text-white mt-2 block uppercase">{st.label}</span>
                <span className="text-[8px] text-gray-500 font-bold block mt-0.5">{st.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Printable Detailed Receipt Sheet */}
        <div className="bg-[#050522] text-white rounded-xl p-6 md:p-8 border border-neoncyan/30 shadow-[0_0_20px_rgba(0,240,255,0.1)] space-y-6 text-left">
          
          {/* Receipt Top header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-5 font-mono">
            <div>
              <span className="italic font-display font-black text-lg text-white tracking-widest uppercase">AKIBA // <span className="text-neonpink filter drop-shadow-[0_0_3px_#ff007f]">HUB</span></span>
              <p className="text-[9px] text-gray-400 mt-0.5 uppercase tracking-wider font-semibold">Chiyoda-ku Sotokanda Segment // Tokyo, Japan</p>
            </div>
            <div className="text-[10px] text-right text-gray-400 font-semibold leading-normal">
              <span className="block"><span className="text-neoncyan font-bold uppercase">&gt; DATE:</span> {currentOrder.date}</span>
              <span className="block"><span className="text-neoncyan font-bold uppercase">&gt; INVOIC_SEQ:</span> {currentOrder.id}</span>
            </div>
          </div>

          {/* Receipt customer info details grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div>
              <h4 className="font-mono font-bold text-[9px] text-[#00f0ff] uppercase tracking-widest mb-2">// ACCOUNT STREAM DETAILS</h4>
              <p className="text-gray-300 font-medium leading-relaxed">
                Collector: <span className="text-white font-bold">{currentOrder.shippingDetails.fullName}</span><br />
                Route Mail: {currentOrder.shippingDetails.email}<br />
                Com line: {currentOrder.shippingDetails.phone}
              </p>
            </div>
            <div>
              <h4 className="font-mono font-bold text-[9px] text-[#00f0ff] uppercase tracking-widest mb-2">// DELIVERY COORDINATES</h4>
              <p className="text-gray-300 font-medium leading-relaxed">
                Addr Vector: {currentOrder.shippingDetails.addressLine1}<br />
                {currentOrder.shippingDetails.addressLine2 && <>{currentOrder.shippingDetails.addressLine2}<br /></>}
                {currentOrder.shippingDetails.city}, {currentOrder.shippingDetails.state} {currentOrder.shippingDetails.postalCode}<br />
                Nation: {currentOrder.shippingDetails.country} (via {currentOrder.shippingDetails.shippingMethod === 'express' ? 'Express Priority Air' : 'Standard Land Tracked'})
              </p>
            </div>
          </div>

          {/* Itemized tables list */}
          <div>
            <table className="w-full text-left text-xs font-semibold">
              <thead>
                <tr className="border-b border-white/5 font-mono text-[9px] text-gray-500 uppercase font-black">
                  <th className="py-2.5">SEALED REGISTERED ITEM</th>
                  <th className="py-2.5 text-center">QUANTITY</th>
                  <th className="py-2.5 text-right">UNIT_RATE</th>
                  <th className="py-2.5 text-right">SUBTOTAL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 uppercase">
                {currentOrder.items.map((item) => (
                  <tr key={item.product.id} className="text-gray-300">
                    <td className="py-3 font-bold text-white font-sans normal-case">
                      {item.product.name}
                      <span className="block text-[8px] text-neonpink font-mono uppercase font-bold mt-0.5">
                        // FILE: {item.product.category.replace('onepiece', 'One Piece').replace('pokemon', 'Pokémon')}
                      </span>
                    </td>
                    <td className="py-3 text-center font-mono text-white font-bold">{item.quantity}</td>
                    <td className="py-3 text-right font-mono text-white font-bold">${item.product.price.toFixed(2)}</td>
                    <td className="py-3 text-right font-mono font-bold text-neoncyan">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Totals table calculations */}
          <div className="border-t border-white/5 pt-4 flex justify-end font-mono">
            <div className="w-full sm:max-w-xs space-y-2 text-xs text-gray-400 font-semibold">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="text-white font-bold">${currentOrder.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Priority Air Courier</span>
                <span className="text-white font-bold">${currentOrder.shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Custom Tariff Excise</span>
                <span className="text-white font-bold">${currentOrder.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-2 text-xs font-bold text-white font-sans">
                <span>TOTAL CONDUIT VALUE:</span>
                <span className="font-mono text-sm font-extrabold text-[#00f0ff] filter drop-shadow-[0_0_5px_rgba(0,240,255,0.4)]">${currentOrder.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Secure disclaimer Cop copy */}
          <div className="border-t border-white/5 pt-5 text-center text-gray-500 font-mono text-[8px] font-bold leading-relaxed">
            // This invoice acts as active authentication registry. Sourced via factory sealed token sequences. Fully covered by integrated Sandbox PayPal buyer insurance clauses.<br />
            &gt;_ THANK_YOU_FOR_PULLING_WITH_AKIBA_DATASTREAM
          </div>
        </div>

        {/* Action button controls */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between font-mono text-xs">
          <button
            onClick={() => setView('landing')}
            className="w-full sm:w-auto px-6 py-3 bg-transparent hover:bg-neoncyan/10 text-neoncyan font-bold border border-neoncyan/40 rounded tracking-widest cursor-pointer transition-all"
          >
            &lt;= HOME_TERMINAL
          </button>
          
          <div className="flex gap-3 w-full sm:w-auto">
            <button
              id="print-btn"
              onClick={handlePrint}
              className="flex-1 sm:flex-none px-5 py-3 bg-transparent hover:bg-neonyellow/10 text-neonyellow font-bold border border-neonyellow/40 rounded tracking-widest cursor-pointer transition-all flex items-center justify-center gap-1.5"
            >
              <Printer className="w-4 h-4 text-neonyellow filter drop-shadow-[0_0_3px_#fefe00]" /> PRINT_SYS
            </button>
            <button
              onClick={() => setView('shop')}
              className="flex-1 sm:flex-none px-6 py-3 bg-neonpink text-white font-bold rounded tracking-widest cursor-pointer transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(255,0,127,0.35)] hover:shadow-[0_0_20px_rgba(255,0,127,0.55)] hover:bg-neonpink/90"
            >
              <ShoppingBag className="w-4 h-4" /> BROWSE_CATALOGUE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
