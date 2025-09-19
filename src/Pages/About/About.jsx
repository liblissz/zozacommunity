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
           About ZOZAC Community

              </h2>
              <div className="text">
                We are a dynamic association dedicated to training innovative leaders for a brighter tomorrow. Our focus areas 
                include promoting education, peace, and unity, youth employment, while providing humanitarian assistance to
                grassroots communities alongside environmental preservation.
                Our association was founded by Afuh Alfred Ngum, who rose above adversity after being abandoned by his father 
                at the age of 3. Witnessing the struggles of vulnerable youths, lack of education opportunities, access to 
                employment, skills, so, he decided that, he will create a better future for others for the sake of community 
                development starting with grassroots efforts, he eventually registered ZOZAC Community in 2022, ZOZAC, a word 
                from his created language which means "Togetherness Is Strength."


              </div>
                  <h2>
Mission & Vision


              </h2>
              <div className="text">
            Mission: Empower individuals with self-awareness, discipline, and the willpower to lead themselves and others towards a positive destination built on trust.
                <br/>
Vision: Be the leading force transforming, educating, and empowering individuals, groups, and communities with knowledge to prepare for tomorrow and the next generation.



              </div>
              <ul className="grape">
                <h1>What We Do
</h1>
                <li>- Mission: Empower individuals with self-awareness, discipline, and the willpower to lead themselves and others towards a positive destination built on trust.
- Vision: Be the leading force transforming, educating, and empowering individuals, groups, and communities with knowledge to prepare for tomorrow and the next generation.
</li>
                <li>- Empowering Youths: Encourage youths to utilize their skills and abilities for community development.
</li>
                               <li>- Programs for Peace and Unity: Host sports competitions like "Canini Nitata" to promote peace, unity, and community development, train what we call "Peace Guards" to be peace diplomats and advocates. 
- Skill Development: Offer training sessions to help youths develop their talents and skills.
- Environmental Conservation: Plant trees and promote eco-friendly environments.
- Humanitarian Works: Engage in volunteering, humanitarian works, and promote agriculture and culture.
</li>

                               <li>- Education: Provide scholarships and promote quality education for kids and youths.
- Capacity Building: Organize conferences, seminars, and workshops to educate, transform, and empower.
</li>
                
                <li>- Innovation & Education: Support and develop innovative ideas while promoting quality education.
- Collaboration: Unite organizations for community development, personal growth, and knowledge exchange.
- Leadership Development: Foster integrity through leadership skills and personal development.
</li>
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




