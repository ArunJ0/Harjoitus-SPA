import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav id="nav" className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <table className="navbar-nav me-auto mb-2 mb-md-0">
                    <th className="nav-item"><a className="nav-link" href='/'>SPA Example</a></th>
                    <th className="nav-item"><a className="nav-link" href="/">Home</a></th>
                    <th className="nav-item"><a className="nav-link" href="/about">About</a></th>
                    <th className="nav-item"><a className="nav-link" href="/contactus">Contact Us</a></th>
                </table>
            </div>
        </div>
    </nav>
  )
}
