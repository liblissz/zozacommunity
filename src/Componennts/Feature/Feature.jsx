import React from 'react';
import { 
  FaChalkboardTeacher, 
  FaBriefcase, 
  FaLaptopCode, 
  FaCogs, 
  FaShieldAlt, 
  FaPaintBrush, 
  FaHandsHelping 
} from 'react-icons/fa';
import './Feature.css';

const features = [

   {
    icon: <FaChalkboardTeacher />,
    title: 'Peace Building , Education & Youth Empowerment',
    description: 'Providing quality education and personal growth opportunities to empower individuals and communities.',
  },
    {
    icon: <FaChalkboardTeacher />,
    title: 'Social Cohesion & Community Development',
    description: 'Empowering youth and communities through innovative leadership programs.',
  },
  {
    icon: <FaBriefcase />,
    title: 'Humanitarian Aid',
    description: 'Fostering inclusiveness, trust and sustainable development and improving the quality of life for communities through initiatives that promote economic growth, social justice and community empowerment.',
  },
  // {
  //   icon: <FaLaptopCode />,
  //   title: 'ICT & Digital Skills Empowerment',
  //   description: 'Equipping communities with skills in coding, CMS, and digital literacy.',
  // },
  // {
  //   icon: <FaCogs />,
  //   title: 'Software & Tech Services',
  //   description: 'Custom software solutions including websites, desktop, and mobile applications.',
  // },

  // {
  //   icon: <FaPaintBrush />,
  //   title: 'Graphic Design & Creative Services',
  //   description: 'Designing impactful visuals and branding to help communities thrive.',
  // },
  {
    icon: <FaHandsHelping />,
    title: 'Inclusiveness in diversity.',
    description: 'Promoting peace, unity, social cohesion, and civic awareness through activities & programs.',
  },
];

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          {/* <h2>About ZOZAC Community</h2>
          <p>
        We are a dynamic association dedicated to training innovative leaders for a brighter tomorrow. Our focus areas include promoting education, peace, and unity, youth employment, while providing humanitarian assistance to grassroots communities alongside environmental preservation.
     Our association was founded by Afuh Alfred Ngum, who rose above adversity after being abandoned by his father at the age of 3. Witnessing the struggles of vulnerable youths, lack of education opportunities, access to employment, skills, so, he decided that, he will create a better future for others for the sake of community development starting with grassroots efforts, he eventually registered ZOZAC Community in 2022, ZOZAC, a word from his created language which means "Togetherness Is Strength."
<span></span>
          </p> */}
        </div>
        <div className="section-header">
          <h2>About ZOZAC Community</h2>
          <p>
At ZOZAC Community, we are a dynamic non-governmental, non-profit civil society organization 
            dedicated to empowering the next generation of leaders and creating a brighter 
            future for all. Our focus is to empower leaders, support community development, 
            and promote positive change. Our mission is built on the belief that every individual
            has the potential to make a difference, while we strive to create opportunities for
            growth, development, and positive impact in our communities through areas like:
          </p>
          <br/>

                <button className="hover" style={{width: "100%", padding: "12px",
                              background: "green", color: "#fff", border: "none", outline: "none" }} 
                onClick={()=> window.location.href = "/about"}>{"Read More"}</button>
        </div>
        <br/>
        <br/>

        <div className="section-header">
        <h2> Our Focus Thermatic Areas:</h2>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        

        </div>
      </div>
    </section>
  );
};

export default Features;














