import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../json/Comp_5.json';

export default class Component_5 extends Component {
  render() {
    const { clientsSection } = data;

    return (
      <main id="content">
        {/* Clients */}
        <section id="clients" className="scrollto clearfix">
          <div className="row clearfix">
            <div className="col-3">
              <div className="section-heading">
                <h3>{clientsSection.sectionHeading.title}</h3>
                <h2 className="section-title">{clientsSection.sectionHeading.subtitle}</h2>
                <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
              </div>
            </div>
            <div className="col-2-3">
              {/* Loop through companies */}
              {clientsSection.companies.map((company, index) => (
                <Link key={index} to={company.route} className="col-3">
                  <img src={company.imageSrc} alt="Company" />
                  <div className="client-overlay">
                    <span>{company.overlayText}</span>
                  </div>
                </Link>
              ))}
              {/* End of Company Loop */}
            </div>
          </div>
        </section>
        {/* End of Clients */}
      </main>
    );
  }
}
