'use client';
import { Figtree } from 'next/font/google';

import { ModalProvider } from '@/components/ModalProvider';
import Sidebar from '@/components/Sidebar';
import ReduxProvider from '@/redux/provider';

import './globals.css';
import type { Metadata } from 'next';

const font = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music',
};

//PersistGate는 저장된 store값이 다시  redux에 저장될 때까지 app의 UI렌더링을 지연시킨다.

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ReduxProvider>
          <ModalProvider>
            <Sidebar>{children}</Sidebar>
          </ModalProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
