
import "./globals.css";
// app/layout.tsx

import Link from 'next/link';

export const metadata = {
  title: 'My Minimal Blog',
  description: 'A minimal blog built with Next.js, TypeScript, and Tailwind CSS.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-4xl mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/">
              <p className="text-2xl font-bold text-gray-800">Tech By Klik Blog</p>
            </Link>
            {/* Add more navigation links here if needed */}
          </div>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-white shadow">
          <div className="max-w-4xl mx-auto px-4 py-6 text-center text-gray-500">
            © {new Date().getFullYear()} My Blog. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
