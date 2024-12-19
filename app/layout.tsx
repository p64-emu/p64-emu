import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './global.css';

import { Banner } from 'fumadocs-ui/components/banner';
import Link from 'next/link';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <Link href="/docs">
            <Banner variant="rainbow">🎮 Learn how to make one yourself — Create your own Emulator with ParsonLabs ⭐</Banner>
          </Link>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
