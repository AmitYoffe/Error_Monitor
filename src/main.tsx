import { ThemeProvider } from '@/components/layout/theme-provider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout, { loader as layoutLoader } from './components/layout/Layout';
import ErrorPage from './error-page';
import './index.css';
import Agencies, { loader as AgenciesLoader } from './routes/Agencies';
import DeveloperInfo from './routes/DeveloperInfo';
import SocialNetworks, {
  loader as SocialNetworksLoader,
} from './routes/Networks';
import Root 
// ,{ loader as rootLoader }
 from './routes/Root';
import SocialNetworkSources, {
  loader as sourcesLoader,
} from './routes/Sources';

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
        // loader: rootLoader,
        children: [],
      },
      {
        path: '/:connection/sn/',
        element: <SocialNetworks />,
        // loader: SocialNetworksLoader,
      },
      {
        path: '/:connection/ag/',
        element: <Agencies />,
        loader: AgenciesLoader,
      },
      {
        // Only sn has sources
        path: '/:connection/sn/:network',
        element: <SocialNetworkSources />,
        loader: sourcesLoader,
      },
      {
        path: '/info-dev',
        element: <DeveloperInfo />,
        errorElement: <ErrorPage />,
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
