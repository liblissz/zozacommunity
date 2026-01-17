import React, {useState} from 'react';
import './About.css';
import img1  from '../../assets/WhatsApp Image 2025-07-04 at 10.09.35_3aa4d729.jpg'
import img2 from '../../assets/WhatsApp Image 2025-07-04 at 10.09.30_441aaa22.jpg'
import Team from '../../Componennts/Team/Team';

const About = () => {

  const [open, setopen] = useState(false);
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
             At ZOZAC Community, we are a dynamic non-governmental, non-profit civil society organization 
                dedicated to empowering the next generation of leaders and creating a brighter future for all. 
                Our focus is to empower leaders, support community development, and promote positive change.
                Our mission is built on the belief that every individual has the potential to make a difference,
                while we strive to 
                create opportunities for growth, development, and positive impact in our communities through areas like:
              </div>
              <button style={{width: "100%", padding: "12px", background: "#333" }} onClick={()=> setopen(!open)}>Read More...</button>

              {open  && 
                <ul className="grape">
                <h1>What We Do</h1>
        <br/>
                <li>
                  <b>Education: </b>
                  <br/>
                  Providing quality education and personal growth opportunities to empower 
                  individuals and communities.
              </li>
              <li>
                  <b>Peace Building:  </b>
                  <br/>
           Promoting inclusivity and community cohesion through initiatives 
                that promote understanding, tolerance, and mutual respect.
              </li>

        <li>
                  <b>Youth Empowerment:  </b>
                  <br/>
      Supporting young people in acquiring skills and being self-sustainable with
          opportunities that enable them to contribute to their communities.
              </li>

                <li>
                  <b>Humanitarian Aid:  </b>
                  <br/>
   Providing support to vulnerable individuals and 
                  communities in need, including emergency relief and long-term development programs.
              </li>

        <li>
                  <b>Social Cohesion:  </b>
                  <br/>
Building strong, inclusive, and resilient communities by promoting a sense of belonging, trust, and cooperation among community members.
              </li>

           <li>
                  <b>Community Development:  </b>
                  <br/>
Fostering sustainable development and improving the quality of life for communities through initiatives that promote economic growth, social justice and community empowerment. 
           </li>



                   <li>
                  <b>Environmental Preservation:   </b>
                  <br/>
Protecting and conserving the natural environment, promoting sustainable practices and mitigating the impact of climate change.
                   </li>
        
      </ul>}


              
                  <h2>Mission & Vision</h2>
              <div className="text">
            Mission: Empower individuals with self-awareness, discipline, and the willpower to lead themselves and others towards a positive destination built on trust.
                <br/>
Vision: Be the leading force transforming, educating, and empowering individuals, groups, and communities with knowledge to prepare for tomorrow and the next generation.



              </div>
              <ul className="grape">
                <h1>What We Do</h1>
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
                <a href="tel: 674274276" className="pineapple" style={{background: "#2d5b1a"}}>
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





