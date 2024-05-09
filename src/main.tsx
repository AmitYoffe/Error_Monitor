import { ThemeProvider } from '@/components/theme-provider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './error-page';
import './index.css';
import DeveloperInfo from './routes/DeveloperInfo';
import Root, { loader as rootLoader } from './routes/Root';
import Agencies, { loader as AgenciesLoader } from './routes/Agencies';
import SecondSubDashboard, {
  loader as sourcesLoader,
} from './routes/Sources';
import SocialNetworks, {
  loader as SocialNetworksLoader,
} from './routes/Networks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
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
        path: '/:connection/sn/:network',
        element: <SecondSubDashboard />,
        loader: sourcesLoader,
      },
      {
        path: '/:connection/ag/:network',
        element: <SecondSubDashboard />,
        loader: sourcesLoader,
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
