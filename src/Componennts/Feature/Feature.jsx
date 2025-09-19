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
    title: 'Leadership & Capacity Building',
    description: 'Empowering youth and communities through innovative leadership programs.',
  },
  {
    icon: <FaBriefcase />,
    title: 'Humanitarian Supports',
    description: 'Providing assistant for vulnerable youths and people living with disabilities for community development.',
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
          <h2>About ZOZAC Community</h2>
          <p>
        We are a dynamic association dedicated to training innovative leaders for a brighter tomorrow. Our focus areas include promoting education, peace, and unity, youth employment, while providing humanitarian assistance to grassroots communities alongside environmental preservation.
     Our association was founded by Afuh Alfred Ngum, who rose above adversity after being abandoned by his father at the age of 3. Witnessing the struggles of vulnerable youths, lack of education opportunities, access to employment, skills, so, he decided that, he will create a better future for others for the sake of community development starting with grassroots efforts, he eventually registered ZOZAC Community in 2022, ZOZAC, a word from his created language which means "Togetherness Is Strength."
<span></span>
          </p>
        </div>
        <div className="section-header">
          <h2>Our Core Purpose</h2>
          <p>
At ZOZAC Community, we offer a range of impactful initiatives designed to train leaders, empower youths,
            promote Peace & Unity, engage in community projects to drive sustainable development  alongside providing humanitarian assistant to vulnerable populations.
          </p>
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







