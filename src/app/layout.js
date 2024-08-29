import MenuBar from '@/components/header/menu-bar';
import './globals.css';

export const metadata = {
  title: 'Ling Sheng Ji Wearing',
  description: 'We provide the best quality of clothing for you',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='bg-neutral-900 text-white min-h-screen m-0 p-0 flex flex-col'>
        {children}
      </body>
    </html>
  );
}
