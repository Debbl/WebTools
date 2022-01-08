import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Link to="/base32">base32</Link>
      <Link to="/base64">base64</Link>
      <Outlet />
    </>
  );
}

export default Home;
