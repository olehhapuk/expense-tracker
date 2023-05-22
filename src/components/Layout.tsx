import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Stack } from '@mui/material';

import Navbar from './Navbar';
import Bottombar from './Bottombar';

function Layout() {
  return (
    <Stack height="100vh">
      <Navbar />
      <Container sx={{ flexGrow: 1 }}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>

      <Bottombar />
    </Stack>
  );
}

export default Layout;
