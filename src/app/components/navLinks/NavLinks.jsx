import React from 'react';
import Link from '../link/Link';
import './NavLinks.scss';

const links = [{
    title: '🏠 Home',
    link: '/'
  }, {
    title: '📚 Reading List',
    link: '/'
  }, {
    title: '📃 Listings',
    link: '/'
  }, {
    title: '🎙 Podcasts',
    link: '/'
  }, {
    title: '🎥 Videos',
    link: '/'
  }, {
    title: '🏷 Tags',
    link: '/'
  }, {
    title: '💡 FAQ',
    link: '/'
  }, {
    title: '🧠 About',
    link: '/'
  }, {
    title: '📞 Contact',
    link: '/'
}]

function NavLinks() {
  return (
    <>
      <div class="nav-links">
        {links.map(link =>
          <Link
            title={link.title}
            link={link.link} />
        )}
      </div>
    </>
  )
}

export default NavLinks
