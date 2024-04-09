import { ThemeProvider } from '@/components/theme-provider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './error-page';
import './index.css';
import Agencies, { loader as AgenciesLoader } from './routes/Agencies';
import DeveloperInfo from './routes/DeveloperInfo';
import Root from './routes/Root';
import SecondSubDashboard from './routes/SecondSubDashboard';
import SocialNetworks, {
  loader as SocialNetworksLoader,
} from './routes/SocialNetworks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/info-dev',
    element: <DeveloperInfo />,
    errorElement: <ErrorPage />,
  },
  {
    // parent route component
    element: <Layout />,
    // child route components
    children: [
      {
        path: '/:connection/sn/',
        element: <SocialNetworks />,
        loader: SocialNetworksLoader,
      },
      {
        path: '/:connection/ag/',
        element: <Agencies />,
        loader: AgenciesLoader,
      },
      {
        path: '/:connection/sn/:id',
        element: <SecondSubDashboard />,
        loader: AgenciesLoader,
      },
      {
        path: '/:connection/ag/:id',
        element: <SecondSubDashboard />,
        loader: AgenciesLoader,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

// Do i really need 2 /:connection/(sn / ag)/:id

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
