// import React, { useState } from 'react';
// import './Order.css';
// import axios from 'axios';
// import toast from 'react-hot-toast';

// const Order = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phonenumber: "",
//     whatsappnumber: "",
//     details: "",
//     source: "",
//     contactMethod: ""
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const response = await axios.post(
//         "https://zozacbackend.onrender.com/api/post/orders",
//         formData
//       );

//       if (response.status === 200) {
//         toast.success(response.data.message);
//         setFormData({
//           name: "",
//           email: "",
//           phonenumber: "",
//           whatsappnumber: "",
//           details: "",
//           source: "",
//           contactMethod: ""
//         });
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Submission failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="hello">
//       <div className="charles">
//         <div className="maria">
//           <h1>
//             <a href="#">Create Your Project with Us</a>
//           </h1>

//           <form onSubmit={handleSubmit} className="juliet">
//             <p>We are committed to making a lasting impact. Partner with us to create a better future 
//               for our communities, together we can achieve much more, because, <b>“Togetherness Is Strength”</b>
//               ZOZAC is the spirit of togetherness with the combination of self-strength and ability for everyone’s benefits.
//              </p>

//             <fieldset className="victor">
//               <legend><span className="number">1</span> Enter Your Details</legend>

//               <label className="nina">Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="mike"
//                 required
//               />

//               <label className="nina">Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mike"
//                 required
//               />

//               <label className="nina">Phone Number:</label>
//               <input
//                 type="text"
//                 name="phonenumber"
//                 value={formData.phonenumber}
//                 onChange={handleChange}
//                 className="mike"
//               />

//               <label className="nina">WhatsApp Number:</label>
//               <input
//                 type="text"
//                 name="whatsappnumber"
//                 value={formData.whatsappnumber}
//                 onChange={handleChange}
//                 className="mike"
//               />
//             </fieldset>

//             <fieldset className="victor">
//               <legend><span className="number">2</span> About yourself</legend>
//               <label className="nina">Detailed Information About You:</label>
//               <textarea
//                 name="details"
//                 value={formData.details}
//                 onChange={handleChange}
//                 className="flora innerr"
//               ></textarea>
//             </fieldset>

//             <fieldset className="victor">
//               <label className="nina">How did you know about us:</label>
//               <select
//                 name="source"
//                 value={formData.source}
//                 onChange={handleChange}
//                 className="flora fill"
//               >
//                 <option value="">-- Choose --</option>
//                 <option value="Facebook">From Facebook</option>
//                 <option value="Referral">From a referral</option>
//                 <option value="Google">From Google</option>
//               </select>
//             </fieldset>

//             <fieldset className="victor">
//               <label className="nina">How should we get to you:</label>
//               <select
//                 name="contactMethod"
//                 value={formData.contactMethod}
//                 onChange={handleChange}
//                 className="flora fill"
//               >
//                 <option value="">-- Choose --</option>
//                 <option value="Phone">Phone</option>
//                 <option value="WhatsApp">WhatsApp</option>
//                 <option value="Call">Phone Call</option>
//               </select>
//             </fieldset>

//             <button type="submit" className="blessing">
//               {loading ? "Loading..." : "Submit"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Order;















import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    whatsappnumber: "",
    details: "",
    source: "",
    contactMethod: "",
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
          contactMethod: "",
        });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Submission failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // ✅ Inline styles
  const styles = {
    hello: {
      minHeight: "100vh",
      marginTop: "100px",
        marginBottom: "600px",
    },
    charles: {
      height: "100vh",
    },
    mariaLink: {
      color: "#333",
      fontWeight: 500,
      textDecoration: "none",
      fontSize: "26px",
    },
    juliet: {
      maxWidth: "300px",
      margin: "10px auto",
      padding: "20px",
      background: "#f4f7f8",
      borderRadius: "8px",
    },
    victor: {
      marginBottom: "20px",
      border: "none",
    },
    nina: {
      display: "block",
      marginBottom: "8px",
    },
    mikeFlora: {
      background: "#e8eeef",
      border: "none",
      fontSize: "16px",
      outline: 0,
      padding: "15px",
      width: "100%",
      color: "#333",
      boxShadow: "0 1px 0 rgba(0,0,0,0.03) inset",
      marginBottom: "20px",
    },
    innerr: {
      height: "200px",
    },
    fill: {
      height: "50px",
    },
    flora: {
      padding: "6px",
      borderRadius: "4px",
    },
    blessing: {
      padding: "15px",
      color: "#fff",
      backgroundColor: "#5e4bc9",
      fontSize: "18px",
      textAlign: "center",
      borderRadius: "5px",
      width: "100%",
      border: "1px solid #483ac1",
      boxShadow: "0 -1px 0 rgba(255,255,255,0.1) inset",
      marginTop: "10px",
      cursor: "pointer",
    },
    number: {
      backgroundColor: "#5f99cf",
      color: "#fff",
      height: "30px",
      width: "30px",
      display: "inline-block",
      fontSize: "0.8em",
      marginRight: "4px",
      lineHeight: "30px",
      textAlign: "center",
      borderRadius: "50%",
    },
  };

  return (
    <div style={styles.hello}>
      <div style={styles.charles}>
        <div>
          <h1>
            <a href="#" style={styles.mariaLink}>
              Create Your Project with Us
            </a>
          </h1>

                 <p style={{ fontSize: "17px" }}>
              We are committed to making a lasting impact. Partner with us to
              create a better future for our communities, together we can
              achieve much more, because, <b>“Togetherness Is Strength”</b> ZOZAC
              is the spirit of togetherness with the combination of
              self-strength and ability for everyone’s benefits.
            </p>

          <br/>
           <br/>

          <form onSubmit={handleSubmit} style={styles.juliet}>
     

            <fieldset style={styles.victor}>
              <legend>
                <span style={styles.number}>1</span> Enter Your Details
              </legend>

              <label style={styles.nina}>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={styles.mikeFlora}
                required
              />

              <label style={styles.nina}>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.mikeFlora}
                required
              />

              <label style={styles.nina}>Phone Number:</label>
              <input
                type="text"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleChange}
                style={styles.mikeFlora}
              />

              <label style={styles.nina}>WhatsApp Number:</label>
              <input
                type="text"
                name="whatsappnumber"
                value={formData.whatsappnumber}
                onChange={handleChange}
                style={styles.mikeFlora}
              />
            </fieldset>

            <fieldset style={styles.victor}>
              <legend>
                <span style={styles.number}>2</span> About yourself
              </legend>
              <label style={styles.nina}>Detailed Information About You:</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                style={{ ...styles.mikeFlora, ...styles.innerr }}
              ></textarea>
            </fieldset>

            <fieldset style={styles.victor}>
              <label style={styles.nina}>How did you know about us:</label>
              <select
                name="source"
                value={formData.source}
                onChange={handleChange}
                style={{ ...styles.mikeFlora, ...styles.fill, ...styles.flora }}
              >
                <option value="">-- Choose --</option>
                <option value="Facebook">From Facebook</option>
                <option value="Referral">From a referral</option>
                <option value="Google">From Google</option>
              </select>
            </fieldset>

            <fieldset style={styles.victor}>
              <label style={styles.nina}>How should we get to you:</label>
              <select
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                style={{ ...styles.mikeFlora, ...styles.fill, ...styles.flora }}
              >
                <option value="">-- Choose --</option>
                <option value="Phone">Phone</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Call">Phone Call</option>
              </select>
            </fieldset>

            <button type="submit" style={styles.blessing}>
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;

