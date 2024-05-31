import { Location } from '@/types/networkType';
import { getData } from '@/utils/getData';
import { defer, Outlet, useLoaderData } from 'react-router-dom';
import { Toaster } from '../ui/sonner';
import Footer from './Footer';
import Header from './Header';

type LoaderData = {
  data: Promise<Location>;
};

export async function loader(): Promise<LoaderData> {
  const dataPromise = getData();

  return defer({ data: dataPromise });
}

export default function Layout() {
  const data = useLoaderData() as LoaderData;

  return (
    <div className="h-screen">
      <Header />
      <Outlet context={data} />
      <Toaster />
      <Footer />
    </div>
  );
}
