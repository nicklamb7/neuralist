import React from 'react';
import FeaturedPosts from '../../components/featuredPosts/FeaturedPosts';
import Feed from '../../components/feed/Feed';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <Feed />
      <FeaturedPosts />
    </div>
  )
}

export default Home
