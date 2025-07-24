import React, { useState } from 'react';
import './Prising.css'
import { Link } from 'react-router-dom';
const plans = [
  {
    name: 'Community Support',
    description: 'Engaging and uplifting local communities through basic empowerment.',
    features: [
      { label: 'Leadership & capacity building workshops', included: true },
      { label: 'Introductory ICT & digital skills programs', included: true },
      { label: 'Vocational discovery sessions', included: true },
      { label: 'Participation in outreach events', included: true },
    ],
    buttonText: 'Join the Movement',
    buttonClass: 'btn-secondary',
    popular: false,
  },
  {
    name: 'Development Track',
    description: 'Empowering individuals with deeper skills to drive innovation.',
    features: [
      { label: 'Advanced digital & entrepreneurial training', included: true },
      { label: 'Software development & CMS workshops', included: true },
      { label: 'Cybersecurity awareness & prep', included: true },
      { label: 'Community project participation', included: true },
    ],
    buttonText: 'Start Growing',
    buttonClass: 'btn-primary',
    popular: true,
  },
  {
    name: 'Partnership Program',
    description: 'Collaborating with organizations and leaders for larger impact.',
    features: [
      { label: 'Joint community transformation projects', included: true },
      { label: 'Peacebuilding & civic engagement programs', included: true },
      { label: 'Co-hosted events & community forums', included: true },
      { label: 'Access to ZOZAC digital platforms', included: true },
    ],
    buttonText: 'Become a Partner',
    buttonClass: 'btn-secondary',
    popular: false,
  },


];

const Pricing = () => {
  const [annual, _] = useState(false);


  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Simplicity And Transparency.</h2>
          <p>ZOZAC is an association training innovative leaders for a better tomorrow, promoting peace, providing
             humanitarian assistance in grassroots communities and working on environmental preservation.</p>
        </div>
        <div className="pricing-toggle">
         
          <span>
            Annual <span className="discount">Save 20%</span>
          </span>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="monthly" style={{ display: annual ? 'none' : 'inline' }}>
                    {plan.monthlyPrice}
                  </span>
                  <span className="annually" style={{ display: annual ? 'inline' : 'none' }}>
                    {plan.annualPrice}
                  </span>
                  <span className="period"></span>
                </div>
                <p>{plan.description}</p>
              </div>
              <div className="pricing-features">
                <ul>
                  {plan.features.map(({ label, included }, idx) => (
                    <li key={idx} className={included ? '' : 'disabled'}>
                      <i className={`fas fa-${included ? 'check' : 'times'}`}></i> {label}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to={'/order'}>
              <div className="pricing-footer">
                <a href="#" className={plan.buttonClass}>
                  {plan.buttonText}
                </a>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
