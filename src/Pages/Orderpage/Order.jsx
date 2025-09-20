import React, { useState } from 'react';
import './Order.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const Order = () => {
  const [user_name, setuser_name] = useState("");
  const [email, setemail] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [whatappnumber, setwhatsappnumber] = useState("");
  const [details, setdetails] = useState("");
  const [want, setwant] = useState("");
  const [gettous, setgettous] = useState("");
  const [loading, setloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setloading(true);
      const response = await axios.post("https://zozacbackend.onrender.com/api/post/orders", {
        name: user_name,
        email: email,
        phonenumber: phonenumber,
        whatsappnumber: whatappnumber,
        details: details,
        want: want,
        gettous: gettous
      });

      if (response.status === 200) {
        toast.success(response.data.message);
      }
      setdetails("")
      setemail("")
      setgettous("")
      setphonenumber("")
      setuser_name("")
      setwant("")
      setwhatsappnumber("")
    } catch (error) {
      toast.error("Submission failed. Please try again.");
      toast.error(error)
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="hello">
      <div className='charles'>
        <div className="maria">
          <h1>
            <a href="#">Create Your Project with Us</a>
          </h1>

          <form onSubmit={handleSubmit} className="juliet">
            <h1 className="ken">Join Us</h1>

            <fieldset className="victor">
              <legend><span className="number">1</span> Enter Your Details</legend>

              <label className="nina">Name:</label>
              <input type="text" value={user_name} onChange={(e) => setuser_name(e.target.value)} className="mike" />

              <label className="nina">Email:</label>
              <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="mike" />

              <label className="nina">Phone Number:</label>
              <input type="text" value={phonenumber} onChange={(e) => setphonenumber(e.target.value)} className="mike" />

              <label className="nina">WhatsApp Number:</label>
              <input type="text" value={whatappnumber} onChange={(e) => setwhatsappnumber(e.target.value)} className="mike" />
            </fieldset>

            <fieldset className="victor">
              <legend><span className="number">2</span> Your Order Information</legend>
              <label className="nina">Detailed Information About You:</label>
              <textarea value={details} onChange={(e) => setdetails(e.target.value)} className="flora innerr"></textarea>
            </fieldset>

            <fieldset className="victor">
              <label className="nina">How did you know about us:</label>
              <select value={want} onChange={(e) => setwant(e.target.value)} className="flora fill">
                <option value="">-- Choose --</option>
                <option value="Website">from facebook</option>
                <option value="Desktop App">from a referer</option>
                <option value="Ethical Hacking">just from google</option>
              </select>
            </fieldset>

            <fieldset className="victor">
              <label className="nina">How should we get to you:</label>
              <select value={gettous} onChange={(e) => setgettous(e.target.value)} className="flora fill">
                <option value="">-- Choose --</option>
                <option value="Phone">Phone</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Call">Phone Call</option>
              </select>
            </fieldset>

            <button type="submit" className="blessing">
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
