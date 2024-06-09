import { ThemeProvider } from '@/components/layout/theme-provider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout, { loader as layoutLoader } from './components/layout/Layout';
import ErrorPage from './error-page';
import './index.css';
import Agencies from './routes/Agencies';
import DeveloperInfo from './routes/DeveloperInfo';
import SocialNetworks from './routes/Networks';
import Root from './routes/Root';
import SocialNetworkSources from './routes/Sources';

const router = createBrowserRouter([
  {
    // parent components all routes will be passed through
    element: <Layout />,
    errorElement: <ErrorPage />,
    // and it's child route components
    loader: layoutLoader,
    children: [
      {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/:connection/sn/',
        element: <SocialNetworks />,
      },
      {
        path: '/:connection/ag/',
        element: <Agencies />,
      },
      {
        // Only social networks (sn) have sources
        path: '/:connection/sn/:network',
        element: <SocialNetworkSources />,
      },
      {
        path: '/info-dev',
        element: <DeveloperInfo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
