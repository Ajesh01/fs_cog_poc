import React, { useState, useEffect } from 'react';


function Navbarr() {


    return (
      <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="/">Navbar</a>
    
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home 
            </a>
            
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/cart">Cart</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="/inventory">Inventory 
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> */}

          <form action="/cart">
          {/* <button className="btn btn-warning my-2 my-sm-0" type='link' href="/cart">Cart</button> */}

    <input type="submit" value="Cart" className='btn btn-warning my-2 my-sm-0' />
</form>

        </form>
      </div>
    </nav></div>
    );
  }
  
  export default Navbarr;
  