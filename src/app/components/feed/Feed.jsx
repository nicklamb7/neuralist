import React, { Component } from 'react';
import Post from '../post/Post';
import './Feed.scss';

const isSearched = searchTerm => item =>
item.title.toLowerCase().includes(searchTerm.toLowerCase());

const posts = [{
  objectId: 1,
  author: 'Nicholas Lamb',
  profileImg: 'https://res.cloudinary.com/practicaldev/image/fetch/s--q4pJcgxU--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/737747/a1b2bc44-f5a0-4c08-acff-b0c12d65ae75.jpeg',
  date: 'Oct 27 (13 hours ago)',
  title: 'Behavioural Design',
  description: 'Something desc',
  img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--2N6B1Vx---/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/beolwimxqy0a43fhl9el.png'
}, {
  objectId: 2,
  author: 'Nicholas Lamb',
  profileImg: 'https://res.cloudinary.com/practicaldev/image/fetch/s--q4pJcgxU--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/737747/a1b2bc44-f5a0-4c08-acff-b0c12d65ae75.jpeg',
  date: 'Oct 27 (13 hours ago)',
  title: 'Something2',
  description: 'Something desc',
  img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--2N6B1Vx---/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/beolwimxqy0a43fhl9el.png'
}, {
  objectId: 3,
  author: 'Nicholas Lamb',
  profileImg: 'https://res.cloudinary.com/practicaldev/image/fetch/s--q4pJcgxU--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/737747/a1b2bc44-f5a0-4c08-acff-b0c12d65ae75.jpeg',
  date: 'Oct 27 (13 hours ago)',
  title: 'Something3',
  description: 'Something desc',
  img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--2N6B1Vx---/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/beolwimxqy0a43fhl9el.png'
}, {
  objectId: 4,
  author: 'Nicholas Lamb',
  profileImg: 'https://res.cloudinary.com/practicaldev/image/fetch/s--q4pJcgxU--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/737747/a1b2bc44-f5a0-4c08-acff-b0c12d65ae75.jpeg',
  date: 'Oct 27 (13 hours ago)',
  title: 'Something4',
  description: 'Something desc',
  img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--2N6B1Vx---/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/beolwimxqy0a43fhl9el.png'
}]

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts,
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
  return (
    <div className="feed">
      <form>
        <input
          type="text"
          onChange={this.onSearchChange}
        />
      </form>
      {this.state.posts.filter(isSearched(this.state.searchTerm)).map(post =>
          <Post
            key={post.objectId}
            author={post.author}
            profileImg={post.profileImg}
            date={post.date}
            title={post.title}
            description={post.description}
            image={post.img} />
      )}
    </div>
  )}
}

export default Feed
