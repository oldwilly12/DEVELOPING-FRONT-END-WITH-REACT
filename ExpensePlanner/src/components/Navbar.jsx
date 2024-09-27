import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-botton border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Conference Expense</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Venue</a>
            <a className="nav-link" href="#">Add-ons</a>
            <a className="nav-link" href="#">Meals</a>
            <button type="button" className="btn btn-outline-warning">Show Details</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;