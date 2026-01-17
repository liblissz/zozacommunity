import React, { useState, useEffect } from "react";
import "./Prising.css";
import img from "/img30.jpg"; 
import CTA from '../CTA/CTA'
import Partners from "./Partners"

import Team from "./Team/Team"

const Pricing = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const pdfFiles = [{ title: "Quarterly Newsletter", url: "/report.pdf" }];

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedPerson(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

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
          <center><h3 style={{ fontSize: "19px" }}>NEWSLETTER</h3></center>
          <section style={{
            background: "#f9f9f9",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            padding: "2rem",
            gap: "2rem",
          }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#333" }}>Our Reports</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
                {pdfFiles.map((pdf, i) => (
                  <div key={i} style={{
                    background: "#fff",
                    borderRadius: "12px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                    padding: "1rem",
                    textAlign: "center",
                  }}>
                    
                    <h3 style={{ marginBottom: "1rem", fontSize: "1.2rem", color: "#444" }}>{pdf.title}</h3>
                       <div style={{ textAlign: "center" }}>
              <img src={img} alt="food program" style={{ height: "300px", borderRadius: "10px", maxWidth: "100%" }} />
            </div>
                    <embed src={pdf.url} type="application/pdf" width="100%" height="400px" style={{ borderRadius: "8px" }} />
                    <a href={pdf.url} download style={{
                      display: "inline-block",
                      marginTop: "1rem",
                      padding: "0.6rem 1.2rem",
                      background: "#2d5b1a",
                      color: "#fff",
                      borderRadius: "8px",
                      textDecoration: "none",
                    }}>Download PDF</a>
                  </div>
                ))}
              </div>
            </div>

         
          </section>
        </div>

        {/* Bio Section */}
        {/* <div style={{ marginTop: "4rem" }}>
          <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Meet Our Team</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem", marginTop: "3rem" }}>
            {people.map((person, i) => (
              <div key={i} style={{
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                padding: "1rem",
                textAlign: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
                onClick={() => setSelectedPerson(person)}
              >
                <img src={person.picture} alt={`${person.name} profile`} style={imgStyle} />
                <h3>{person.name}</h3>
                <p style={{ color: "#777" }}>{person.position}</p>
                <button style={{
                  marginTop: "1rem",
                  padding: "0.6rem 1.2rem",
                  background: "#2d5b1a",
                  color: "#fff",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer"
                }}>View Bio</button>
              </div>
            ))}
          </div>
        </div> */}

        {/* Modal */}
        /* {selectedPerson && (
          <div style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            padding: "1rem",
          }}
            onClick={() => setSelectedPerson(null)}
          >
            <div style={modalContentStyle} onClick={e => e.stopPropagation()}>
              <button style={{
                position: "absolute", top: "10px", right: "15px",
                background: "transparent", border: "none", fontSize: "1.5rem", cursor: "pointer"
              }}
                onClick={() => setSelectedPerson(null)}
              >&times;</button>
              <img src={selectedPerson.picture} alt={`${selectedPerson.name} profile large`} style={{ maxHeight: "400px", width: "100%", borderRadius: "10px" }} />
              <h2>{selectedPerson.name}</h2>
              <p style={{ color: "#777" }}>{selectedPerson.position}</p>
              <p style={{ marginTop: "1rem", color: "#444", lineHeight: "1.6", whiteSpace: "pre-line", textAlign: "justify" }}>
                {selectedPerson.bio}
              </p>
            </div>
          </div>
        )} */

      </div>
        <CTA/>
    <Team/>
      <Partners/>
    </section>
  );
};

export default Pricing;












