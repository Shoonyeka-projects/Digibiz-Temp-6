import React, { Component } from 'react'
import { Link } from 'react-router-dom'; 
export default class Banner extends Component {
  render() {
    return (
        <div id="wrapper">
        <header id="banner" className="scrollto clearfix" data-enllax-ratio=".5">
        <div id="banner-content" className="row clearfix">
        <div className="col-38">
          <div className="section-heading">
            <h1>A FREE AND SIMPLE LANDING PAGE</h1>
            <h2>Namari is a free landing page template you can use for your projects. It is free to use for your personal and commercial projects, enjoy!</h2>
          </div>
          <Link to="#" className="button">START CREATING TODAY</Link>
        </div>
      </div>
      </header>
      </div>
    )
  }
}
