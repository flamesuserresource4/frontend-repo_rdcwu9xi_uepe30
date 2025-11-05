import React from 'react';
import { ShoppingCart, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const listings = [
  { id: 101, name: 'Legendary Graph Master', price: '0.12', badge: 'Legendary', gradient: 'from-fuchsia-500 via-purple-500 to-indigo-500' },
  { id: 102, name: 'Epic DP Conqueror', price: '0.06', badge: 'Epic', gradient: 'from-cyan-500 via-sky-500 to-blue-500' },
  { id: 103, name: 'Rare Binary Hunter', price: '0.03', badge: 'Rare', gradient: 'from-emerald-500 via-teal-500 to-cyan-500' },
  { id: 104, name: 'Common Array Sprinter', price: '0.01', badge: 'Common', gradient: 'from-indigo-500 via-blue-500 to-sky-500' },
];

export default function MarketplacePreview() {
  return (
    <section id="marketplace" className="relative bg-black py-16">
      <div className="absolute inset-0 pointer-events-none" style={{
        background:
          'radial-gradient(700px 450px at 50% 0%, rgba(56,189,248,0.15), transparent 60%), radial-gradient(600px 400px at 90% 30%, rgba(167,139,250,0.15), transparent 60%)'
      }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-semibold">Marketplace</h2>
            <p className="text-white/60 mt-1">List, buy, and sell NFTs with Sepolia ETH.</p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white px-4 py-2"
          >
            View All <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {listings.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden flex flex-col"
            >
              <div className={`h-40 bg-gradient-to-br ${item.gradient}`} />
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-white font-medium">{item.name}</p>
                    <p className="text-xs text-white/60">{item.badge}</p>
                  </div>
                  <span className="text-cyan-300 text-sm">{item.price} ETH</span>
                </div>
                <button className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-black font-medium px-4 py-2">
                  <ShoppingCart className="h-4 w-4" /> Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
