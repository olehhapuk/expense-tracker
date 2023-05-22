/* eslint-disable react-refresh/only-export-components */

import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

import Layout from '../components/Layout';

const Home = lazy(() => import('../pages/HomePage'));
const Expenses = lazy(() => import('../pages/ExpensesPage'));

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/expenses',
        element: <Expenses />,
      },
    ],
  },
]);
