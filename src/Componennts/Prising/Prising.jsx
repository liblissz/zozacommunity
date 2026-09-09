import React from "react";
import "./Prising.css";
import Partners from "./Partners";
import Team from "../Team/Team";

// Newsletter PDF files
const pdfFiles = [
  {
    title: "Quarterly Newsletter",
    url: "/report.pdf",
  },
];

// Hero image
const heroImg = "/img30.jpg";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container pricing-container">

        {/* Newsletter Section */}
        <div className="pricing-intro">
          <span>Community updates</span>
          <h3>Newsletter</h3>
          <p>Read the latest stories, reports, and progress from ZOZAC Community.</p>

          <section className="pricing-reports">
            <div className="pricing-reports-heading">
              <span className="pricing-kicker">Stay informed</span>
              <h2>Our Reports</h2>
            </div>

            <div className="pricing-report-grid">
              {pdfFiles.map((pdf, i) => (
                <article className="pricing-report-card" key={i}>
                  <div className="pricing-report-card-header">
                    <span>Featured report</span>
                    <h3>{pdf.title}</h3>
                  </div>

                  <img
                    src={heroImg}
                    alt="food program"
                    className="pricing-report-image"
                  />

                  <embed
                    src={pdf.url}
                    type="application/pdf"
                    className="pricing-report-preview"
                  />

                  <a
                    href={pdf.url}
                    download
                    className="pricing-download"
                  >
                    Download report <span aria-hidden="true">↓</span>
                  </a>
                </article>
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



