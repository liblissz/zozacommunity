import React, { useState } from 'react';
import './CTA.css'
import Donate from '../../Pages/Donation/Donate';
const CTA = () => {

  const [show, setshow] = useState(false)
  return (
    <>
    {show && <Donate/>}
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>Volunteer With Us</h2>
          <p>Your time, your voice, and your skills can help transform lives. Join our team of changemakers today!

Partner With Us
Whether you’re a local business, NGO, or international organization — let’s work together to build a stronger Africa.

Donate
Your support fuels our mission. Every donation helps us reach more people and expand our programs.</p>
          <div className="cta-buttons">
            <a href="tel: 674274276" target='_blank' className="btn-primary">Contact Us</a>

            <a onClick={()=>setshow(!show)} className="btn-outline">DONATE</a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default CTA;
