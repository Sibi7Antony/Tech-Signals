
import type { Metadata } from 'next';
import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: '𝘛𝘦𝘤𝘩_𝘚𝘪𝘨𝘯𝘢𝘭𝘴',
  description: 'Fuel your daily dose with authentic tech news. No noise.',
  icons: {
    icon: [
      {
        url: '/e2748d00-2f1b-4856-9b2d-037f170a2c2c-removebg-preview.png',
        type: 'image/png',
      },
    ],
    apple: '/e2748d00-2f1b-4856-9b2d-037f170a2c2c-removebg-preview.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/e2748d00-2f1b-4856-9b2d-037f170a2c2c-removebg-preview.png" type="image/png" />
        <link rel="shortcut icon" href="/e2748d00-2f1b-4856-9b2d-037f170a2c2c-removebg-preview.png" type="image/png" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <main className="app-container">
          {children}
        </main>
      </body>
    </html>
  );
}
