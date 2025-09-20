import React from "react";

// Array of partner objects
const partners = [
  { name: "ZOZAC WOMEN NETWORK", logo: "/partner1.jpg", url: "https://partner1.com" },
  { name: "ZOZAC YOUTH FELLOWSHIP", logo: "/partner3.jpg", url: "https://partner3.com" },
  { name: "zozac institude", logo: "/partner4.jpg", url: "https://partner4.com" },
];

const Partners = () => {
  // Styles
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "2rem",
    padding: "2rem",
    justifyItems: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    padding: "1rem",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  };

  const imgStyle = {
    width: "100%",
    height: "150px",
    objectFit: "contain",
    marginBottom: "1rem",
  };

  const nameStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#333",
  };

  // Hover effect
  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
  };

  return (
    <section style={{ padding: "3rem 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#2d5b1a" }}>
        Our Partners
      </h2>
      <div style={containerStyle}>
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div
              style={cardStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <img src={partner.logo} alt={partner.name} style={imgStyle} />
              <div style={nameStyle}>{partner.name}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Partners;
