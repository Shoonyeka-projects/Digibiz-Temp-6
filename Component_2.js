import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../json/Comp_2.json';

export default class Component_2 extends Component {
  render() {
    const { gallerySection } = data;

    return (
      // Main Content Area
      <main id="content">
        {/* Gallery */}
        <section id="gallery" className="row text-center scrollto clearfix" data-featherlight-gallery data-featherlight-filter="a">
          {gallerySection.images.map((image, index) => (
            <Link key={index} to={image.src} data-featherlight="image" className={`col-3 wow fadeIn`} data-wow-delay={image.delay}>
              <img src={image.src} alt={image.alt} />
            </Link>
          ))}
        </section>
        {/* End of Gallery */}
      </main>
    );
  }
}
