import React, { useState, useEffect, useRef } from "react";
import "./Pricing.css";
import CTA from "../CTA/CTA";
import Partners from "./Partners";
import Team from "./Team/Team";

/**
 * Full working Pricing component
 * - Newsletter (PDF preview + download)
 * - Team cards + modal (accessible: Esc closes, focus management, keyboard activation)
 *
 * NOTE: Place the image and PDF files in your public/ directory:
 *  - public/img30.jpg
 *  - public/person1.jpg
 *  - public/person2.jpg
 *  - public/person3.jpg
 *  - public/report.pdf
 *
 * Or adjust the paths below if you keep assets inside src/.
 */

const pdfFiles = [{ title: "Quarterly Newsletter", url: process.env.PUBLIC_URL + "/report.pdf" }];

// Sample people data — replace with your real data or fetch from an API
const people = [
  {
    name: "Aisha Johnson",
    position: "Program Director",
    picture: process.env.PUBLIC_URL + "/person1.jpg",
    bio:
      "Aisha leads our community programs, focusing on food security and youth education. She has 10+ years of experience working with nonprofits and community partners.",
  },
  {
    name: "Samuel Okoye",
    position: "Operations Manager",
    picture: process.env.PUBLIC_URL + "/person2.jpg",
    bio:
      "Samuel oversees operations and logistics, ensuring our programs run smoothly and reach those who need them most.",
  },
  {
    name: "María López",
    position: "Communications Lead",
    picture: process.env.PUBLIC_URL + "/person3.jpg",
    bio:
      "María manages storytelling, outreach, and partnerships. She builds relationships across stakeholders to amplify our impact.",
  },
];

const heroImg = process.env.PUBLIC_URL + "/img30.jpg";

const Pricing = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const closeBtnRef = useRef(null);

  // Close modal on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedPerson(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Move focus to close button when modal opens
  useEffect(() => {
    if (selectedPerson && closeBtnRef.current) {
      // slight delay to ensure element is mounted
      setTimeout(() => closeBtnRef.current.focus(), 0);
    }
  }, [selectedPerson]);

  const imgStyle = {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "1rem",
  };

  const modalContentStyle = {
    background: "#fff",
    borderRadius: "12px",
    padding: "2rem",
    maxWidth: "650px",
    width: "100%",
    maxHeight: "80vh",
    overflowY: "auto",
    textAlign: "center",
    position: "relative",
    animation: "fadeIn 0.3s ease-in-out",
  };

  return (
    <section id="pricing" className="pricing">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="container">
        {/* Newsletter Section */}
        <div className="section-header">
          <center>
            <h3 style={{ fontSize: "19px" }}>NEWSLETTER</h3>
          </center>
          <section
            style={{
              background: "#f9f9f9",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
              padding: "2rem",
              gap: "2rem",
            }}
          >
            <div style={{ flex: 1 }}>
              <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#333" }}>Our Reports</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
                {pdfFiles.map((pdf, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#fff",
                      borderRadius: "12px",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                      padding: "1rem",
                      textAlign: "center",
                    }}
                  >
                    <h3 style={{ marginBottom: "1rem", fontSize: "1.2rem", color: "#444" }}>{pdf.title}</h3>

                    <div style={{ textAlign: "center" }}>
                      <img src={heroImg} alt="Program hero" style={{ height: "300px", borderRadius: "10px", maxWidth: "100%" }} />
                    </div>

                    {/* PDF preview; object/embed fallback */}
                    <div style={{ marginTop: "1rem", borderRadius: "8px", overflow: "hidden" }}>
                      <object data={pdf.url} type="application/pdf" width="100%" height="400" aria-label={`${pdf.title} PDF`}>
                        <p>
                          PDF preview is not available. You can{" "}
                          <a href={pdf.url} download>
                            download the PDF
                          </a>
                          .
                        </p>
                      </object>
                    </div>

                    <a
                      href={pdf.url}
                      download
                      style={{
                        display: "inline-block",
                        marginTop: "1rem",
                        padding: "0.6rem 1.2rem",
                        background: "#2d5b1a",
                        color: "#fff",
                        borderRadius: "8px",
                        textDecoration: "none",
                      }}
                    >
                      Download PDF
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Bio Section */}
        <div style={{ marginTop: "4rem" }}>
          <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Meet Our Team</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem", marginTop: "3rem" }}>
            {people.map((person, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  padding: "1rem",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                onClick={() => setSelectedPerson(person)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedPerson(person);
                  }
                }}
                aria-label={`View bio for ${person.name}`}
              >
                <img src={person.picture} alt={`${person.name} profile`} style={imgStyle} />
                <h3>{person.name}</h3>
                <p style={{ color: "#777" }}>{person.position}</p>
                <button
                  type="button"
                  style={{
                    marginTop: "1rem",
                    padding: "0.6rem 1.2rem",
                    background: "#2d5b1a",
                    color: "#fff",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPerson(person);
                  }}
                >
                  View Bio
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedPerson && (
          <div
            style={{
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
            }}
            onClick={() => setSelectedPerson(null)}
            aria-modal="true"
            role="dialog"
            aria-labelledby="modal-title"
          >
            <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
              <button
                ref={closeBtnRef}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "15px",
                  background: "transparent",
                  border: "none",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedPerson(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <img
                src={selectedPerson.picture}
                alt={`${selectedPerson.name} profile large`}
                style={{ maxHeight: "400px", width: "100%", borderRadius: "10px" }}
              />
              <h2 id="modal-title">{selectedPerson.name}</h2>
              <p style={{ color: "#777" }}>{selectedPerson.position}</p>
              <p style={{ marginTop: "1rem", color: "#444", lineHeight: "1.6", whiteSpace: "pre-line", textAlign: "justify" }}>
                {selectedPerson.bio}
              </p>
            </div>
          </div>
        )}
      </div>

      <CTA />
      <Team />
      <Partners />
    </section>
  );
};

export default Pricing;
