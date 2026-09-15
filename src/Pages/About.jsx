import React from "react";
import techImage from "../assets/tech.jpg";

function About() {
    return (
        <div className="container mt-5">

            {/* Hero */}
            <div className="row text-center">
                <div className="col-12">
                    <h3>We think meetings should feel</h3>
                    <h3>human, not exhausting</h3>

                    <p className="text-muted px-2">
                        MeetFlow started with a simple idea: video calls shouldn't
                        be harder than the conversation itself.
                    </p>
                </div>
            </div>


            {/* Stats */}
            <div className="row mt-5 g-4">
                <div className="col-6 col-md-3 text-center">
                    <h3>2023</h3>
                    <h6 className="text-muted">Founded</h6>
                </div>

                <div className="col-6 col-md-3 text-center">
                    <h3>140</h3>
                    <h6 className="text-muted">Team Members</h6>
                </div>

                <div className="col-6 col-md-3 text-center">
                    <h3>12</h3>
                    <h6 className="text-muted">Countries</h6>
                </div>

                <div className="col-6 col-md-3 text-center">
                    <h3>4M+</h3>
                    <h6 className="text-muted">Meetings Hosted</h6>
                </div>
            </div>


            {/* Story */}
            <div className="row mt-5 align-items-center g-4">

                <div className="col-12 col-md-6">
                    <h5>
                        MeetFlow began as a side project between two engineers
                        frustrated by clunky, laggy video tools that got in the
                        way of actual conversation.
                    </h5>

                    <br />

                    <h5>
                        Today, teams in 12 countries use MeetFlow to run
                        standups, all-hands, and everything in between —
                        still built on that same idea: get out of the way,
                        and let the conversation happen.
                    </h5>
                </div>

                <div className="col-12 col-md-6 text-center">
                    <img
                        src={techImage}
                        alt="MeetFlow technology"
                        className="img-fluid"
                        style={{
                            width: "80%",
                            borderRadius: "20px",
                        }}
                    />
                </div>

            </div>


            {/* What we care about */}
            <div className="row mt-5">

                <div className="col-12 text-center mb-4">
                    <h3>What we care about</h3>
                </div>

                <div className="col-12 col-md-4 mt-4 text-center">
                    <i
                        className="fa-solid fa-gauge-simple fs-2"
                        style={{ color: "#34b3ed" }}
                    ></i>

                    <h5 className="mt-3">Simplicity First</h5>

                    <h6 className="text-muted">
                        If a feature adds friction, it doesn't ship.
                    </h6>
                </div>

                <div className="col-12 col-md-4 mt-4 text-center">
                    <i
                        className="fa-regular fa-heart fs-2"
                        style={{ color: "#34b3ed" }}
                    ></i>

                    <h5 className="mt-3">Human by default</h5>

                    <h6 className="text-muted">
                        Technology should feel warm, not sterile.
                    </h6>
                </div>

                <div className="col-12 col-md-4 mt-4 text-center">
                    <i
                        className="fa-solid fa-lock fs-2"
                        style={{ color: "#34b3ed" }}
                    ></i>

                    <h5 className="mt-3">Privacy is non-negotiable</h5>

                    <h6 className="text-muted">
                        Your conversations are yours, encrypted end to end.
                    </h6>
                </div>

            </div>


            {/* Leadership */}
            <div className="row mt-5">

                <div className="col-12 text-center mb-4">
                    <h3>Leadership</h3>
                </div>

                <div className="col-6 col-md-3 mt-4 text-center">
                    <i
                        className="fa-solid fa-user fs-2"
                        style={{ color: "#1f3f99" }}
                    ></i>

                    <h5 className="mt-3">Ankit Kumar</h5>
                    <h6 className="text-muted">CEO & CO-FOUNDER</h6>
                </div>

                <div className="col-6 col-md-3 mt-4 text-center">
                    <i
                        className="fa-solid fa-user fs-2"
                        style={{ color: "#0a7027" }}
                    ></i>

                    <h5 className="mt-3">Jamie Kim</h5>
                    <h6 className="text-muted">CTO & CO-FOUNDER</h6>
                </div>

                <div className="col-6 col-md-3 mt-4 text-center">
                    <i
                        className="fa-solid fa-user fs-2"
                        style={{ color: "#471106" }}
                    ></i>

                    <h5 className="mt-3">Amir Salim</h5>
                    <h6 className="text-muted">VP Engineering</h6>
                </div>

                <div className="col-6 col-md-3 mt-4 text-center">
                    <i
                        className="fa-solid fa-user fs-2"
                        style={{ color: "#e356d0" }}
                    ></i>

                    <h5 className="mt-3">Priya Nair</h5>
                    <h6 className="text-muted">VP Operations</h6>
                </div>

            </div>


            {/* Hiring */}
            <div
                className="row mt-5 p-4 p-md-5 mb-5 align-items-center"
                style={{
                    backgroundColor: "#8eb5f5",
                    minHeight: "150px",
                    borderRadius: "20px",
                }}
            >

                <div className="col-12 col-md-8 text-center text-md-start">
                    <h3 style={{ color: "#25227d" }}>
                        We're Hiring
                    </h3>

                    <h6 style={{ color: "#25227d" }}>
                        Come help us build the future of video calls.
                    </h6>
                </div>

                <div className="col-12 col-md-4 mt-3 mt-md-0 text-center">
                    <button
                        type="button"
                        className="btn btn-dark"
                        style={{ width: "100%", maxWidth: "220px" }}
                    >
                        View Open Roles
                    </button>
                </div>

            </div>

        </div>
    );
}

export default About;