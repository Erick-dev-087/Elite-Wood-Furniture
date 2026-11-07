import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/lib/cart-context';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import WhatsAppFab from '@/components/ui/WhatsAppFab';
import ScrollProgress from '@/components/ui/ScrollProgress';
import { PageTransition, PageTransitionProvider } from '@/components/ui/PageTransition';
import { SITE_DESCRIPTION, COMPANY_NAME, TAGLINE } from '@/lib/constants';

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://elitewoodfurniture.co.ke'),
  title: {
    default: `${COMPANY_NAME} | ${TAGLINE}`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'furniture Kenya',
    'sofas Nairobi',
    'beds Ruiru',
    'double decker bed',
    'TV stand Kenya',
    'dining sets',
    'Elite Wood and Furniture',
    'handcrafted furniture',
  ],
  authors: [{ name: COMPANY_NAME }],
  openGraph: {
    title: `${COMPANY_NAME} | ${TAGLINE}`,
    description: SITE_DESCRIPTION,
    url: 'https://elitewoodfurniture.co.ke',
    siteName: COMPANY_NAME,
    images: [
      {
        url: '/images/Elite_Wood_Furniture.jpg',
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} Showroom`,
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[#E51B24]/10 selection:text-[#E51B24]">
        <PageTransitionProvider>
          <CartProvider>
            <ScrollProgress />
            <Header />
            <PageTransition>{children}</PageTransition>
            <Footer />
            <CartDrawer />
            <WhatsAppFab />
          </CartProvider>
        </PageTransitionProvider>
      </body>
    </html>
  );
}
