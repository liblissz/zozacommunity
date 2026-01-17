import React from "react";

const ContactForm = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        background: "linear-gradient(135deg, #f4f7f9, #e8f0ec)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* FORM CARD */}
      <div
        style={{
          width: "100%",
          maxWidth: "520px",
          background: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
          padding: "40px 30px",
        }}
      >
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "26px",
              color: "#2d5b1a",
              letterSpacing: "0.5px",
            }}
          >
            Get in Touch
          </h1>

          <p
            style={{
              marginTop: "10px",
              fontSize: "15px",
              color: "#666",
              lineHeight: "1.6",
            }}
          >
            We'd love to hear from you. Please fill out the form below and our
            team will get back to you shortly.
          </p>
        </div>

        {/* FORM */}
        <form action="https://formsubmit.co/your@email.com" method="POST">
          {/* NAME */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                marginBottom: "6px",
                color: "#444",
              }}
            >
              Full Name
            </label>

            <input
              type="text"
              name="name"
              required
              placeholder="Enter your full name"
              style={{
                width: "100%",
                padding: "14px 16px",
                fontSize: "15px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                outline: "none",
              }}
              onFocus={(e) => {
                e.target.style.border = "1px solid #2d5b1a";
                e.target.style.boxShadow =
                  "0 0 0 3px rgba(45,91,26,0.15)";
              }}
              onBlur={(e) => {
                e.target.style.border = "1px solid #ccc";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {/* EMAIL */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                marginBottom: "6px",
                color: "#444",
              }}
            >
              Email Address
            </label>

            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              style={{
                width: "100%",
                padding: "14px 16px",
                fontSize: "15px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                outline: "none",
              }}
              onFocus={(e) => {
                e.target.style.border = "1px solid #2d5b1a";
                e.target.style.boxShadow =
                  "0 0 0 3px rgba(45,91,26,0.15)";
              }}
              onBlur={(e) => {
                e.target.style.border = "1px solid #ccc";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {/* MESSAGE */}
          <div style={{ marginBottom: "25px" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                marginBottom: "6px",
                color: "#444",
              }}
            >
              Message
            </label>

            <textarea
              name="message"
              rows="4"
              required
              placeholder="Write your message here..."
              style={{
                width: "100%",
                padding: "14px 16px",
                fontSize: "15px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                outline: "none",
                resize: "vertical",
              }}
              onFocus={(e) => {
                e.target.style.border = "1px solid #2d5b1a";
                e.target.style.boxShadow =
                  "0 0 0 3px rgba(45,91,26,0.15)";
              }}
              onBlur={(e) => {
                e.target.style.border = "1px solid #ccc";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              color: "#fff",
              background:
                "linear-gradient(135deg, #2d5b1a, #3f7d24)",
              boxShadow:
                "0 10px 25px rgba(45,91,26,0.35)",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow =
                "0 15px 30px rgba(45,91,26,0.45)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow =
                "0 10px 25px rgba(45,91,26,0.35)";
            }}
          >
            Send Message
          </button>
        </form>

        {/* FOOTER NOTE */}
        <p
          style={{
            marginTop: "25px",
            textAlign: "center",
            fontSize: "13px",
            color: "#777",
          }}
        >
          Your information is secure and will not be shared.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
