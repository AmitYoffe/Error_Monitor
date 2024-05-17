import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { Toaster } from './ui/sonner';

export default function Layout() {
  return (
    <div className="h-screen">
      <Header showBreadcrumbs={true} />
      <Outlet />
      <Toaster />
      <Footer />
    </div>
  );
}
