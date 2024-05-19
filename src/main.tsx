import { ThemeProvider } from '@/components/theme-provider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './error-page';
import './index.css';
import Agencies, { loader as AgenciesLoader } from './routes/Agencies';
import DeveloperInfo from './routes/DeveloperInfo';
import SocialNetworks, {
  loader as SocialNetworksLoader,
} from './routes/Networks';
import Root, { loader as rootLoader } from './routes/Root';
import SecondSubDashboard, { loader as sourcesLoader } from './routes/Sources';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
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
        path: '/:connection/sn/:network',
        element: <SecondSubDashboard />,
        loader: sourcesLoader,
      },
      {
        path: '/:connection/ag/:network',
        element: <SecondSubDashboard />,
        loader: sourcesLoader,
      },
      {
        path: '/info-dev',
        element: <DeveloperInfo />,
        errorElement: <ErrorPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
