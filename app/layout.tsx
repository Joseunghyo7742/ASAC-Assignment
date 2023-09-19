import { Figtree } from 'next/font/google';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { ModalProvider } from '@/components/ModalProvider';
import Sidebar from '@/components/Sidebar';
import store from '@/lib/store/index';

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
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistStore(store)}>
            <ModalProvider>
              <Sidebar>{children}</Sidebar>
            </ModalProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
