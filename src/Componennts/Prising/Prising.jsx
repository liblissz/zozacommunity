import React from "react";
import "./Pricing.css";
import Partners from "./Partners";
import Team from "../Team/Team";

// Newsletter PDF files
const pdfFiles = [
  {
    title: "Quarterly Newsletter",
    url:  "/report.pdf",
  },
];

// Hero image
const heroImg = "/img30.jpg";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
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
              flexDirection: "column",
              padding: "2rem",
              gap: "2rem",
            }}
          >
            <h2 style={{ textAlign: "center", color: "#333" }}>
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
                  <h3
                    style={{
                      marginBottom: "1rem",
                      fontSize: "1.2rem",
                      color: "#444",
                    }}
                  >
                    {pdf.title}
                  </h3>

                  <img
                    src={heroImg}
                    alt="food program"
                    style={{
                      height: "300px",
                      borderRadius: "10px",
                      maxWidth: "100%",
                      marginBottom: "1rem",
                    }}
                  />

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
          </section>
        </div>

        <Team />
        <Partners />
      </div>
    </section>
  );
};

export default Pricing;

