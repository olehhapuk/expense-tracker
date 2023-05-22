import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import { router } from './config/router';

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
