  import React from 'react';
  import '../style/navbar.css';

  export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">  
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-link" href="/home">Home</a>

              <a className="nav-link" href="/login">Login</a>
              <a className="nav-link" href="/create-bunk">Register Bunk</a>
            </div>
            
            <form className="d-flex ms-auto" role="search">
              <input className="form-control me-2" type="search" 
                placeholder="Search" 
                aria-label="Search"     
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
