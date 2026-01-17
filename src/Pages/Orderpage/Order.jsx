



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
    container: {
      minHeight: "100vh",
      backgroundColor: "#f8f9fa",
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      marginTop: "80px",
      marginBottom: "560px",
    },
    wrapper: {
      width: "100%",
      maxWidth: "1200px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
      width: "100%",
    },
    title: {
      color: "green",
      fontSize: "2.5rem",
      fontWeight: "700",
      marginBottom: "20px",
      background: "green",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    description: {
      fontSize: "1.1rem",
      color: "#636e72",
      lineHeight: "1.6",
      maxWidth: "800px",
      margin: "0 auto",
      backgroundColor: "white",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
    },
    formContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "30px",
      width: "100%",
      justifyContent: "center",
    },
    formSection: {
      flex: "1",
      minWidth: "300px",
      maxWidth: "600px",
    },
    form: {
      backgroundColor: "white",
      borderRadius: "16px",
      padding: "35px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
      border: "1px solid #e9ecef",
    },
    fieldset: {
      border: "none",
      marginBottom: "30px",
      padding: "0",
    },
    legend: {
      fontSize: "1.3rem",
      fontWeight: "600",
      color: "#2d3436",
      marginBottom: "20px",
      display: "flex",
      alignItems: "center",
      paddingBottom: "10px",
      borderBottom: "2px solid #f1f3f4",
      width: "100%",
    },
    number: {
      backgroundColor: "green",
      color: "#fff",
      height: "36px",
      width: "36px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1rem",
      marginRight: "12px",
      borderRadius: "50%",
      fontWeight: "600",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontSize: "0.95rem",
      fontWeight: "500",
      color: "#495057",
    },
    input: {
      width: "100%",
      padding: "14px 16px",
      fontSize: "1rem",
      border: "2px solid #e9ecef",
      borderRadius: "8px",
      backgroundColor: "#f8f9fa",
      transition: "all 0.3s ease",
      marginBottom: "20px",
      boxSizing: "border-box",
    },
    inputFocus: {
      outline: "none",
      borderColor: "#667eea",
      backgroundColor: "white",
      boxShadow: "0 0 0 3px rgba(102, 126, 234, 0.1)",
    },
    textarea: {
      width: "100%",
      padding: "14px 16px",
      fontSize: "1rem",
      border: "2px solid #e9ecef",
      borderRadius: "8px",
      backgroundColor: "#f8f9fa",
      transition: "all 0.3s ease",
      marginBottom: "20px",
      minHeight: "150px",
      resize: "vertical",
      fontFamily: "inherit",
    },
    select: {
      width: "100%",
      padding: "14px 16px",
      fontSize: "1rem",
      border: "2px solid #e9ecef",
      borderRadius: "8px",
      backgroundColor: "#f8f9fa",
      transition: "all 0.3s ease",
      marginBottom: "20px",
      cursor: "pointer",
    },
    button: {
      width: "100%",
      padding: "16px",
      fontSize: "1.1rem",
      fontWeight: "600",
      backgroundColor: "green",
      background: "green",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginTop: "10px",
    },
    buttonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 20px rgba(102, 126, 234, 0.4)",
    },
    buttonDisabled: {
      opacity: "0.7",
      cursor: "not-allowed",
    },
    highlight: {
      color: "green",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.header}>
          <h1 style={styles.title}>Create Your Project with Us</h1>
          <div style={styles.description}>
            <p>
              We are committed to making a lasting impact. Partner with us to
              create a better future for our communities. Together we can achieve
              much more, because <span style={styles.highlight}>"Togetherness Is Strength"</span>.
              ZOZAC is the spirit of togetherness with the combination of
              self-strength and ability for everyone's benefits.
            </p>
          </div>
        </div>

        <div style={styles.formContainer}>
          <div style={styles.formSection}>
            <form 
              onSubmit={handleSubmit} 
              style={styles.form}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.08)";
              }}
            >
              <fieldset style={styles.fieldset}>
                <legend style={styles.legend}>
                  <span style={styles.number}>1</span> Enter Your Details
                </legend>

                <label style={styles.label}>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={styles.input}
                  onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                  onBlur={(e) => e.target.style = styles.input}
                  required
                  placeholder="Enter your full name"
                />

                <label style={styles.label}>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.input}
                  onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                  onBlur={(e) => e.target.style = styles.input}
                  required
                  placeholder="Enter your email address"
                />

                <label style={styles.label}>Phone Number</label>
                <input
                  type="tel"
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  style={styles.input}
                  onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                  onBlur={(e) => e.target.style = styles.input}
                  placeholder="Enter your phone number"
                />

                <label style={styles.label}>WhatsApp Number</label>
                <input
                  type="tel"
                  name="whatsappnumber"
                  value={formData.whatsappnumber}
                  onChange={handleChange}
                  style={styles.input}
                  onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                  onBlur={(e) => e.target.style = styles.input}
                  placeholder="Enter your WhatsApp number"
                />
              </fieldset>

              <fieldset style={styles.fieldset}>
                <legend style={styles.legend}>
                  <span style={styles.number}>2</span> About Yourself
                </legend>
                <label style={styles.label}>Detailed Information About You</label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  style={styles.textarea}
                  onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                  onBlur={(e) => e.target.style = styles.textarea}
                  placeholder="Tell us about yourself, your background, and your project ideas..."
                ></textarea>
              </fieldset>
            </form>
          </div>

          <div style={styles.formSection}>
            <div style={{
              ...styles.form,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <fieldset style={styles.fieldset}>
                <legend style={styles.legend}>
                  <span style={styles.number}>3</span> How You Found Us
                </legend>
                <label style={styles.label}>How did you know about us?</label>
                <select
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  style={styles.select}
                  onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                  onBlur={(e) => e.target.style = styles.select}
                >
                  <option value="">-- Choose an option --</option>
                  <option value="Facebook">From Facebook</option>
                  <option value="Referral">From a referral</option>
                  <option value="Google">From Google</option>
                  <option value="Instagram">From Instagram</option>
                  <option value="LinkedIn">From LinkedIn</option>
                  <option value="Friend">From a friend</option>
                  <option value="Other">Other</option>
                </select>
              </fieldset>

              <fieldset style={styles.fieldset}>
                <legend style={styles.legend}>
                  <span style={styles.number}>4</span> Preferred Contact Method
                </legend>
                <label style={styles.label}>How should we contact you?</label>
                <select
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleChange}
                  style={styles.select}
                  onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                  onBlur={(e) => e.target.style = styles.select}
                >
                  <option value="">-- Choose preferred method --</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone Call</option>
                  <option value="WhatsApp">WhatsApp Message</option>
                  <option value="Text">Text Message</option>
                </select>
              </fieldset>

              <div style={{ marginTop: 'auto' }}>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  style={{
                    ...styles.button,
                    ...(loading && styles.buttonDisabled)
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      Object.assign(e.target.style, styles.buttonHover);
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span style={{ display: 'inline-block', marginRight: '8px' }}>
                        ⏳
                      </span>
                      Processing...
                    </>
                  ) : (
                    "Submit Your Project Request"
                  )}
                </button>
                
                <p style={{
                  fontSize: "0.85rem",
                  color: "#6c757d",
                  textAlign: "center",
                  marginTop: "15px",
                  fontStyle: "italic"
                }}>
                  * Required fields
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;








