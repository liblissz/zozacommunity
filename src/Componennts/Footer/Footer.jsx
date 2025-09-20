import React, { useEffect, useState } from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  const [loagout, removelogout] = useState(false)

  const handlelogout = ()=>{
    localStorage.removeItem("user-token")
    window.location.replace("/")
  
  }
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
          <div className="footer-brand">
            <div className="logo">
              <i className="fas fa-brain"></i>
              <span>ZOZAC  </span>
            </div>
            <p>Creating Platforms for Dialogue, Unity, Collaboration, Youths Empowerment & Sustainable  Skills for Community Development.</p>
            <div className="social-links">
              {/* <a href="#"><i className="fab fa-twitter"></i></a> */}
              <a href="https://cm.linkedin.com/in/zozac-community-94a547268" target='_blank'><i className="fab fa-linkedin"></i></a>
              <a href="https://www.facebook.com/zozaccommunity" target='_blank'><i className="fab fa-facebook"></i></a>
            
              {/* <a href="#"><i className="fab fa-github"></i></a> */}
            </div>
          </div>

          <div className="footer-links">
     
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <Link to={'/about'}>
              <li><a href="https://pefscomsystem.com/about/">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              </Link>
            </ul>
          </div>

          <div className="footer-links">
            <h4>contact us</h4>
            <ul>
              <li><a href="zozaccommunity@gmail.com">zozaccommunity@gmail.com</a></li>
              <li><a href="tel: 674274276">+237 674274276</a></li>
              <li><a href="#">Location: Tiko SW Region Cameroon</a></li>
             {loagout && <li><a > <button onClick={handlelogout} className="btn-primary">logout</button></a></li>}
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Subscribe to our newsletter</h4>
            <p>We will send you emails of our latest updates all the time please subscribe</p>
            <form className="newsletter-form">
              <input type="email" name="email" placeholder="Your email address" required />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} ZOZAC COMMUNITY. All rights reserved.</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;


