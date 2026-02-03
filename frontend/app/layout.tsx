import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Metadata } from 'next';

export const metadata = {
  title: 'ZendCraft',
  description: 'Minecraft Bedrock and Java server',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="layout">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
