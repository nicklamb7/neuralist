import React from 'react';
import './Company.scss';

function Company(props) {
  const clickHandler = () => {
    alert(props.name);
  }
  return (
    <li className="company" onClick={clickHandler}>
      <h1>{props.name}</h1>
    </li>
  )
}

export default Company;
