export default function RivieraLandingPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#f8f8f6] text-gray-900 font-serif">
      <header className="w-full bg-white shadow-sm py-6 px-4 md:px-12 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Riviera Coin</h1>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all">Access the Riviera</button>
      </header>

      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-white text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/monaco-yacht.jpg')" }}>
        <div className="absolute top-10 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
          <img src="/images/riviera-coin-logo.png" alt="Riviera Coin Logo" className="w-16 h-16" />
        </div>
        <div className="relative z-10 bg-black/50 p-8 rounded-xl max-w-2xl mt-32">
          <h2 className="text-5xl font-bold mb-4 leading-tight">Born on the Riviera.<br />Built for the Blockchain.</h2>
          <p className="text-xl">Luxury, freedom, and elegance — all in one token.</p>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">Access the Riviera</button>
        </div>
      </section>

      <main className="px-6 md:px-20 py-24 space-y-24">
        {/* Additional sections like Tokenomics, NFTs, Socials, Roadmap */}
      </main>

      <footer className="bg-white border-t py-10 px-6 md:px-20 text-sm text-gray-500 text-center">
        <p>Smart Contract Address: <span className="font-mono">(Coming Soon)</span></p>
        <p className="mt-2">© {currentYear} Riviera Coin — Inspired by the Coast. Powered by the Chain.</p>
      </footer>
    </div>
  );
}
