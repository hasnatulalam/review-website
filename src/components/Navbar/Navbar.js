import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'




const Navbar = () => {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light w-100">
          <div class="container-fluid">
            {/* <NavLink className="navbar-brand" to="/">
           
            </NavLink> */}

            <div></div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink activeClassName="nav-link"  to="/home">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink activeClassName="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink activeClassName="nav-link" to="/service">
                    Service
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink activeClassName="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>

                
              </ul>
             
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Navbar;