import React from "react";
//import link from "react-router-dom"

function Header(){

    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{color:"red"}}>Royal Pharmacy </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <a className="nav-link" href="/add">Add Order</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Order Edit/Delete</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/search">Search</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/report">Report</a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>

    </div>



    )

}

export default Header;