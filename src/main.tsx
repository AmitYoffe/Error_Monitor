import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page';
import Root from './routes/Root';
import { ThemeProvider } from '@/components/theme-provider';
import './index.css';
import SocialNetworks from './routes/SocialNetworks';
import Agencies from './routes/Agencies';
import { loader as AgenciesLoader } from './routes/Agencies';
import { loader as SocialNetworksLoader } from './routes/SocialNetworks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/:connection/sn/',
    element: <SocialNetworks />,
    errorElement: <ErrorPage />,
    loader: SocialNetworksLoader,
  },
  {
    path: '/:connection/ag/',
    element: <Agencies />,
    errorElement: <ErrorPage />,
    loader: AgenciesLoader,
  },
]);
// second sub dashboards should be path: '/:connection/sn/:id',

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
