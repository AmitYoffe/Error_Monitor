import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { Toaster } from '../ui/sonner';

export default function Layout() {
  return (
    <div className="h-screen">
      <Header />
      <Outlet />
      <Toaster />
      <Footer />
    </div>
  );
}
