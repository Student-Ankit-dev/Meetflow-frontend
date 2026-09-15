import React from "react";
import dogsImage from "../assets/Dogs.jpg";

function HomePage() {
    return (
        <div className="container">

            {/* Hero Section */}
            <div className="row mt-5 pt-4 align-items-center g-4">

                <div className="col-12 col-md-6 text-center text-md-start">
                    <h3>
                        Video calls that feel like being in the room
                    </h3>

                    <p className="text-muted">
                        Crisp HD video, real-time captions, and screen sharing
                        that just works — no downloads, no delays.
                    </p>

                    <div className="d-flex flex-column flex-sm-row gap-2 mt-4">
                        <button
                            type="button"
                            className="btn btn-dark"
                        >
                            Start a meeting
                        </button>

                        <button
                            type="button"
                            className="btn btn-outline-dark"
                        >
                            Yes, let's go
                        </button>
                    </div>

                    <h6 className="text-muted mt-4">
                        Free for up to 40 minutes. No credit card required.
                    </h6>
                </div>

                <div className="col-12 col-md-6 text-center">
                    <img
                        src={dogsImage}
                        alt="Video meeting"
                        className="img-fluid w-100"
                        style={{
                            maxWidth: "500px",
                            borderRadius: "20px",
                        }}
                    />
                </div>

            </div>


            {/* Statistics */}
            <div className="row mt-5 pt-4 g-4 text-center">

                <div className="col-6 col-lg-3">
                    <h3>4M+</h3>
                    <h6 className="text-muted">Meeting Hosted</h6>
                </div>

                <div className="col-6 col-lg-3">
                    <h3>99.9%</h3>
                    <h6 className="text-muted">Uptime</h6>
                </div>

                <div className="col-6 col-lg-3">
                    <h3>12</h3>
                    <h6 className="text-muted">Countries</h6>
                </div>

                <div className="col-6 col-lg-3">
                    <h3>4.8/5</h3>
                    <h6 className="text-muted">Average Ratings</h6>
                </div>

            </div>


            {/* Features Row 1 */}
            <div className="row mt-5 pt-4 g-4">

                <div className="col-12 col-sm-6 col-lg-3">
                    <i
                        className="fa-solid fa-video fs-4"
                        style={{ color: "#34b3ed" }}
                    ></i>

                    <h6 className="mt-3">HD video</h6>

                    <p className="text-muted">
                        Sharp video that adapts to your connection.
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <i
                        className="fa-solid fa-house-laptop fs-4"
                        style={{ color: "#34b3ed" }}
                    ></i>

                    <h6 className="mt-3">Screen Share</h6>

                    <p className="text-muted">
                        Share a tab, window, or your full screen.
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <i
                        className="fa-solid fa-file-shield fs-4"
                        style={{ color: "#34b3ed" }}
                    ></i>

                    <h6 className="mt-3">Encrypted</h6>

                    <p className="text-muted">
                        Every call is encrypted end to end.
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <i
                        className="fa-solid fa-closed-captioning fs-4"
                        style={{ color: "#34b3ed" }}
                    ></i>

                    <h6 className="mt-3">Captions</h6>

                    <p className="text-muted">
                        Live captions in over 20 languages.
                    </p>
                </div>

            </div>


            {/* Features Row 2 */}
            <div className="row mt-4 g-4">

                <div className="col-12 col-sm-6 col-lg-3">
                    <i
                        className="fa-solid fa-record-vinyl fs-4"
                        style={{ color: "#34b3ed" }}
                    ></i>

                    <h6 className="mt-3">Recording</h6>

                    <p className="text-muted">
                        Record meetings and save them to the cloud.
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <i
                        className="fa-solid fa-calendar fs-4"
                        style={{ color: "#34b3ed" }}
                    ></i>

                    <h6 className="mt-3">Scheduling</h6>

                    <p className="text-muted">
                        Sync with your calendar and send invites.
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <i
                        className="fa-solid fa-mobile fs-4"
                        style={{ color: "#34b3ed" }}
                    ></i>

                    <h6 className="mt-3">Any Device</h6>

                    <p className="text-muted">
                        Join from browser, desktop, or mobile.
                    </p>
                </div>

            </div>


            {/* Three Steps */}
            <div className="row mt-5 pt-4 g-4">

                <div className="col-12 text-center">
                    <h3>Get on a call in three steps</h3>
                </div>

                <div className="col-12 col-md-4 text-center mt-3">
                    <i className="fa-solid fa-1 fs-4"></i>

                    <h6 className="mt-3">Create a room</h6>

                    <p className="text-muted">
                        One click, no account needed to start.
                    </p>
                </div>

                <div className="col-12 col-md-4 text-center mt-3">
                    <i className="fa-solid fa-2 fs-4"></i>

                    <h6 className="mt-3">Share the link</h6>

                    <p className="text-muted">
                        Send it by email, chat, or calendar invite.
                    </p>
                </div>

                <div className="col-12 col-md-4 text-center mt-3">
                    <i className="fa-solid fa-3 fs-4"></i>

                    <h6 className="mt-3">Start Talking</h6>

                    <p className="text-muted">
                        Joins open instantly in the browser.
                    </p>
                </div>

            </div>


            {/* Testimonials */}
            <div className="row mt-5 pt-4 g-4">

                <div className="col-12 text-center">
                    <h3>Loved by teams everywhere</h3>
                </div>

                <div className="col-12 col-md-4 mt-3">
                    <p className="text-muted">
                        Our all-hands finally feels seamless — no more
                        "can you hear me" for the first five minutes.
                    </p>

                    <h6>Priya n.</h6>

                    <p className="text-muted">
                        Ops lead, orbital
                    </p>
                </div>

                <div className="col-12 col-md-4 mt-3">
                    <p className="text-muted">
                        The AI summaries alone save our team
                        hours every week on meeting notes.
                    </p>

                    <h6>Devon t.</h6>

                    <p className="text-muted">
                        PM, vantage co
                    </p>
                </div>

                <div className="col-12 col-md-4 mt-3">
                    <p className="text-muted">
                        Switched our whole org over in a week.
                        IT loved the SSO setup.
                    </p>

                    <h6>Sam K.</h6>

                    <p className="text-muted">
                        IT director, fernbank
                    </p>
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
                        Ready for your best meeting yet?
                    </h3>

                    <h6
                        className="mt-3"
                        style={{ color: "#3d73cc" }}
                    >
                        Start free — no credit card, no downloads.
                    </h6>

                    <button
                        type="button"
                        className="btn btn-dark mt-3"
                        style={{
                            width: "100%",
                            maxWidth: "220px",
                        }}
                    >
                        Start a meeting
                    </button>

                </div>
            </div>

        </div>
    );
}

export default HomePage;