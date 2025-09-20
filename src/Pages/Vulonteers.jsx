import React, { useState } from "react";

// Example volunteers array
const volunteers = [
  {
    name: "Alice Johnson",
    role: "Community Organizer",
    image: "/volunteer1.jpg",
    bio: "Alice has been leading community initiatives for 5 years. She loves engaging youth and organizing impactful events."
  },
  {
    name: "John Doe",
    role: "Event Coordinator",
    image: "/volunteer2.jpg",
    bio: "John coordinates events and volunteers. He ensures everything runs smoothly and everyone has a great experience."
  },
  {
    name: "Mary Smith",
    role: "Youth Mentor",
    image: "/volunteer3.jpg",
    bio: "Mary mentors youth in leadership and community development, guiding them to achieve their full potential."
  },
];

const VolunteerPage = () => {
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  // Styles
  const pageStyle = {
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    background: "#f4f7fa",
    minHeight: "100vh"
  };

  const headingStyle = {
    textAlign: "center",
    color: "#2d5b1a",
    marginBottom: "2rem",
    fontSize: "2rem",
    fontWeight: "bold"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem"
  };

  const cardStyle = {
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
    marginBottom: "1rem"
  };

  const nameStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#333"
  };

  const roleStyle = {
    fontSize: "1rem",
    color: "#777",
    marginBottom: "1rem"
  };

  const buttonStyle = {
    padding: "0.5rem 1rem",
    background: "#2d5b1a",
    color: "#fff",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "background 0.3s ease"
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
    padding: "1rem"
  };

  const modalContentStyle = {
    background: "#fff",
    borderRadius: "12px",
    padding: "2rem",
    maxWidth: "600px",
    width: "100%",
    maxHeight: "80vh",
    overflowY: "auto",
    textAlign: "center",
    position: "relative"
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "15px",
    background: "transparent",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer"
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Meet Our Volunteers</h1>
      <div style={gridStyle}>
        {volunteers.map((volunteer, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => setSelectedVolunteer(volunteer)}
          >
            <img src={volunteer.image} alt={volunteer.name} style={imgStyle} />
            <div style={nameStyle}>{volunteer.name}</div>
            <div style={roleStyle}>{volunteer.role}</div>
            <button style={buttonStyle}>View Bio</button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedVolunteer && (
        <div style={modalOverlayStyle} onClick={() => setSelectedVolunteer(null)}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <button style={closeButtonStyle} onClick={() => setSelectedVolunteer(null)}>
              &times;
            </button>
            <img
              src={selectedVolunteer.image}
              alt={selectedVolunteer.name}
              style={{ ...imgStyle, height: "300px" }}
            />
            <h2 style={nameStyle}>{selectedVolunteer.name}</h2>
            <p style={roleStyle}>{selectedVolunteer.role}</p>
            <p style={{ marginTop: "1rem", color: "#444", lineHeight: "1.6" }}>
              {selectedVolunteer.bio}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VolunteerPage;
