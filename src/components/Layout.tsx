import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="h-screen">
      <Header showBreadcrumbs={true} />
      <Outlet />
      <Footer />
    </div>
  );
}
