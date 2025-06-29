import './globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'ZendCraft',
  description: 'Minecraft Bedrock and Java server',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
