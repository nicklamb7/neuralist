import React, { Component } from 'react';
import './Company.scss';

class Company extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false
    };

    this.handleHover = this.handleHover.bind(this);
  }
  handleHover(){
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }))
  }

  render() {
    const clickHandler = () => {
      alert(this.props.name);
    }
    const btnClass = this.state.isHovered ? "show-details" : "show-name";
    return (
      <li
      onClick={clickHandler}
      id="company">
        <div className={btnClass} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
          <h4>{this.props.ranking + 1}.</h4>
          <h1>{this.props.name}</h1>
          <div className="details">
            <p>Overview: 99/100</p>
            <p>Overview: 99/100</p>
            <p>Overview: 99/100</p>
            <p>Overview: 99/100</p>
            <p>Overview: 99/100</p>
          </div>
        </div>
      </li>
    )
  }
}

export default Company;
