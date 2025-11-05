import React from 'react';
import HeroSplineCover from './components/HeroSplineCover';
import ConnectPanel from './components/ConnectPanel';
import Dashboard from './components/Dashboard';
import MarketplacePreview from './components/MarketplacePreview';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero with Spline background */}
      <HeroSplineCover />

      {/* Connection cards */}
      <ConnectPanel />

      {/* User dashboard preview */}
      <Dashboard />

      {/* Marketplace preview */}
      <MarketplacePreview />

      <footer className="bg-black/90 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} GalaxyCode • Learn. Solve. Earn.</p>
          <div className="text-xs text-white/50">Sepolia Testnet • Dynamic NFTs • IPFS</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
