import { useState, useEffect } from 'react';

export default function RivieraLandingPage() {
  const currentYear = new Date().getFullYear();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('riviera-visited');
    if (!hasVisited) {
      setShowPopup(true);
      sessionStorage.setItem('riviera-visited', 'true');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f8f6] text-gray-900 font-serif relative">

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md text-center">
            <img src="/images/logo.png" alt="Riviera Coin Logo" className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Welcome to the Riviera!</h2>
            <p className="text-lg text-gray-700 mb-6">RIV is now live on PancakeSwap. Dive into the Riviera lifestyle today.</p>
            <div className="flex flex-col gap-4">
              <a href="https://pancakeswap.finance/swap?outputCurrency=0xc7aedda8074db7779911ff6c9e8ac929969fd883" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
                Trade RIV Now
              </a>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-200 text-black px-6 py-3 rounded-full hover:bg-gray-300 transition"
              >
                Enter Website
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Your existing site content here, starting with Header */}
      <header className="w-full bg-white shadow-sm py-6 px-4 md:px-12 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Riviera Coin</h1>
        <a 
          href="https://pancakeswap.finance/swap?outputCurrency=0xc7aedda8074db7779911ff6c9e8ac929969fd883" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all"
        >
          Access the Riviera
        </a>
      </header>

      {/* Continue with your Hero section, Main Content, Footer, etc. */}

    </div>
  );
}
