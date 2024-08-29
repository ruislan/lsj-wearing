import Footer from '@/components/footer/footer';
import MenuBar from '@/components/header/menu-bar';

export default function Layout({ children }) {
  return (
    <>
      <MenuBar />
      <div className='flex flex-col flex-1 w-full'>
        {children}
      </div>
      <Footer />
    </>
  );
}
