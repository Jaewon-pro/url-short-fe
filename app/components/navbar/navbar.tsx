import './navbar.css';

import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span />
        <span />
        <span />
        <ul id="menu">
          <Link href="/"><li>URL 단축하기</li></Link>
          <Link href="about"><li>소개</li></Link>
          <Link href="report"><li>신고하기</li></Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
