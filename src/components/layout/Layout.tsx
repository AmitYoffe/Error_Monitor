import { getData } from '@/utils/getData';
import { defer, Outlet, useLoaderData } from 'react-router-dom';
import { Toaster } from '../ui/sonner';
import Footer from './Footer';
import Header from './Header';

export async function loader() {
  const data = getData();

  return defer({ data });
}

export default function Layout() {
  const data = useLoaderData();

  return (
    <div className="h-screen">
      <Header />
      <Outlet context={{ data }} />
      <Toaster />
      <Footer />
    </div>
  );
}
