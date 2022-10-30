import React, { useState, useEffect } from "react";
import './../styles/Navbar.css'

const Header =() => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav className={`${sticky ? "sticky" : ""}`}>
      <div className="nav-inner">
        <div className='leftNav'>
        <img
            src="https://www.nasa.gov/sites/default/files/images/nasaLogo-570x450.png"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
        />
        <p className='nasaName'>Sahil Sharma</p>
        </div>
        <div className="links midNav">
          <div className="pageHead">Astronomy picture of the day</div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
