import Sidebar from '@/components/Sidebar';
import './globals.css';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import { ModalProvider } from '@/components/ModalProvider';
const font = Figtree({ subsets: ['latin'] });
import Modal from '@/components/Modal';

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider>
          <Sidebar>{children}</Sidebar>
        </ModalProvider>
      </body>
    </html>
  );
}
