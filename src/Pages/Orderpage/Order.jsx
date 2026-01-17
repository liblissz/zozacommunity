import React, { useState } from 'react';
import './Order.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    whatsappnumber: "",
    details: "",
    source: "",
    contactMethod: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "https://zozacbackend.onrender.com/api/post/orders",
        formData
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        setFormData({
          name: "",
          email: "",
          phonenumber: "",
          whatsappnumber: "",
          details: "",
          source: "",
          contactMethod: ""
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hello">
      <div className="charles">
        <div className="maria">
          <h1>
            <a href="#">Create Your Project with Us</a>
          </h1>

          <form onSubmit={handleSubmit} className="juliet">
            <h1 className="ken">Join Us</h1>

            <fieldset className="victor">
              <legend><span className="number">1</span> Enter Your Details</legend>

              <label className="nina">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mike"
                required
              />

              <label className="nina">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mike"
                required
              />

              <label className="nina">Phone Number:</label>
              <input
                type="text"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleChange}
                className="mike"
              />

              <label className="nina">WhatsApp Number:</label>
              <input
                type="text"
                name="whatsappnumber"
                value={formData.whatsappnumber}
                onChange={handleChange}
                className="mike"
              />
            </fieldset>

            <fieldset className="victor">
              <legend><span className="number">2</span> About yourself</legend>
              <label className="nina">Detailed Information About You:</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                className="flora innerr"
              ></textarea>
            </fieldset>

            <fieldset className="victor">
              <label className="nina">How did you know about us:</label>
              <select
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="flora fill"
              >
                <option value="">-- Choose --</option>
                <option value="Facebook">From Facebook</option>
                <option value="Referral">From a referral</option>
                <option value="Google">From Google</option>
              </select>
            </fieldset>

            <fieldset className="victor">
              <label className="nina">How should we get to you:</label>
              <select
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                className="flora fill"
              >
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
