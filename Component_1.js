import React, { Component } from 'react';
import data from '../json/Comp_1.json';

export default class Component_1 extends Component {
  render() {
    const { aboutSection } = data;

    return (
      // Main Content Area
      <main id="content">
        {/* Introduction */}
        <section id="about" className="introduction scrollto">
          <div className="row clearfix">
            <div className="col-3">
              <div className="section-heading">
                <h3>{aboutSection.title}</h3>
                <h2 className="section-title">{aboutSection.subtitle}</h2>
                <p className="section-subtitle">{aboutSection.description}</p>
              </div>
            </div>
            <div className="col-2-3">
              {/* Icon Blocks */}
              {aboutSection.iconBlocks.map((block, index) => (
                <div key={index} className={`col-2 icon-block icon-top wow fadeInUp`} data-wow-delay={`0.${2 * index + 1}s`}>
                  {/* Icon */}
                  <div className="icon">
                    <i className={block.icon}></i>
                  </div>
                  {/* Icon Block Description */}
                  <div className="icon-block-description">
                    <h4>{block.blockTitle}</h4>
                    <p>{block.blockDescription}</p>
                  </div>
                </div>
              ))}
              {/* End of Icon Blocks */}
            </div>
          </div>
        </section>
        {/* End of Introduction */}
      </main>
    );
  }
}
