export default function RivieraLandingPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#f8f8f6] text-gray-900 font-serif">
      {/* Header */}
      <header className="w-full bg-white shadow-sm py-6 px-4 md:px-12 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Riviera Coin</h1>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all">
          Access the Riviera
        </button>
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-[85vh] flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/RIV.png')" }}
      >
        
        <div className="absolute top-10">
          <img
            src="/images/logo.png"
            alt="Riviera Coin Logo"
            className="w-36 h-36 rounded-full shadow-lg"
          />
        </div>

        <div className="relative z-10 bg-black/50 p-8 rounded-xl max-w-2xl mt-32">
          <h2 className="text-5xl font-bold mb-4 leading-tight">
            Born on the Riviera.<br />Built for the Blockchain.
          </h2>
          <p className="text-xl">Luxury, freedom, and elegance — all in one token.</p>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Access the Riviera
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="px-6 md:px-20 py-24 space-y-24">
        {/* About */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/images/riviera-coastline.png"
          alt="Riviera Lifestyle"
          className="rounded-2xl shadow-xl object-cover max-h-[350px] w-full"
        />
        <div>
          <h3 className="text-4xl font-bold mb-4 leading-tight">What is Riviera Coin?</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            Riviera Coin (RIV) is a lifestyle token born in the heart of the French Riviera, embodying luxury,
            freedom, and sophistication in decentralized finance.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-white shadow-xl p-10 rounded-2xl text-gray-800">
          <h3 className="text-3xl font-bold mb-6">Tokenomics</h3>
          <ul className="space-y-4 text-lg">
            <li><strong>Total Supply:</strong> 1,000,000 RIV</li>
            <li><strong>Distribution:</strong> Community-focused, No Presale, No Dev Wallet</li>
            <li><strong>Utilities:</strong> Access to NFT drops, luxury raffles, RIV Club events</li>
            <li><strong>Chain:</strong> BNB Smart Chain</li>
          </ul>
        </div>
      
        <div className="flex justify-center">
          <img
            src="/images/riviera-harbor.png"
            alt="Riviera Harbor"
            className="rounded-2xl shadow-xl object-cover max-h-[350px] w-full"
          />
        </div>
      </section>


        {/* Why No Presale */}
        <section className="max-w-3xl mx-auto bg-white shadow-xl p-10 rounded-2xl text-gray-800">
          <h3 className="text-3xl font-bold mb-6 text-center">Why No Presale?</h3>
          <p className="text-lg leading-relaxed">
            We chose not to do a presale to keep Riviera Coin fair, transparent, and truly community-first.
            No insider deals, no early unlocks — just a clean launch where everyone gets equal access from day one.
          </p>
        </section>

        {/* NFT Collection */}
        <section className="bg-white shadow-xl p-10 rounded-2xl text-gray-800">
          <h3 className="text-4xl font-bold mb-6 text-center">Riviera Lifestyles NFT Collection</h3>
          <p className="text-lg text-center mb-6">
            A high-style digital art drop of 777 luxury NFTs representing the Riviera dream.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <img src="/images/nft-yacht.png" alt="Yacht NFT" className="rounded-xl shadow-lg"/>
            <img src="/images/nft-casino-monte-carlo.png" alt="Casino NFT" className="rounded-xl shadow-lg"/>
            <img src="/images/nft-fashion.png" alt="Fashion NFT" className="rounded-xl shadow-lg"/>
          </div>
          
           <div className="grid md:grid-cols-3 gap-6 mb-8">
            <img src="/images/nft-yacht.png" alt="Yacht NFT" className="rounded-xl shadow-lg"/>
            <img src="/images/nft-casino-monte-carlo.png" alt="Casino NFT" className="rounded-xl shadow-lg"/>
            <img src="/images/nft-fashion.png" alt="Fashion NFT" className="rounded-xl shadow-lg"/>
          </div>
         
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">Join Whitelist</button>
            <button className="ml-4 bg-gray-200 text-black px-8 py-3 rounded-full hover:bg-gray-300 transition">Mint Soon</button>
          </div>
        </section>

        {/* Social Links */}
       <section className="text-center">
          <h3 className="text-3xl font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
              <img src="/images/twitter.svg" alt="Twitter" className="w-8 h-8 hover:opacity-80 transition" />
            </a>
            <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
              <img src="/images/instagram.svg" alt="Instagram" className="w-8 h-8 hover:opacity-80 transition" />
            </a>
            <a href="https://t.me/your-telegram" target="_blank" rel="noopener noreferrer">
              <img src="/images/telegram.svg" alt="Telegram" className="w-8 h-8 hover:opacity-80 transition" />
            </a>
          </div>
        </section>

        {/* Roadmap */}
        <section>
          <h3 className="text-4xl font-bold mb-8 text-center">Roadmap</h3>
          <ol className="max-w-4xl mx-auto text-gray-700 text-lg list-decimal space-y-3 pl-6">
            <li>✅ Testnet Deployment</li>
            <li>🎨 Brand & Website Launch</li>
            <li>🚀 Mainnet & PancakeSwap</li>
            <li>🎁 NFT Drop</li>
            <li>🛥️ RIV Club Events</li>
          </ol>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-10 px-6 md:px-20 text-sm text-gray-500 text-center">
        <p>Smart Contract Address: <span className="font-mono">(Coming Soon)</span></p>
        <p className="mt-2">© {currentYear} Riviera Coin — Inspired by the Coast.</p>
      </footer>
    </div>
  );
}
