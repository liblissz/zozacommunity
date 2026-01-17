import React from "react";
import "./Prising.css";
import CTA from "../CTA/CTA";
import Partners from "./Partners";
import Team from "../Team/Team";

// Newsletter PDF files (put report.pdf in public/ or adjust path)
const pdfFiles = [{ title: "Quarterly Newsletter", url: process.env.PUBLIC_URL + "/report.pdf" }];

// Hero image (place img30.jpg in public/ or adjust path)
const heroImg = process.env.PUBLIC_URL + "/img30.jpg";

const imgStyle = {
  width: "100%",
  height: "400px",
  objectFit: "cover",
  borderRadius: "10px",
  marginBottom: "1rem",
};

const cardStyle = {
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  padding: "1rem",
  textAlign: "center",
};

const downloadStyle = {
  display: "inline-block",
  marginTop: "1rem",
  padding: "0.6rem 1.2rem",
  background: "#2d5b1a",
  color: "#fff",
  borderRadius: "8px",
  textDecoration: "none",
};

const Pricing = () => {
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
              <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#333" }}>
                Our Reports
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                  gap: "2rem",
                }}
              >
                {pdfFiles.map((pdf, i) => (
                  <div key={i} style={cardStyle}>
                    <h3 style={{ marginBottom: "1rem", fontSize: "1.2rem", color: "#444" }}>
                      {pdf.title}
                    </h3>

                    <div style={{ textAlign: "center" }}>
                      <img
                        src={heroImg}
                        alt="Program hero"
                        style={{ height: "300px", borderRadius: "10px", maxWidth: "100%" }}
                      />
                    </div>

                    <div style={{ marginTop: "1rem", borderRadius: "8px", overflow: "hidden" }}>
                      <object
                        data={pdf.url}
                        type="application/pdf"
                        width="100%"
                        height="400"
                        aria-label={`${pdf.title} PDF`}
                      >
                        <p>
                          PDF preview not available. You can{" "}
                          <a href={pdf.url} download>
                            download the PDF
                          </a>
                          .
                        </p>
                      </object>
                    </div>

                    <a href={pdf.url} download style={downloadStyle}>
                      Download PDF
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <CTA />
      <Team />
      <Partners />
    </section>
  );
};

export default Pricing;


