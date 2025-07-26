import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer'

export const metadata = {
  title: 'ZendCraft',
  description: 'Minecraft Bedrock and Java server',
};

export default function RootLayout({ children }) {
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
