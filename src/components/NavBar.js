import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// NavLink use as like active link 

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Contact App</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" exact className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" exact className="nav-link">
                                About
                            </NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control" type="search" placeholder="Search" />
                    </form>
                </div>

                <Link to='/user/add' className="btn btn-outline-light ms-2">Add User</Link>
            </div>
        </nav>
    );
};

export default NavBar;