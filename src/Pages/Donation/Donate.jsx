import React, { useState } from 'react';
import './Donate.css';
import { MdCancel } from 'react-icons/md'; // Corrected import

const Donate = () => {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <>
      {!isClosed && (
        <div className="donate-container">
          <button className="cancel-button" onClick={() => setIsClosed(true)}>
            <MdCancel size={28} />
          </button>

          <h2 className="donate-title">Support Our Mission</h2>
          <p className="donate-subtitle">
            Your donation helps us continue building and expanding our vision.
          </p>

          <div className="donate-section">
            <h3>💳 Credit Card Number</h3>
            <p className="donate-code">CM2110002000639000165086873</p>
          </div>

              <div className="donate-section">
            <h3>Swift Code:
</h3>
            <p className="donate-code">BCMACMCXXXX</p>
          </div>
          
      

          <div className="donate-section">
            <h3>📱 Mobile Account Number</h3>
            <p className="donate-code">+237 674274276</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Donate;

