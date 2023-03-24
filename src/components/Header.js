import React from "react";
import { Link } from "react-router-dom";
import logo from "../../src/assets/img/logo.png"

function Header({loginUser, setLoginUser }) {
    const handleLogout = () => {
        if (window.confirm("Are you sure you want to logout?")) {
            setLoginUser({})
        }
    }

    return (
        <header>
            <div className="container-fluid">
                <div className="row align-items-center justify-content-between logo-section">
                    <div className="col-md-4 col-5">
                        <a><img src={logo} className="logo-img"></img></a>
                        <p className="d-sm-inline d-none">My Web Page</p>
                    </div>
                    <div className="col-md-4 col-7 text-center">
                        <h5>Welcome {loginUser.firstname.toUpperCase()} {loginUser.lastname.toUpperCase()}</h5>
                    </div>
                </div>

                <div className="row nav-section">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            {/* <a className="navbar-brand" href="#">Navbar</a> */}
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="contact">Contact Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="about">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="products">Products</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="users">Users</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/" onClick={handleLogout}>Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header