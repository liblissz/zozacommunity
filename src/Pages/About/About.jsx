import React from 'react';
import './About.css';
import img1  from '../../assets/WhatsApp Image 2025-07-04 at 10.09.35_3aa4d729.jpg'
import img2 from '../../assets/WhatsApp Image 2025-07-04 at 10.09.30_441aaa22.jpg'
import Team from '../../Componennts/Team/Team';

const About = () => {
  return (
    <>
    <section className="apple">
      <div className="banana">
        {/* Text Column */}
        <div className="kiwi">
          <div className="pear">
            <div className="orange">
              <span className="mango"> About ZOZAC</span>
              <h2>
                Who We Are:<br /><br /><br /> We have been existing since  2012
              </h2>
              <div className="text">
               ZOZAC – Zonal Organization for Zonal African Cooperation – is a pan-African platform 
               founded with the vision of transforming African communities through sustainable development,
                innovation, and unity. We focus on empowering local organizations and individuals across Africa 
                to take ownership of their future by creating opportunities, building capacity, and fostering 
                cross-border collaboration.


              </div>
              <ul className="grape">
                <h1>The Founder – Afuh Alfred Ngum</h1>
                <li>Afuh Alfred Ngum is the founder and visionary leader of ZOZAC. With a deep belief in Pan-Africanism, youth empowerment, and zonal development, Mr. Afuh is committed to uniting
                     African communities to solve their own problems and create a prosperous, self-sustaining future.</li>
                <li>Mission: “Empower local African zones to lead their own transformation with unity, dignity, and innovation.”

</li>
                <li>Strategist and youth mentor in regional empowerment programs</li>
              </ul>
              <div className="lemon">
                <a href="tel: 674274276" className="pineapple">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="watermelon">
          <div className="plum">
            <figure className="cherry">
              <img
                src={img1}
                alt="Image 1 about"
                className="img"
              />
            </figure>
            <figure className="blueberry">
              <img
                src={img2}
                alt="Image 2 about"
                className="img"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>

<Team/>



    </>
  );
};

export default About;
