import React, { useState } from 'react';
import './LandingPage.css';

function LandingPage() {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegisterClick = () => {
    
    setIsRegistered(true);
  };

  return (
    <>
      <div className='landing-container'>
        <nav className='navigation'>
          <ul className='landing-nav'>
            <li className="link"><a >Home</a></li>
            <li className="link"><a >About Us</a></li>
            <li className="link"><a >Services</a></li>
            <li className="link"><a >Courses</a></li>
            <li className="link"><a >Blog</a></li>
            <li className="link"><a className="nav__btn">Register</a></li>
          </ul>
        </nav>
      </div>

      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>Your go-to destination for quality services and courses.</p>
          <a  className="hero-btn">Learn More</a>
        </div>
      </header>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Join Us Today!</h2>
          <p>Unlock a world of opportunities by registering for our courses.</p>
          {!isRegistered ? (
            <button onClick={handleRegisterClick} className="cta-btn">
              Register Now
            </button>
          ) : (
            <p className="registered-message">Thank you for registering!</p>
          )}
        </div>
      </section>
    </>
  );
}

export default LandingPage;
