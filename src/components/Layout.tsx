import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import Navbar from './Navbar';
import Bottombar from './Bottombar';

function Layout() {
  return (
    <Container maxWidth="xs">
      <Navbar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Bottombar />
    </Container>
  );
}

export default Layout;
