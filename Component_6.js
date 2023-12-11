import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pricingData from '../json/Comp_6.json';

export default class Component_6 extends Component {
  render() {
    const { sectionHeading, pricingOptions } = pricingData;

    return (
      <main id="content">
        {/* Pricing Tables */}
        <section id="pricing" className="secondary-color text-center scrollto clearfix">
          <div className="row clearfix">
            <div className="section-heading">
              <h3>{sectionHeading.title}</h3>
              <h2 className="section-title">{sectionHeading.subtitle}</h2>
            </div>

            {/* Loop through pricing options */}
            {pricingOptions.map((option, index) => (
              <div key={index} className={`pricing-block col-3 wow fadeInUp`} data-wow-delay={`${0.4 + index * 0.2}s`}>
                <div className="pricing-block-content">
                  <h3>{option.type}</h3>
                  <p className="pricing-sub">{option.description}</p>
                  <div className="pricing">
                    <div className="price">
                      <span>{option.price}</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                  <ul>
                    {option.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  {/* Replace anchor tag with Link component */}
                  <Link to={option.buyLink} className="button">
                    BUY TODAY
                  </Link>
                </div>
              </div>
            ))}
            {/* End of Pricing Loop */}
          </div>
        </section>
        {/* End of Pricing Tables */}
      </main>
    );
  }
}
