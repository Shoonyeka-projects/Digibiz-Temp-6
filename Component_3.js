import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../json/Comp_3.json';

export default class Component_3 extends Component {
  render() {
    const { contentSection } = data;

    return (
      <main id="content">
        {/* Content Section */}
        <div id="services" className="scrollto clearfix">
          <div className="row no-padding-bottom clearfix">
            {/* Content Left Side */}
            <div className="col-3">
              {/* User Testimonial */}
              <blockquote className="testimonial text-right bigtest">
                <q>{contentSection.testimonial.quote}</q>
                <footer>— {contentSection.testimonial.author}</footer>
              </blockquote>
              {/* End of Testimonial */}
            </div>
            {/* End Content Left Side */}
            {/* Content of the Right Side */}
            <div className="col-3">
              <div className="section-heading">
                <h3>{contentSection.sectionHeading.title}</h3>
                <h2 className="section-title">{contentSection.sectionHeading.subtitle}</h2>
                <p className="section-subtitle">{contentSection.sectionContent[0].paragraph}</p>
              </div>
              {contentSection.sectionContent.map((content, index) => (
                <p key={index}>{content.paragraph}</p>
              ))}
              {/* Just replace the Video ID "UYJ5IjBRlW8" with the ID of your video on YouTube (Found within the URL) */}
              <Link
                to={{ pathname: contentSection.videoLink.pathname, state: { videoId: contentSection.videoLink.videoId, videoSite: contentSection.videoLink.videoSite } }}
                className="button video link-lightbox"
              >
                {contentSection.buttonText} <i className="fa fa-play" aria-hidden="true"></i>
              </Link>
            </div>
            {/* End Content Right Side */}
            <div className="col-3">
              <img src="images/dancer.jpg" alt="Dancer" />
            </div>
          </div>
        </div>
        {/* End of Content Section */}
      </main>
    );
  }
}
