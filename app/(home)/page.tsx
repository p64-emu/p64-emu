import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center text-center min-h-screen">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-10" />
        <Image
          src="https://github.com/user-attachments/assets/569dd662-2068-4767-a5d4-416603a3c2d6"
          alt="Background"
          fill
          priority
          className="object-cover brightness-75"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
        <h1 className="mb-8 pt-10 text-7xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          P64
        </h1>
        
        <h2 className="mb-6 text-white max-w-2xl mx-auto leading-relaxed">
          An Educational and Cycle Accurate Emulator for the Nintendo 64 with full VR4300 CPU emulation, Low Level RDP, RSP & RCP Emulation with Upscaled, 4K Graphics in Widescreen
        </h2>
  
        <Link 
          href="https://github.com/WillKirkmanM/p64/releases"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mb-8 px-8 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors">
            Download Now
          </button>
        </Link>
      </div>
    </main>
  );
}