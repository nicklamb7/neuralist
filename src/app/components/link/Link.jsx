import React from 'react';
import './Link.scss';

function Link(props) {
  return (
    <div className="link">
      <a href={props.link} className="title">
        <p>
          {props.title}
        </p>
      </a>
    </div>
  )
}

export default Link
