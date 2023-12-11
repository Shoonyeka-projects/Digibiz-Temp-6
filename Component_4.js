import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../json/Comp_4.json';

export default class Component_4 extends Component {
  render() {
    const { testimonialsSection } = data;

    return (
      <main id="content">
        {/* Testimonials */}
        <section id="testimonials" className="scrollto text-center" data-enllax-ratio=".2">
          <div className="row clearfix">
            <div className="section-heading">
              <h3>{testimonialsSection.sectionHeading.title}</h3>
              <h2 className="section-title">{testimonialsSection.sectionHeading.subtitle}</h2>
            </div>
            {/* User Testimonials */}
            {testimonialsSection.testimonials.map((testimonial, index) => (
              <div key={index} className="col-3 testimonial classic">
                <img src={testimonial.imageSrc} alt="User" />
                <q>{testimonial.quote}</q>
                <footer>{testimonial.author}</footer>
              </div>
            ))}
            {/* End of Testimonials */}
          </div>
        </section>
        {/* End of Testimonials */}
      </main>
    );
  }
}
