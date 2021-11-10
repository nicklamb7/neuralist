import React from 'react';
import './Post.scss';

function Post(props) {
  const clickHandler = () => {
    alert("You've just clicked on an article.")
  }
  return (
    <div className="post" key={props.objectId} onClick={clickHandler}>
      <div className="image-wrapper">
        <img src={props.image} alt="" />
      </div>
      <div className="content">
        <div className="content-top">
          <div className="author-profile-pic">
            <img src={props.profileImg} alt="" />
          </div>
          <p>{props.author}<br />
          <small>{props.date}</small></p>
        </div>
        <div className="content-bottom">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Post
