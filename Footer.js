import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* Footer */}
        <footer id="landing-footer" className="clearfix">
          <div className="row clearfix">

            <p id="copyright" className="col-2">Made with love by <a href="https://www.shapingrain.com">ShapingRain</a></p>

            {/* Social Icons in Footer */}
            <ul className="col-2 social-icons">
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
            {/* End of Social Icons in Footer */}
          </div>
        </footer>
        {/* End of Footer */}
      </div>
    );
  }
}
