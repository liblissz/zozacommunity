import React from "react";

const About = () => {
  return (
    <section
      style={{
        padding: "60px 20px",
        backgroundColor: "#f9f9f9",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          background: "#ffffff",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "32px",
            color: "#2d5b1a",
          }}
        >
          About ZOZAC Community
        </h2>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            color: "#444",
            marginBottom: "20px",
          }}
        >
          ZOZAC Community is legally registered under the Cameroon government with
          its headquarters in Tiko sub-division, Fako Division, South West Region,
          Cameroon, West Africa. The organization operates in conformity with the
          prescription of Article 7 of Law No{" "}
          <span style={{ color: "green", fontWeight: "600" }}>
            90/054 of 19/12/1990
          </span>{" "}
          relating to the creation and functioning of associations in Cameroon,
          with registration number{" "}
          <span style={{ color: "green", fontWeight: "600" }}>
            1165/G.37/C84/VOLI/SAAJP
          </span>
          . This registration demonstrates our commitment to transparency,
          accountability, and good governance.
        </p>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            color: "#444",
            marginBottom: "20px",
          }}
        >
          We envision a world where communities are empowered, resilient, and
          capable of driving sustainable development through education,
          environmental protection, social inclusion, and economic empowerment.
        </p>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            color: "#444",
          }}
        >
          Through partnerships, innovation, and community participation, ZOZAC
          Community works to create long-lasting impact while upholding ethical
          standards and accountability in all our activities.
        </p>
      </div>
    </section>
  );
};

export default About;
