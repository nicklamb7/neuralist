import React from 'react';
import Link from '../link/Link';
import './NavLinks.scss';

function NavLinks() {
  return (
    <>
      <div class="nav-links">
        <Link title="🏠 Home" link="/" />
        <Link title="📚 Reading List" link="/" />
        <Link title="📃 Listings" link="/" />
        <Link title="🎙 Podcasts" link="/" />
        <Link title="🎥 Videos" link="/" />
        <Link title="🏷 Tags" link="/" />
        <Link title="💡 FAQ" link="/" />
        <Link title="🧠 About" link="/" />
        <Link title="📞 Contact" link="/" />
      </div>
    </>
  )
}

export default NavLinks
