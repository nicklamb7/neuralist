import React from 'react';
import FeaturedPosts from '../../components/featuredPosts/FeaturedPosts';
import Feed from '../../components/feed/Feed';
import NavLinks from '../../components/navLinks/NavLinks';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <NavLinks />
      <Feed />
      <FeaturedPosts />
    </div>
  )
}

export default Home
