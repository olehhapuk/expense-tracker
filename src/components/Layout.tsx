import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Bottombar from './Bottombar';

function Layout() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Bottombar />
    </div>
  );
}

export default Layout;
