import React, { useState } from "react";
import "./Prising.css";
import { Link } from "react-router-dom";
import img from "/img30.jpg"; // ✅ make sure extension is correct

const plans = [/* unchanged */];

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
    bio: `Mr. Afuh Alfred Ngum is a dedicated Peace advocate... (long text)`,
  },
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
    height: "220px",
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
    padding: "1rem",
  };

  const modalContentStyle = {
    background: "#fff",
    borderRadius: "12px",
    padding: "2rem",
    maxWidth: "650px",
    width: "100%",
    maxHeight: "80vh", // 🔥 limit modal height
    overflowY: "auto", // 🔥 scroll for long bios
    textAlign: "center",
    position: "relative",
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
              <p style={{ marginTop: "1rem", color: "#444", lineHeight: "1.6" }}>
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
