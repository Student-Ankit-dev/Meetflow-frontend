import React from "react";
import featuresImage from "../assets/Features.jpg";

function Features() {
    return (
        <div className="container mt-5">

            {/* Heading */}
            <div className="row text-center pt-4">
                <div className="col-12">
                    <h3>Everything a great meeting needs</h3>
                    <p className="text-muted">
                        One app for video, audio, and everything around the call.
                    </p>
                </div>
            </div>


            {/* Meeting Notes */}
            <div className="row mt-5 align-items-center g-4">

                <div className="col-12 col-md-6">
                    <i
                        className="fa-solid fa-note-sticky fs-3"
                        style={{ color: "#34b3ed" }}
                    ></i>

                    <h4 className="mt-3">
                        Never take meeting notes again
                    </h4>

                    <h6 className="text-muted lh-base">
                        MeetFlow listens in and writes up a clean summary the
                        moment the call ends — key decisions, action items,
                        and who owns what. MeetFlow began as a side project
                        between two engineers frustrated by clunky, laggy
                        video tools that got in the way of actual conversation.
                    </h6>

                    <a
                        href="#"
                        style={{ textDecoration: "none" }}
                    >
                        See it in action →
                    </a>
                </div>


                <div className="col-12 col-md-6 mt-4 mt-md-0">
                    <div className="p-4 border rounded-4 shadow-sm">
                        <h4>Meeting Summary</h4>

                        <h6 className="text-muted lh-base mt-3">
                            Launch date confirmed for Oct 14
                            <br />
                            Maya to finalize pricing page copy
                            <br />
                            Follow-up scheduled for next Tuesday
                        </h6>
                    </div>
                </div>

            </div>


            {/* Screen Sharing */}
            <div className="row mt-5 pt-4 align-items-center g-4">

                <div className="col-12 col-md-6 order-2 order-md-1 text-center">
                    <img
                        src={featuresImage}
                        alt="MeetFlow screen sharing"
                        className="img-fluid"
                        style={{
                            width: "95%",
                            maxWidth: "600px",
                            borderRadius: "20px",
                        }}
                    />
                </div>


                <div className="col-12 col-md-6 order-1 order-md-2">

                    <i
                        className="fa-solid fa-desktop fs-3"
                        style={{ color: "#34b3ed" }}
                    ></i>

                    <h4 className="mt-3">
                        Share anything, instantly
                    </h4>

                    <h6 className="text-muted lh-base">
                        Share a single tab, a specific window, or your whole
                        screen — with system audio if you need it. No plugins,
                        no lag.
                    </h6>

                    <a
                        href="#"
                        style={{ textDecoration: "none" }}
                    >
                        See it in action →
                    </a>

                </div>

            </div>


            {/* During Call */}
            <div className="row mt-5 pt-4">

                <div className="col-12">
                    <h5 style={{ color: "#2246b3" }}>
                        During Call
                    </h5>
                </div>

                <div className="col-12 col-md-4 mt-4">
                    <i
                        className="fa-solid fa-video fs-4"
                        style={{ color: "#34b3ed" }}
                    ></i>

                    <h5 className="mt-2">HD video</h5>

                    <p className="text-muted">
                        Adapts to your connection automatically.
                    </p>
                </div>


                <div className="col-12 col-md-4 mt-4">
                    <i
                        className="fa-regular fa-closed-captioning fs-4"
                        style={{ color: "#34b3ed" }}
                    ></i>

                    <h5 className="mt-2">Live Captions</h5>

                    <p className="text-muted">
                        Real-time captions in 20+ languages.
                    </p>
                </div>


                <div className="col-12 col-md-4 mt-4">
                    <i
                        className="fa-solid fa-message fs-4"
                        style={{ color: "#34b3ed" }}
                    ></i>

                    <h5 className="mt-2">In-Call Chats</h5>

                    <p className="text-muted">
                        Side conversations without interrupting.
                    </p>
                </div>

            </div>


            {/* After Call */}
            <div className="row mt-5 pt-4">

                <div className="col-12">
                    <h5 style={{ color: "#2246b3" }}>
                        After Call
                    </h5>
                </div>


                <div className="col-12 col-md-4 mt-4">
                    <i
                        className="fa-solid fa-record-vinyl fs-4"
                        style={{ color: "#34b3ed" }}
                    ></i>

                    <h5 className="mt-2">Recording</h5>

                    <p className="text-muted">
                        Save every meeting to the cloud.
                    </p>
                </div>


                <div className="col-12 col-md-4 mt-4">
                    <i
                        className="fa-regular fa-calendar fs-4"
                        style={{ color: "#34b3ed" }}
                    ></i>

                    <h5 className="mt-2">Scheduling</h5>

                    <p className="text-muted">
                        Syncs with your calendar and sends invites.
                    </p>
                </div>


                <div className="col-12 col-md-4 mt-4">
                    <i
                        className="fa-solid fa-chart-simple fs-4"
                        style={{ color: "#34b3ed" }}
                    ></i>

                    <h5 className="mt-2">Meeting Insights</h5>

                    <p className="text-muted">
                        See talk time and attendance trends.
                    </p>
                </div>

            </div>


            {/* Trust and Access */}
            <div className="row mt-5 pt-4">

                <div className="col-12">
                    <h5 style={{ color: "#2246b3" }}>
                        Trust and Access
                    </h5>
                </div>


                <div className="col-12 col-md-4 mt-4">
                    <i
                        className="fa-solid fa-shop-lock fs-4"
                        style={{ color: "#34b3ed" }}
                    ></i>

                    <h5 className="mt-2">Encrypted</h5>

                    <p className="text-muted">
                        End-to-end encryption on every call.
                    </p>
                </div>


                <div className="col-12 col-md-4 mt-4">
                    <i
                        className="fa-solid fa-tablet fs-4"
                        style={{ color: "#34b3ed" }}
                    ></i>

                    <h5 className="mt-2">Mobile Access</h5>

                    <p className="text-muted">
                        Join meetings from supported mobile devices.
                    </p>
                </div>


                <div className="col-12 col-md-4 mt-4">
                    <i
                        className="fa-solid fa-building-shield fs-4"
                        style={{ color: "#34b3ed" }}
                    ></i>

                    <h5 className="mt-2">Waiting Rooms</h5>

                    <p className="text-muted">
                        Control exactly who gets in.
                    </p>
                </div>

            </div>


            {/* Common Questions */}
            <div className="row mt-5 pt-4">

                <div className="col-12">
                    <h3>Common questions</h3>
                </div>


                <div className="col-12 mt-4">
                    <h5>
                        Q1. Do I need to download anything to join?
                    </h5>

                    <h5 className="text-muted">
                        Ans. No. Users do not need to download anything to join.
                        They can join directly through a web browser.
                    </h5>
                </div>


                <div className="col-12 mt-4">
                    <h5>
                        Q2. Is my meeting data encrypted?
                    </h5>

                    <h5 className="text-muted">
                        Ans. Yes, audio and video data is encrypted.
                    </h5>
                </div>


                <div className="col-12 mt-4">
                    <h5>
                        Q3. Can I use MeetFlow on mobile?
                    </h5>

                    <h5 className="text-muted">
                        Ans. Yes, you can use MeetFlow on mobile devices.
                    </h5>
                </div>


                <div className="col-12 mt-4">
                    <h5>
                        Q4. How long can free meetings run?
                    </h5>

                    <h5 className="text-muted">
                        Ans. There is no limit unless you set one.
                    </h5>
                </div>

            </div>


            {/* CTA */}
            <div
                className="row text-center mt-5 p-4 p-md-5 mb-5"
                style={{
                    backgroundColor: "#8eb5f5",
                    borderRadius: "30px",
                }}
            >

                <div className="col-12">
                    <h3 style={{ color: "#274e8f" }}>
                        See it for yourself
                    </h3>

                    <h6
                        className="text-muted"
                        style={{ color: "#3d73cc" }}
                    >
                        Start a free meeting in under a minute.
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

export default Features;