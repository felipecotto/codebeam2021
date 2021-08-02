import styles from './Navbar.module.scss';
import Image from 'next/image'
import React, { useState } from "react";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }
  
  return (
    <>
      <nav
        className={
          navbar
            ? "navbar fixed-top navbar-expand-xl navbar-dark active"
            : "navbar fixed-top navbar-expand-xl navbar-dark"
        }
      >
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Logo
          </a>

          <button
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse" 
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav position-absolute top-50 start-50 translate-middle">
              <li className="nav-item">
                  <a href="#keynotes">
                    Key notes
                  </a>
              </li>
              <li className="nav-item">
                  <a href="#talks">
                    Palestras
                  </a>
              </li>
              <li className="nav-item">
                  <a href="#panels">
                    Painel
                  </a>
              </li>
              <li className="nav-item">
                  <a href="#tickets">
                    Ingressos
                  </a>
              </li>
              <li className="nav-item">
                  <a href="#schedule">
                    Agenda
                  </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;