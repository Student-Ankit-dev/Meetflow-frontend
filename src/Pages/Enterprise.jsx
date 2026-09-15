import React from "react";
import dogsImage from "../assets/Dogs.jpg";

function Enterprise() {
    return (
        <div className="container mt-5">

            {/* Hero */}
            <div className="row text-center pt-4">
                <div className="col-12">
                    <h3>Video conferencing built for the enterprise</h3>

                    <h5 className="text-muted mt-3">
                        Security, compliance, and control that scale with your
                        organization.
                    </h5>

                    <button
                        type="button"
                        className="btn btn-dark mt-4"
                        style={{
                            width: "100%",
                            maxWidth: "180px",
                        }}
                    >
                        Talk to Sales
                    </button>
                </div>
            </div>


            {/* Trusted Companies */}
            <div className="row mt-5 text-center">
                <div className="col-12">
                    <h6 className="text-muted">
                        Trusted by security-conscious teams at
                    </h6>

                    <h5 className="mt-3">
                        Orbital &nbsp; Vantage Co &nbsp; Fernbank &nbsp; Haloware
                    </h5>
                </div>
            </div>


            {/* Image */}
            <div className="row mt-5">
                <div className="col-12">
                    <img
                        src={dogsImage}
                        alt="Enterprise teams"
                        className="img-fluid w-100"
                        style={{
                            height: "auto",
                            maxHeight: "600px",
                            objectFit: "cover",
                            borderRadius: "40px",
                        }}
                    />
                </div>
            </div>


            {/* Countries */}
            <div className="row mt-4">
                <div className="col-12">
                    <h4 style={{ color: "#34b3ed" }}>
                        Built for teams across 12 countries
                    </h4>

                    <h6 className="text-muted">
                        Offices in New York, London, Bengaluru, and Singapore.
                    </h6>
                </div>
            </div>


            {/* Security Features */}
            <div className="row mt-5 g-4">

                <div className="col-12 col-md-4">
                    <i
                        className="fa-solid fa-user-shield fs-4"
                        style={{ color: "#2365e0" }}
                    ></i>

                    <h5 className="mt-3">
                        SOC 2 and ISO 27001
                    </h5>

                    <h6 className="text-muted">
                        Independently audited security controls.
                    </h6>
                </div>


                <div className="col-12 col-md-4">
                    <i
                        className="fa-solid fa-key fs-4"
                        style={{ color: "#2365e0" }}
                    ></i>

                    <h5 className="mt-3">
                        SSO and SCIM
                    </h5>

                    <h6 className="text-muted">
                        Provision and deprovision automatically.
                    </h6>
                </div>


                <div className="col-12 col-md-4">
                    <i
                        className="fa-solid fa-layer-group fs-4"
                        style={{ color: "#2365e0" }}
                    ></i>

                    <h5 className="mt-3">
                        Data residency
                    </h5>

                    <h6 className="text-muted">
                        Choose where your data is stored.
                    </h6>
                </div>

            </div>


            {/* Admin Console */}
            <div className="row mt-5 pt-4 align-items-center g-4">

                <div className="col-12 col-md-6">

                    <i
                        className="fa-solid fa-gear fs-3"
                        style={{ color: "#2365e0" }}
                    ></i>

                    <h3 className="mt-3">
                        One console for the whole org
                    </h3>

                    <h5 className="text-muted lh-base">
                        Set recording policies, manage seats, and review usage
                        across every team from a single admin dashboard.
                    </h5>

                    <a
                        href="#"
                        style={{ textDecoration: "none" }}
                    >
                        See the admin console →
                    </a>

                </div>


                <div className="col-12 col-md-3 mt-4 mt-md-0">

                    <h5>Org. overview</h5>

                    <h6 className="text-muted mt-3">
                        Active seats
                    </h6>

                    <h6 className="text-muted">
                        Meetings this month
                    </h6>

                    <h6 className="text-muted">
                        SSO status
                    </h6>

                </div>


                <div className="col-12 col-md-3 mt-4 mt-md-0">

                    <h5 className="d-none d-md-block">&nbsp;</h5>

                    <h6 className="text-muted mt-3">
                        1,240 / 1,500
                    </h6>

                    <h6 className="text-muted">
                        18,402
                    </h6>

                    <h6 style={{ color: "green" }}>
                        Connected
                    </h6>

                </div>

            </div>


            {/* Testimonial */}
            <div className="row mt-5 pt-4">
                <div className="col-12">

                    <h5 className="lh-base">
                        "Migrating 3,000 employees to Nimbus took less than
                        two weeks — SSO and SCIM meant IT barely had to touch it."
                    </h5>

                    <h6 className="mt-3">
                        Sam K., IT Director at Fernbank{" "}
                        <a
                            href="#"
                            style={{ textDecoration: "none" }}
                        >
                            Read the case study →
                        </a>
                    </h6>

                </div>
            </div>


            {/* Enterprise Questions */}
            <div className="row mt-5 pt-4">

                <div className="col-12">
                    <h3>Enterprise questions</h3>
                </div>


                <div className="col-12 mt-4">
                    <h5>
                        Q1. How is enterprise pricing determined?
                    </h5>

                    <h5 className="text-muted lh-base">
                        Ans. Enterprise pricing is based on your team size,
                        which features you need (SSO/SCIM, dedicated support,
                        data residency, custom SLAs), and your contract term.
                        Our sales team puts together a quote tailored to your
                        organization — book a call and we'll walk you through
                        it within a day or two.
                    </h5>
                </div>


                <div className="col-12 mt-4">
                    <h5>
                        Q2. Can we choose our own data region?
                    </h5>

                    <h5 className="text-muted lh-base">
                        Ans. Yes. Enterprise plans let you pick where your data
                        is stored — including US, EU, and APAC regions — to
                        meet your compliance requirements.
                    </h5>
                </div>


                <div className="col-12 mt-4">
                    <h5>
                        Q3. What does onboarding support look like?
                    </h5>

                    <h5 className="text-muted lh-base">
                        Ans. You get a dedicated onboarding specialist who
                        handles SSO setup, admin training, and rollout planning,
                        typically completed within your first two weeks.
                    </h5>
                </div>


                <div className="col-12 mt-4">
                    <h5>
                        Q4. Do you sign custom MSAs?
                    </h5>

                    <h5 className="text-muted lh-base">
                        Ans. Yes. Our legal team works directly with yours on
                        custom master service agreements, DPAs, and procurement
                        paperwork.
                    </h5>
                </div>

            </div>


            {/* Bottom CTA */}
            <div
                className="row mt-5 p-4 p-md-5 mb-5 align-items-center"
                style={{
                    backgroundColor: "#8eb5f5",
                    minHeight: "150px",
                    borderRadius: "20px",
                }}
            >

                <div className="col-12 col-md-8 text-center text-md-start">

                    <h5 style={{ color: "#25227d" }}>
                        Ready to roll out Nimbus org-wide?
                    </h5>

                    <h6 style={{ color: "#25227d" }}>
                        Get a tailored demo and pricing for your team size.
                    </h6>

                </div>


                <div className="col-12 col-md-4 text-center mt-3 mt-md-0">

                    <button
                        type="button"
                        className="btn btn-dark"
                        style={{
                            width: "100%",
                            maxWidth: "200px",
                        }}
                    >
                        Book a Demo
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Enterprise;