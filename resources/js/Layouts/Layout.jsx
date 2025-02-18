import React from 'react';
import Header from '../Pages/Componets/Header'; // Ensure this path is correct

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen">
          <main>{children}</main>
      </div>
      <div>Footer</div>
      
    </>
  );
};

export default Layout;
