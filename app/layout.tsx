import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Suhani Shivhare - Professional Makeup Artist in Morena & Gwalior',
  description: 'Transform your look with Suhani Shivhare, a certified professional makeup artist in Morena & Gwalior. Specializing in bridal makeup, party makeup, and HD makeup services. Book your appointment for stunning, camera-ready looks.',
  keywords: 'makeup artist, bridal makeup, professional makeup, HD makeup, party makeup, Morena makeup artist, Gwalior makeup artist, wedding makeup, engagement makeup, best makeup artist, Suhani Shivhare',
  robots: 'index, follow',
  openGraph: {
    title: 'Suhani Shivhare - Professional Makeup Artist in Morena & Gwalior',
    description: 'Transform your look with professional makeup services. Specializing in bridal, party, and HD makeup.',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/bridal3.png',
        width: 1200,
        height: 630,
        alt: 'Suhani Shivhare - Professional Makeup Artist'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suhani Shivhare - Professional Makeup Artist',
    description: 'Professional makeup services in Morena & Gwalior',
    images: ['/bridal3.png'],
  },
  authors: [{ name: 'Suhani Shivhare' }],
  creator: 'Suhani Shivhare',
  publisher: 'Suhani Shivhare',
  formatDetection: {
    telephone: true,
    email: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload hero video */}
        <link
          rel="preload"
          as="video"
          href="https://res.cloudinary.com/dwoifav4o/video/upload/q_auto:low,f_auto,w_360,c_scale/hero_mraobv.mp4"
          type="video/mp4"
          media="(max-width: 768px)"
        />
        <link
          rel="preload"
          as="video"
          href="https://res.cloudinary.com/dwoifav4o/video/upload/q_auto:good,f_auto,w_1080,c_scale/hero_mraobv.mp4"
          type="video/mp4"
          media="(min-width: 769px)"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
