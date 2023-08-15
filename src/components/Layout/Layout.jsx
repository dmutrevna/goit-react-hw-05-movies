import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Navbar from 'components/Navbar/Navbar';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
