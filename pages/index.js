import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Raait | Verified Intelligence</title>
      </Head>
      <div className="nebula-bg" />
      
      <nav className="p-6 flex justify-between items-center glass sticky top-0 z-50">
        <div className="text-2xl font-black tracking-tighter text-raait-blue">RAAIT</div>
        <div className="hidden md:block w-96 h-10 glass rounded-full px-4 pt-1 text-white/30 text-sm">
          Search brands or claims...
        </div>
        <button className="bg-raait-blue px-6 py-2 rounded-full font-bold text-sm">Sign In</button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-20">
        <h1 className="text-6xl font-black tracking-tight mb-12">The <span className="text-raait-cyan">Trust</span> Layer of the Web.</h1>
        
        {/* Simplified Bento Grid for Initial Deploy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass h-64 rounded-[2rem] p-8 col-span-2">
            <h2 className="text-2xl font-bold">QuantumFlow AI</h2>
            <div className="text-5xl font-black text-trust-green mt-4">9.8</div>
          </div>
          <div className="glass h-64 rounded-[2rem] p-8 text-center flex flex-col justify-center">
            <div className="text-sm text-white/40 uppercase">Global Trust IQ</div>
            <div className="text-4xl font-black text-raait-blue">84.2B</div>
          </div>
        </div>
      </main>
    </div>
  );
}
