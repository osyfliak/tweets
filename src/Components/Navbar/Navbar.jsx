import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to='/' class="nav-link">Home</Link>
            </li>
            <li class="nav-item">
            <Link to='/tweets' class="nav-link">Tweets</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
