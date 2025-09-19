import React, { useState } from 'react';
import './Usecase.css';
import img1 from '../../assets/WhatsApp Image 2025-07-04 at 10.09.29_8f52353b.jpg'
import img2 from'../../assets/WhatsApp Image 2025-07-04 at 10.09.32_59085943.jpg'
import img3 from '../../assets/WhatsApp Image 2025-07-04 at 10.09.40_474fb199.jpg'

// The data for all use cases
const useCasesData = [
  {
    id: 'introduction',
    title: 'Who We Are',
    description: `Founded in ORACLE BLISSZ, ZOZAC Community (Zonal Organization for Zenith African Communities) is a Pan-African organization dedicated to empowering grassroots communities through leadership training, sustainable development, peace promotion, and humanitarian aid.`,
    points: [
      'surviving comunities',
     
    ],
    imgSrc:img1,
    imgAlt: 'ZOZAC',
  },
  {
    id: 'Our Mission',
    title: 'Our Mission',
    description: `To see an Africa led by responsible, innovative, and compassionate leaders who are deeply rooted in community values..`,
    points: [
   
      'Uniting Africa',
    ],
    imgSrc: img2,
    imgAlt: 'ZOZAC',
  },
  {
    id: 'Our Vision',
    title: 'Our Vision',
    description: `To empower local communities through education, leadership, technology, and humanitarian initiatives that promote peace and development.`,
    points: [
      'Integrity',
      'innovation',
      'Leadership',
      'Community Empowerment'
     
    ],
    imgSrc: img3,
    imgAlt: 'ZOZAC',
  },
 
];

const UseCases = () => {
  // The active tab (default is healthcare)
  const [activeTab, setActiveTab] = useState('introduction');

  return (
    <section id="use-cases" className="use-cases">
      <div className="container">
        {/* <div className="section-header">
          <h2> ZOZAC Community</h2>
          <p>ZOZAC is a non-profit, non-governmental organization committed to empowering individuals and strengthening communities across Africa. We promote peace,
             sustainable development, youth leadership, and humanitarian support — starting from the grassroots.</p>
        </div> */}

        <div className="use-cases-tabs">
          {/* Navigation Tabs */}
          <div className="tabs-nav">
            {useCasesData.map((useCase) => (
              <button
                key={useCase.id}
                className={`tab-btn ${activeTab === useCase.id ? 'active' : ''}`}
                onClick={() => setActiveTab(useCase.id)}
              >
                {useCase.id.charAt(0).toUpperCase() + useCase.id.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tabs-content">
            {useCasesData.map((useCase) => (
              <div
                key={useCase.id}
                className={`tab-pane ${activeTab === useCase.id ? 'active' : ''}`}
                id={useCase.id}
              >
                <div className="tab-content">
                  <div className="tab-text">
                    <h3>{useCase.title}</h3>
                    <p>{useCase.description}</p>
                    <ul>
                      {useCase.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                    <a href="#" className="btn-secondary">
                      Click on next tab <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                  <div className="tab-image">
                    <img src={useCase.imgSrc} alt={useCase.imgAlt} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
