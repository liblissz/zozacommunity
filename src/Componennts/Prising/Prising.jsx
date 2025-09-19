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

const Pricing = () => {
  const [annual, _] = useState(false);

  const pdfFiles = [
    { title: "Quarterly Newsletter", url: "/report.pdf" },
  ];

  // Inline styles
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

            <div style={{  textAlign: "center" }}>
              <img
                src={img}
                className ="increasesize"
                style={{ height: "300px", borderRadius: "10px" }}
                alt="food program"
              />
            </div>
          </section>
        </div>

        {/* Pricing Plans */}
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
              </div>
              <div className="pricing-features">
                <ul>
                  {plan.features.map(({ label, included }, idx) => (
                    <li key={idx} className={included ? "" : "disabled"}>
                      <i
                        className={`fas fa-${included ? "check" : "times"}`}
                      ></i>{" "}
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to={"/order"}>
                <div className="pricing-footer">
                  <a href="#" className={plan.buttonClass}>
                    {plan.buttonText}
                  </a>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

