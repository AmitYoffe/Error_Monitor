import { getData } from '@/utils/getData';
import { defer, LoaderFunction, Outlet, useLoaderData } from 'react-router-dom';
import { Toaster } from '../ui/sonner';
import Footer from './Footer';
import Header from './Header';

type LoaderData<TLoaderFn extends LoaderFunction> =
  Awaited<ReturnType<TLoaderFn>> extends Response | infer D ? D : never;

export async function loader() {
  const dataPromise = getData();
  return defer({ dataPromise });
}

export default function Layout() {
  const data = useLoaderData() as LoaderData<typeof loader>;

  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <Outlet context={data} />
      <Toaster />
      <Footer />
    </div>
  );
}
