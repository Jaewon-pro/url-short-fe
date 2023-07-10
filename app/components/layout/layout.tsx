import './layout.css';

import React, { ReactNode } from 'react';
import NavBar from '../navbar/navbar';
import Footer from './footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
