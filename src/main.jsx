import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { ListingDetailPage } from './pages/ListingDetailPage';
import { CreateListingPage } from './pages/CreateListingPage';
import { MyPage } from './pages/MyPage';
import './styles/global.css';

// Добавьте basename для GitHub Pages
const basename = import.meta.env.PROD ? '/tigrbn-formoms-ykt' : '/';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: '/login',
          element: <LoginPage />,
        },
        {
          path: '/listings/:id',
          element: <ListingDetailPage />,
        },
        {
          path: '/listings/new',
          element: <CreateListingPage />,
        },
        {
          path: '/my',
          element: <MyPage />,
        },
      ],
    },
  ],
  {
    basename: basename, // ← ДОБАВЬТЕ ЭТО
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);