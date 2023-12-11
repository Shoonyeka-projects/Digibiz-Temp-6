import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

export default class Header extends Component {
  render() {
    return (
      <div id="wrapper">
        <header id="banner" className="scrollto clearfix" data-enllax-ratio=".5">
          <div id="header" className="nav-collapse">
            <div className="row clearfix">
              <div className="col-1">
                <div id="logo">
                  <img src="images/logo.png" id="banner-logo" alt="Landing Page" />
                  <img src="images/logo-2.png" id="navigation-logo" alt="Landing Page" />
                </div>
                <aside>
                  <ul className="social-icons">
                    <li>
                      <Link to="https://www.facebook.com/username" target="_blank" title="Facebook">
                        <i className="fa fa-facebook fa-1x"></i><span>Facebook</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="http://google.com/+username" target="_blank" title="Google+">
                        <i className="fa fa-google-plus fa-1x"></i><span>Google+</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="http://www.twitter.com/username" target="_blank" title="Twitter">
                        <i className="fa fa-twitter fa-1x"></i><span>Twitter</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="http://www.instagram.com/username" target="_blank" title="Instagram">
                        <i className="fa fa-instagram fa-1x"></i><span>Instagram</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="http://www.behance.net" target="_blank" title="Behance">
                        <i className="fa fa-behance fa-1x"></i><span>Behance</span>
                      </Link>
                    </li>
                  </ul>
                </aside>
                <nav id="nav-main">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="./About">About</Link>
                    </li>
                    <li>
                      <Link to="./gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="./services">Services</Link>
                    </li>
                    <li>
                      <Link to="./testimonials">Testimonials</Link>
                    </li>
                    <li>
                      <Link to="./clients">Clients</Link>
                    </li>
                    <li>
                      <Link to="./pricing">Pricing</Link>
                    </li>
                  </ul>
                </nav>
                <div id="nav-trigger"><span></span></div>
                <nav id="nav-mobile"></nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
