// app/layout.tsx

import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Minimal Blog',
  description: 'A simple blog built with Next.js and Tailwind CSS.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
