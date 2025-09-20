import React, { useState } from "react";
import "./Prising.css";
import { Link } from "react-router-dom";
import img from "/img30.jpg"; // ✅ make sure extension is correct

const plans = [
  {
    name: "Community Support",
    description:
      "Engaging and uplifting local communities through basic empowerment.",
    features: [
      { label: "Leadership & capacity building workshops", included: true },
      { label: "Introductory ICT & digital skills programs", included: true },
      { label: "Vocational discovery sessions", included: true },
      { label: "Participation in outreach events", included: true },
    ],
    buttonText: "Join the Movement",
    buttonClass: "btn-secondary",
    popular: false,
  },
  {
    name: "Development Track",
    description:
      "Empowering individuals with deeper skills to drive innovation.",
    features: [
      { label: "Advanced digital & entrepreneurial training", included: true },
      { label: "Software development & CMS workshops", included: true },
      { label: "Cybersecurity awareness & prep", included: true },
      { label: "Community project participation", included: true },
    ],
    buttonText: "Start Growing",
    buttonClass: "btn-primary",
    popular: true,
  },
  {
    name: "Partnership Program",
    description:
      "Collaborating with organizations and leaders for larger impact.",
    features: [
      { label: "Joint community transformation projects", included: true },
      { label: "Peacebuilding & civic engagement programs", included: true },
      { label: "Co-hosted events & community forums", included: true },
      { label: "Access to ZOZAC digital platforms", included: true },
    ],
    buttonText: "Become a Partner",
    buttonClass: "btn-secondary",
    popular: false,
  },
];

// 👤 People data for Bio Section
const people = [
  {
    name: "Lee Bliss",
    position: "Software Engineer",
    picture: "/profile1.jpg",
    bio: "Lee Bliss is a passionate software engineer with experience in web and app development. He specializes in creating innovative solutions for real-world problems.",
  },
  {
    name: "Mr. Afuh Alfred Ngum",
    position: "Executive Director",
    picture: "/profile1.jpg",
    bio: `Mr. Afuh Alfred Ngum is a dedicated Peace advocate, youth empowerment leader, community builder, and humanitarian with over 8 years of experience in Cameroon and parts of Africa. Experienced in working in conflict-affected and grassroots communities fostering peace, promoting development, countering youth vulnerability and violent extremism. Received leadership award in recognition of dedication to peace building and community development in Cameroon and Africa. Trained and certified as a Peace Advocate Expert by the Peace Academy, as a Humanitarian Peacekeeping General by GAICAM International, and as a Peaceweaver by Civic Watch.
------------------------------------------------------------------------------------------------------------
WORK EXPERIENCE
FOUNDER/EXECUTIVE DIRECTOR ZOZAC COMMUNITY (ZOZAC) | Jan 2020 – Present
• Initiate programs and projects aimed at building the capacity of youths and local organizations in Cameroon and Africa.
• Runs an international program launched in Uganda East Africa that built capacities of about 60 organizations and 400+ youths.
• Coordinate day-to-day functioning of the organization, supervising 6 staff.
• Partnered with Interfaith Vision Cameroon in 2021 to advocate for a health center in Mboma, Limbe.
• Led a team from 8+ countries to Uganda for the official launch of ACFLO and ACDGs.
• Established database of 500+ contacts including government departments, international agencies, youth organizations.
------------------------------------------------------------------------------------------------------------
GLOBAL PRESIDENT OF AFRICAN CONGRESS FOR LOCAL ORGANIZATIONS (ACFLO) | June 2020 – Present
• Mobilized and empowered youths through trainings and outreach activities in Cameroon, Nigeria, and Uganda.
• Trained 100+ youth leaders on involvement in development, unity, and peace.
• Provided consultancy to youth organizations and leaders for program implementation.
• Strengthened relationships between local organizations for development and peace.
------------------------------------------------------------------------------------------------------------
FOUNDER/EXECUTIVE DIRECTOR ZOZAC INSTITUTE | Jan 2023 – Present
• Championing the vision, mission, and goals of the institute.
• Developed engaging lesson plans in peace building, community development, youth empowerment, and countering extremism.
• Recruiting and mentoring trainers.
• Compiling and analyzing data on student progress.
• Creating collaborative and positive learning environments.
------------------------------------------------------------------------------------------------------------
TIKO YOUTHS NETWORK | Nov 2023 – Apr 2025
• Researched and supported programming on advocacy, youth empowerment, and peace.
• Conducted needs and impact assessments.
• Consulted with organizations and stakeholders on youth and community development.
------------------------------------------------------------------------------------------------------------
CONSULTANT | Blissz Concept Group LTD | Feb 2025 – Present
• Mapped affected communities and vulnerable youths in SW Cameroon to identify needs and support areas.
------------------------------------------------------------------------------------------------------------
CAMEROON REPRESENTATIVE | One World Nexus, New York USA | 2023 – 2025

TRAINER | Global Elite’s Mindset for Excellence Nigeria | 2024
• Trained youth leaders on community development and creating thriving ecosystems.
------------------------------------------------------------------------------------------------------------
PEACE BUILDING AND PEACE GUARDS | ZOZAC COMMUNITY PEACE PROGRAM | 2025 – Present
• Promoting peace and unity in Cameroon.
------------------------------------------------------------------------------------------------------------
STATE DELEGATE | ACFLO Summit Uganda | Jul 2018
• Represented Cameroonian youths to discuss growth of local organizations and youth issues.
------------------------------------------------------------------------------------------------------------
GUEST SPEAKER AT
Noblemen Book lunching  november 2023
African Congress For Local Organization (ACFLO) in Uganda    October to November  2024
Hear My Cry Submit     july  2025
AWARDS & RECOGNITION
• Grassroots Community Award of the Year 2023 – National Council of NGOs, Cameroon
• Young Youth Achiever of the Year 2024 – KeyPoint Awards
• Community Leadership & Youth Empowerment Award 2025 – Community Impact Awards, EEFEG Yaounde`,
  },
  // {
  //   name: "John Smith",
  //   position: "UX Designer",
  //   picture: "/profile3.jpg",
  //   bio: "John is a creative UX designer who focuses on creating intuitive and user-friendly designs that enhance user experiences across digital platforms.",
  // },
];

const Pricing = () => {
  const [annual, _] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const pdfFiles = [{ title: "Quarterly Newsletter", url: "/report.pdf" }];

  // Newsletter Styles
  const sectionStyle = {
    background: "#f9f9f9",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    padding: "2rem",
    gap: "2rem",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "2rem",
    color: "#333",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "2rem",
  };

  const cardStyle = {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    padding: "1rem",
    textAlign: "center",
  };

  const titleStyle = {
    marginBottom: "1rem",
    fontSize: "1.2rem",
    color: "#444",
  };

  const buttonStyle = {
    display: "inline-block",
    marginTop: "1rem",
    padding: "0.6rem 1.2rem",
    background: "#2d5b1a",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "background 0.3s ease",
  };

  // Bio Styles
  const bioGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    marginTop: "3rem",
  };

  const bioCardStyle = {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    padding: "1rem",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  };

  const imgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "1rem",
  };

  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const modalContentStyle = {
    background: "#fff",
    borderRadius: "12px",
    padding: "2rem",
    maxWidth: "600px",
    width: "90%",
    textAlign: "center",
    position: "relative",
    animation: "fadeIn 0.3s ease", // Animation
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "15px",
    background: "transparent",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
  };

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        {/* Newsletter Section */}
        <div className="section-header">
          <center>
            <h3 style={{ fontSize: "19px" }}>NEWSLETTER</h3>
          </center>
          <section style={sectionStyle}>
            <div style={{ flex: 1 }}>
              <h2 style={headingStyle}>Our Reports</h2>
              <div style={gridStyle}>
                {pdfFiles.map((pdf, index) => (
                  <div style={cardStyle} key={index}>
                    <h3 style={titleStyle}>{pdf.title}</h3>
                    <embed
                      src={pdf.url}
                      type="application/pdf"
                      width="100%"
                      height="400px"
                      style={{ borderRadius: "8px" }}
                    />
                    <a
                      href={pdf.url}
                      download
                      style={buttonStyle}
                      onMouseOver={(e) =>
                        (e.target.style.background = "#1e3c10")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.background = "#2d5b1a")
                      }
                    >
                      Download PDF
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src={img}
                className="increasesize"
                style={{ height: "300px", borderRadius: "10px" }}
                alt="food program"
              />
            </div>
          </section>
        </div>

        {/* 👤 Bio Section */}
        <div style={{ marginTop: "4rem" }}>
          <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
            Meet Our Team
          </h2>
          <div style={bioGridStyle}>
            {people.map((person, index) => (
              <div
                key={index}
                style={bioCardStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img src={person.picture} alt={person.name} style={imgStyle} />
                <h3>{person.name}</h3>
                <p style={{ color: "#777" }}>{person.position}</p>
                <button
                  style={buttonStyle}
                  onClick={() => setSelectedPerson(person)}
                >
                  View Bio
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Popup */}
        {selectedPerson && (
          <div style={modalOverlayStyle} onClick={() => setSelectedPerson(null)}>
            <div
              style={modalContentStyle}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                style={closeButtonStyle}
                onClick={() => setSelectedPerson(null)}
              >
                &times;
              </button>
              <img
                src={selectedPerson.picture}
                alt={selectedPerson.name}
                style={{ ...imgStyle, height: "250px" }}
              />
              <h2>{selectedPerson.name}</h2>
              <p style={{ color: "#777" }}>{selectedPerson.position}</p>
              <p style={{ marginTop: "1rem", color: "#444" }}>
                {selectedPerson.bio}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;
