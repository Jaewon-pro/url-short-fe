import './layout.css';

import React, { ReactNode } from 'react';
import NavBar from '../navbar/navbar';

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
    </div>
  );
}

export default Layout;
