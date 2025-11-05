import React, { useState } from 'react';
import { Wallet, Link as LinkIcon, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ConnectPanel() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [leetcodeUsername, setLeetcodeUsername] = useState('');
  const [leetcodeConnected, setLeetcodeConnected] = useState(false);
  const [error, setError] = useState('');

  const connectWallet = async () => {
    setError('');
    try {
      if (!window.ethereum) {
        setError('MetaMask not detected. Please install MetaMask.');
        return;
      }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (accounts && accounts.length > 0) {
        setWalletConnected(true);
      }
    } catch (e) {
      setError('Could not connect wallet.');
    }
  };

  const connectLeetCode = async () => {
    setError('');
    if (!leetcodeUsername.trim()) {
      setError('Enter your LeetCode username to continue.');
      return;
    }
    // In a full implementation this would call the backend to verify via LeetCode GraphQL
    setTimeout(() => {
      setLeetcodeConnected(true);
    }, 700);
  };

  return (
    <section id="connect" className="relative bg-black py-16">
      <div className="absolute inset-0 pointer-events-none" style={{
        background:
          'radial-gradient(600px 400px at 20% 10%, rgba(56,189,248,0.15), transparent 60%), radial-gradient(700px 500px at 80% 30%, rgba(167,139,250,0.15), transparent 60%)'
      }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Wallet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-cyan-400/20 flex items-center justify-center">
                <Wallet className="h-6 w-6 text-cyan-300" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Connect Wallet</h3>
                <p className="text-white/60 text-sm">Login with MetaMask or any EVM wallet.</p>
              </div>
            </div>
            <button
              onClick={connectWallet}
              className="mt-5 w-full rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-black font-medium py-3 transition"
            >
              {walletConnected ? 'Wallet Connected' : 'Connect MetaMask'}
            </button>
            {walletConnected && (
              <p className="mt-3 text-sm text-emerald-300 inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" /> Connected
              </p>
            )}
          </motion.div>

          {/* LeetCode */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-violet-400/20 flex items-center justify-center">
                <LinkIcon className="h-6 w-6 text-violet-300" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Link LeetCode</h3>
                <p className="text-white/60 text-sm">Sync solved problems to earn rewards.</p>
              </div>
            </div>
            <div className="mt-5 flex gap-2">
              <input
                type="text"
                value={leetcodeUsername}
                onChange={(e) => setLeetcodeUsername(e.target.value)}
                placeholder="LeetCode username"
                className="w-full rounded-lg bg-black/60 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-400/40"
              />
              <button
                onClick={connectLeetCode}
                className="rounded-lg bg-violet-500/90 hover:bg-violet-400 text-black font-medium px-4 py-3 transition"
              >
                {leetcodeConnected ? 'Linked' : 'Link'}
              </button>
            </div>
            {leetcodeConnected && (
              <p className="mt-3 text-sm text-emerald-300 inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" /> LeetCode linked
              </p>
            )}

            {error && (
              <p className="mt-3 text-sm text-rose-300 inline-flex items-center gap-2">
                <AlertCircle className="h-4 w-4" /> {error}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
