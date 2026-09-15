import React from "react";
import Meetflowlogo from "./assets/Meetflowlogo.png";

function Footer() {
    return (
        <footer className="mt-5">
            <hr />

            <div className="container py-5">

                <div className="row g-4">

                    {/* Logo Section */}
                    <div className="col-12 col-md-6 col-lg-4">

                        <img
                            src={Meetflowlogo}
                            alt="MeetFlow Logo"
                            style={{ width: "180px" }}
                        />

                        <p className="text-muted mt-3">
                            Video calls that feel like being in the room,
                            for teams of any size.
                        </p>

                        <div className="d-flex gap-3 mt-3">

                            <a href="#" className="fs-5">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>

                            <a href="#" className="fs-5">
                                <i className="fa-brands fa-facebook"></i>
                            </a>

                            <a href="#" className="fs-5">
                                <i className="fa-brands fa-instagram"></i>
                            </a>

                            <a href="#" className="fs-5">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>

                            <a href="#" className="fs-5">
                                <i className="fa-brands fa-youtube"></i>
                            </a>

                            <a href="#" className="fs-5">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>

                        </div>

                    </div>


                    {/* Product */}
                    <div className="col-6 col-md-3 col-lg-2">

                        <h6>Product</h6>

                        <a href="#" className="d-block text-decoration-none text-muted">
                            Features
                        </a>

                        <a href="#" className="d-block text-decoration-none text-muted">
                            Pricing
                        </a>

                        <a href="#" className="d-block text-decoration-none text-muted">
                            Security
                        </a>

                        <a href="#" className="d-block text-decoration-none text-muted">
                            Integrations
                        </a>

                    </div>


                    {/* Company */}
                    <div className="col-6 col-md-3 col-lg-2">

                        <h6>Company</h6>

                        <a href="#" className="d-block text-decoration-none text-muted">
                            About
                        </a>

                        <a href="#" className="d-block text-decoration-none text-muted">
                            Careers
                        </a>

                        <a href="#" className="d-block text-decoration-none text-muted">
                            Blog
                        </a>

                    </div>


                    {/* Support */}
                    <div className="col-12 col-md-6 col-lg-3">

                        <h6>Support</h6>

                        <a href="#" className="d-block text-decoration-none text-muted">
                            Help Center
                        </a>

                        <a href="#" className="d-block text-decoration-none text-muted">
                            Contact Us
                        </a>

                        <a href="#" className="d-block text-decoration-none text-muted">
                            Status
                        </a>

                    </div>

                </div>


                <div className="text-center mt-5">

                    <p className="text-muted">
                        <i className="fa-regular fa-copyright"></i>
                        {" "}2026 MeetFlow. All rights reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;