import React from 'react'

export default function Navigation() {
  return (
    <div>
      <header id="header">
        <div className="container">
          <div className="logo float-left">
            <h1 className="text-light"><a href="index.html"><span>THE HINDU</span></a></h1>
            </div>
          <nav className="nav-menu float-right d-none d-lg-block">
            <ul>
            <li className="active"><a href="\">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#portfolio">Management</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#team">Team</a></li>
              <li className="drop-down"><a href>Subscribe Now</a>
                <ul>
                <li className="drop-down"><a href="#">User</a>
                    <ul>
                      <li><a href="#">User Details</a></li>
                      <li><a href="#">View Details</a></li>
                      <li><a href="#">Delete Details</a></li>
                    </ul>
                  </li>
                  <li className="drop-down"><a href="#">Subscribe</a>
                    <ul>
                      <li><a href="#">View Details</a></li>
                      <li><a href="#">Cancel Subscription</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Payments</a></li>
                </ul>
              </li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
            </nav>
            </div>
      </header>
      </div>
)
}