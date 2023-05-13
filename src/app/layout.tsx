import './globals.css';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-zinc-800 text-zinc-50 tracking-wide">{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'Spotify UI',
};
