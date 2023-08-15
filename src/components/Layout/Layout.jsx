import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Navbar from 'components/Navbar/Navbar';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <header>
        <div>
          <Navbar />
        </div>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
