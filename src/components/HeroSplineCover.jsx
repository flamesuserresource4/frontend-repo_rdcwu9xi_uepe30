import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSplineCover() {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden bg-black/90">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft glow overlays that don't block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
      <div className="pointer-events-none absolute inset-0" style={{
        background:
          'radial-gradient(1200px 600px at 50% 10%, rgba(56,189,248,0.20), transparent 60%), radial-gradient(900px 500px at 80% 20%, rgba(167,139,250,0.20), transparent 60%), radial-gradient(800px 500px at 20% 30%, rgba(59,130,246,0.18), transparent 60%)'
      }} />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="text-white max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur"
          >
            <Star className="h-4 w-4 text-yellow-300" />
            <span className="text-xs text-white/80">Gamified Web3 Learning • Sepolia Testnet</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-4xl md:text-6xl font-bold tracking-tight"
          >
            Earn ETH and NFTs for Solving LeetCode
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-lg text-white/80 max-w-2xl"
          >
            Connect your LeetCode and MetaMask. Solve challenges. Get rewarded with dynamic NFTs and Sepolia ETH based on difficulty.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#connect"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-black font-medium px-5 py-3 transition"
            >
              <Rocket className="h-5 w-5" />
              Get Started
            </a>
            <a
              href="#marketplace"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white px-5 py-3 transition"
            >
              Explore Marketplace
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
