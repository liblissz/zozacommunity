import React, { useEffect, useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { WhatsappIcon } from "react-share"; // ✅ only need the icon
import logo from "/logo1.jpg";
const Footer = () => {
  const [loagout, removelogout] = useState(false);

  const handlelogout = () => {
    localStorage.removeItem("user-token");
    window.location.replace("/");
  };

  useEffect(() => {
    if (localStorage.getItem("user-token")) {
      removelogout(true);
    } else {
      removelogout(false);
    }
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="logo">
               <img
            src={logo}
            alt="zozac logo"
            style={{ height: "60px", width: "60px",padding: "16px"  }}
          />
              <span style={{padding: "16px"}}>ZOZAC Community</span>
            </div>
            <p>
              Creating Platforms for Dialogue, Unity, Collaboration, Youths Empowerment & Sustainable Skills for Community Development.
            </p>
            <div className="social-links">
              <a href="https://cm.linkedin.com/in/zozac-community-94a547268" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/zozaccommunity" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            <h4>Organization</h4>
            <ul>
              <Link to={'/about'}>
                <li><a href="https://pefscomsystem.com/about/">About Us</a></li>
                <li><a href="#">Our Team</a></li>
              </Link>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-links">
            <h4>Contact Us</h4>
            <ul>
              <li><a href="mailto:zozaccommunity@gmail.com">zozaccommunity@gmail.com</a></li>
              <li><a href="tel:+237674274276">+237 674274276</a></li>
              <li><a href="#">Location: Tiko SW Region Cameroon P.O BOX 237 TIKO</a></li>
              {loagout && (
                <li>
                  <button onClick={handlelogout} className="btn-primary">Logout</button>
                </li>
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4>Subscribe to our newsletter</h4>
            <p>We will send you emails of our latest updates all the time. Please subscribe.</p>
            <form className="newsletter-form">
              <input type="email" name="email" placeholder="Your email address" required />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} ZOZAC COMMUNITY. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* ✅ Fixed WhatsApp Floating Button */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
        }}
      >
        <a
          href="https://wa.me/message/WYIXQMMFCXDVH1" // Direct WhatsApp chat link
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #25D366, #128C7E)",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            textDecoration: "none",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.4)";
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
          }}
        >
          <WhatsappIcon size={32} round />
        </a>
      </div>
    </footer>
  );
};

export default Footer;




