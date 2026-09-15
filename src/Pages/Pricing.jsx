import React from "react";

function Pricing() {
    return (
        <div className="container mt-5">

            {/* Heading */}
            <div className="row text-center pt-4">
                <div className="col-12">
                    <h3>Simple pricing, no surprises</h3>
                    <h5>Start free. Upgrade when your team needs more.</h5>
                    <h6 className="text-muted">
                        Monthly &nbsp; Annual &nbsp; Save 20%
                    </h6>
                </div>
            </div>


            {/* Pricing Cards */}
            <div className="row mt-5 g-4">

                {/* Free */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div
                        className="p-4 p-lg-5 h-100"
                        style={{
                            border: "1px solid lightgrey",
                            borderRadius: "15px",
                        }}
                    >
                        <h5>Free</h5>

                        <h6 className="text-muted">
                            For quick catch-ups.
                        </h6>

                        <br />

                        <h3>$0</h3>

                        <br />

                        <button
                            type="button"
                            className="btn btn-outline-dark w-100"
                        >
                            Start Free Trial
                        </button>

                        <br />
                        <br />

                        <h6 className="text-muted">
                            Up to 40 min per call
                        </h6>

                        <h6 className="text-muted">
                            Up to 20 participants
                        </h6>

                        <h6 className="text-muted">
                            HD video and screen share
                        </h6>
                    </div>
                </div>


                {/* Pro */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div
                        className="p-4 p-lg-5 h-100"
                        style={{
                            border: "1px solid lightgrey",
                            borderRadius: "15px",
                        }}
                    >
                        <h5>Pro</h5>

                        <h6 className="text-muted">
                            For growing teams.
                        </h6>

                        <br />

                        <h3>$12 / user / month</h3>

                        <br />

                        <button
                            type="button"
                            className="btn btn-dark w-100"
                        >
                            Start Free Trial
                        </button>

                        <br />
                        <br />

                        <h6 className="text-muted">
                            Unlimited call length
                        </h6>

                        <h6 className="text-muted">
                            Up to 100 participants
                        </h6>

                        <h6 className="text-muted">
                            AI meeting summaries
                        </h6>
                    </div>
                </div>


                {/* Enterprise */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div
                        className="p-4 p-lg-5 h-100"
                        style={{
                            border: "1px solid lightgrey",
                            borderRadius: "15px",
                        }}
                    >
                        <h5>Enterprise</h5>

                        <h6 className="text-muted">
                            For large organizations.
                        </h6>

                        <br />

                        <h3>Custom</h3>

                        <br />

                        <button
                            type="button"
                            className="btn btn-outline-dark w-100"
                        >
                            Contact Us
                        </button>

                        <br />
                        <br />

                        <h6 className="text-muted">
                            Unlimited call length
                        </h6>

                        <h6 className="text-muted">
                            Up to 500 participants
                        </h6>

                        <h6 className="text-muted">
                            Advanced security
                        </h6>
                    </div>
                </div>

            </div>


            {/* Compare Plans */}
            <div
                className="row mt-5 p-3 p-md-5"
                style={{
                    border: "1px solid lightgrey",
                    borderRadius: "15px",
                }}
            >

                <div className="col-12 text-center">
                    <h3>Compare Plans</h3>
                </div>


                {/* Table wrapper for mobile */}
                <div className="table-responsive mt-4">

                    <table className="table align-middle">

                        <thead>
                            <tr>
                                <th>Features</th>
                                <th>Free</th>
                                <th>Pro</th>
                                <th>Enterprise</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td>Call length</td>
                                <td>40 min</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                            </tr>

                            <tr>
                                <td>Participants</td>
                                <td>20</td>
                                <td>100</td>
                                <td>500</td>
                            </tr>

                            <tr>
                                <td>Cloud Recording</td>

                                <td>
                                    <i
                                        className="fa-solid fa-xmark"
                                        style={{ color: "red" }}
                                    ></i>
                                </td>

                                <td>
                                    <i
                                        className="fa-solid fa-check"
                                        style={{ color: "green" }}
                                    ></i>
                                </td>

                                <td>
                                    <i
                                        className="fa-solid fa-check"
                                        style={{ color: "green" }}
                                    ></i>
                                </td>
                            </tr>

                            <tr>
                                <td>AI summaries</td>

                                <td>
                                    <i
                                        className="fa-solid fa-xmark"
                                        style={{ color: "red" }}
                                    ></i>
                                </td>

                                <td>
                                    <i
                                        className="fa-solid fa-check"
                                        style={{ color: "green" }}
                                    ></i>
                                </td>

                                <td>
                                    <i
                                        className="fa-solid fa-check"
                                        style={{ color: "green" }}
                                    ></i>
                                </td>
                            </tr>

                            <tr>
                                <td>SSO / SCIM</td>

                                <td>
                                    <i
                                        className="fa-solid fa-xmark"
                                        style={{ color: "red" }}
                                    ></i>
                                </td>

                                <td>
                                    <i
                                        className="fa-solid fa-xmark"
                                        style={{ color: "red" }}
                                    ></i>
                                </td>

                                <td>
                                    <i
                                        className="fa-solid fa-check"
                                        style={{ color: "green" }}
                                    ></i>
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>


            {/* Bottom CTA */}
            <div
                className="row text-center mt-5 p-4 p-md-5 mb-5"
                style={{
                    backgroundColor: "#8eb5f5",
                    borderRadius: "30px",
                }}
            >

                <div className="col-12">

                    <h3 style={{ color: "#274e8f" }}>
                        Still deciding?
                    </h3>

                    <h6 className="text-muted">
                        Start on the free plan — upgrade whenever you're ready.
                    </h6>

                    <button
                        type="button"
                        className="btn btn-dark mt-3"
                        style={{
                            width: "100%",
                            maxWidth: "220px",
                        }}
                    >
                        Start Free
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Pricing;