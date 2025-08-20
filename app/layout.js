import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Vaibhav Jain — Portfolio',
  description: 'Personal portfolio of Vaibhav Jain: projects, skills, and contact.',
  metadataBase: new URL('https://example.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
    <header className="border-b border-black/10 dark:border-white/10">
          <div className="container flex items-center justify-between h-16">
      <a href="/" className="font-semibold text-slate-900 dark:text-white">Vaibhav Jain</a>
      <nav className="flex items-center gap-4 text-sm text-slate-700 dark:text-gray-300">
              <a className="hover-underline hover:text-white" href="/about">About</a>
              <a className="hover-underline hover:text-white" href="/projects">Projects</a>
              <a className="hover-underline hover:text-white" href="/gallery">Gallery</a>
              <a className="hover-underline hover:text-white" href="/blog">Blog</a>
              <a className="hover-underline hover:text-white" href="#education">Education</a>
              <a className="hover-underline hover:text-white" href="/contact">Contact</a>
              <a
                href="/vaibhav-jain-cv.pdf"
                download
                className="ml-2 inline-flex items-center rounded bg-brand-500 px-3 py-1.5 font-medium text-white transition-colors hover:bg-brand-600"
              >
                Download CV
              </a>
              <div className="ml-2">
                <ThemeToggle />
              </div>
            </nav>
          </div>
        </header>
        <main className="container py-12 md:py-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
