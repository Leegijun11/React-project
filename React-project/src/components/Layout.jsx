import React from 'react';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Timer />
      <Outlet />
    </div>
  )
}

export default Layout