import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Meetflowlogo from "./assets/Meetflowlogo.png";

import RestoreIcon from "@mui/icons-material/Restore";
import LogoutIcon from "@mui/icons-material/Logout";

import { AuthContext } from "./Context/AuthContext.jsx";

function Navbar() {
    const navigate = useNavigate();

    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/auth");
    };

    return (
        <nav
            className="navbar navbar-expand-lg bg-white shadow-sm"
            style={{ borderBottom: "1px solid #e5e7eb" }}
        >
            <div className="container">

                {/* Logo */}
                <Link className="navbar-brand" to="/">
                    <img
                        src={Meetflowlogo}
                        alt="MeetFlow Logo"
                        style={{
                            height: "60px",
                            width: "100%",
                            objectFit: "contain",
                        }}
                    />
                </Link>


                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>


                {/* Navbar Items */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >

                    {/* Navigation Links */}
                    <ul className="navbar-nav mx-auto">


                        {isLoggedIn && (
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/home">
                                    Home
                                </Link>
                            </li>
                        )}

                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>

                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/features">
                                Features
                            </Link>
                        </li>

                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/pricing">
                                Pricing
                            </Link>
                        </li>

                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/enterprise">
                                Enterprise
                            </Link>
                        </li>

                    </ul>


                    {/* RIGHT SIDE BUTTONS */}

                    {isLoggedIn ? (
                        <>
                            {/* History */}
                            <button
                                className="btn btn-outline-dark me-2"
                                onClick={() => navigate("/history")}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px"
                                }}
                            >
                                <RestoreIcon fontSize="small" />
                                History
                            </button>


                            {/* Logout */}
                            <button
                                className="btn btn-outline-danger"
                                onClick={handleLogout}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px"
                                }}
                            >
                                <LogoutIcon fontSize="small" />
                                Logout
                            </button>
                        </>
                    ) : (
                        <>



                            {/* Register Yourself */}
                            <Link
                                to="/auth"
                                className="btn btn-primary"
                            >
                                Register Yourself
                            </Link>
                        </>
                    )}

                </div>
            </div>
        </nav>
    );
}

export default Navbar;