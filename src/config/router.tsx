/* eslint-disable react-refresh/only-export-components */

import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

import Layout from '../components/Layout';

const Home = lazy(() => import('../pages/HomePage'));
const Expenses = lazy(() => import('../pages/ExpensesPage'));

export const urls = {
  home: '/',
  expenses: '/expenses',
};

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: urls.home,
        element: <Home />,
        handle: {
          label: 'Home',
        },
      },
      {
        path: urls.expenses,
        element: <Expenses />,
        handle: {
          label: 'Expenses',
        },
      },
    ],
  },
]);
