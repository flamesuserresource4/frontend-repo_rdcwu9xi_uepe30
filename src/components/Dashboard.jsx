import React from 'react';
import { Trophy, Coins, Shield, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const StatCard = ({ icon: Icon, label, value, accent }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45 }}
    className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
  >
    <div className={`h-10 w-10 rounded-lg ${accent} flex items-center justify-center mb-3`}>
      <Icon className="h-6 w-6 text-white" />
    </div>
    <p className="text-white/60 text-sm">{label}</p>
    <p className="text-white text-2xl font-semibold mt-1">{value}</p>
  </motion.div>
);

const mockNFTs = [
  { id: 1, title: 'Dynamic Programming • Epic', topic: 'DP', color: 'from-cyan-400 via-fuchsia-400 to-violet-400' },
  { id: 2, title: 'Graphs • Legendary', topic: 'Graph', color: 'from-emerald-400 via-teal-400 to-cyan-400' },
  { id: 3, title: 'Arrays • Common', topic: 'Array', color: 'from-indigo-400 via-purple-400 to-pink-400' },
  { id: 4, title: 'Binary Search • Rare', topic: 'Binary', color: 'from-blue-400 via-cyan-400 to-teal-400' },
];

export default function Dashboard() {
  return (
    <section className="relative bg-black py-16">
      <div className="absolute inset-0 pointer-events-none" style={{
        background:
          'radial-gradient(800px 500px at 70% 0%, rgba(56,189,248,0.15), transparent 60%), radial-gradient(600px 400px at 10% 20%, rgba(167,139,250,0.15), transparent 60%)'
      }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-semibold">Your Dashboard</h2>
            <p className="text-white/60 mt-1">Track progress, rewards, and earned NFTs.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={Trophy} label="Problems Solved" value="128" accent="bg-gradient-to-br from-yellow-400/20 to-amber-400/10" />
          <StatCard icon={Coins} label="ETH Rewards (Sepolia)" value="0.42" accent="bg-gradient-to-br from-cyan-400/20 to-blue-400/10" />
          <StatCard icon={Shield} label="NFTs Earned" value="12" accent="bg-gradient-to-br from-violet-400/20 to-fuchsia-400/10" />
          <StatCard icon={Star} label="Streak" value="15 days" accent="bg-gradient-to-br from-emerald-400/20 to-teal-400/10" />
        </div>

        {/* NFTs */}
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h3 className="text-white text-xl font-semibold">Recent NFTs</h3>
            <a href="#marketplace" className="text-cyan-300 hover:text-cyan-200 text-sm">Open Marketplace</a>
          </div>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockNFTs.map((nft, idx) => (
              <motion.div
                key={nft.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden group"
              >
                <div className={`h-40 bg-gradient-to-br ${nft.color}`} />
                <div className="p-4">
                  <p className="text-white font-medium">{nft.title}</p>
                  <p className="text-white/60 text-sm">Topic: {nft.topic}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
