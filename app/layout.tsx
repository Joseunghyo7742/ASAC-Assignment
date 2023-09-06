import Sidebar from '@/components/Sidebar';
import './globals.css';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import { ModalProvider } from '@/components/ModalProvider';
import { MSWComponent } from '@/mocks/MSWComponent';
const font = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <MSWComponent>
          <ModalProvider>
            <Sidebar>{children}</Sidebar>
          </ModalProvider>
        </MSWComponent>
        
      </body>
    </html>
  );
}
