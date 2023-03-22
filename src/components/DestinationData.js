import './Destinationstyle.css'

import React, { Component } from 'react'

export default class DestinationData extends Component {
  render() {
    return (
        <div className={this.props.className}>
        <div className="des-text">
        <h2>{this.props.heading}</h2>
        <p>{this.props.text}</p>
        </div>
        
        <div className="image">
            <img src={this.props.img1} alt="img" />
            <img src={this.props.img2} alt="img" />
        
        </div>
        </div>
    )
  }
}
