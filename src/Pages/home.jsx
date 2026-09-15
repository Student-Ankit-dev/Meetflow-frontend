// import React, { useContext, useState } from 'react'
// import withAuth from '../Utils/withAuth.jsx'
// import { useNavigate } from 'react-router-dom'
// import "../App.css";
// import { Button, IconButton, TextField } from '@mui/material';
// import RestoreIcon from '@mui/icons-material/Restore';
// import { AuthContext } from '../Context/AuthContext.jsx';

// function HomeComponent() {


//     let navigate = useNavigate();
//     const [meetingCode, setMeetingCode] = useState("");


//     const { addToUserHistory } = useContext(AuthContext);
//     let handleJoinVideoCall = async () => {
//         await addToUserHistory(meetingCode)
//         navigate(`/${meetingCode}`)
//     }

//     return (
//         <>

//             <div className="navBar">

//                 <div style={{ display: "flex", alignItems: "center" }}>

//                     <h2>Apna Video Call</h2>
//                 </div>

//                 <div style={{ display: "flex", alignItems: "center" }}>
//                     <IconButton onClick={
//                         () => {
//                             navigate("/history")
//                         }
//                     }>
//                         <RestoreIcon />
//                     </IconButton>
//                     <p>History</p>

//                     <Button onClick={() => {
//                         localStorage.removeItem("token")
//                         navigate("/auth")
//                     }}>
//                         Logout
//                     </Button>
//                 </div>


//             </div>


//             <div className="meetContainer">
//                 <div className="leftPanel">
//                     <div>
//                         <h2>Providing Quality Video Call Just Like Quality Education</h2>

//                         <div style={{ display: 'flex', gap: "10px" }}>

//                             <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />
//                             <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>

//                         </div>
//                     </div>
//                 </div>
//                 <div className='rightPanel'>
//                     <img srcSet='/logo3.png' alt="" />
//                 </div>
//             </div>
//         </>
//     )
// }


// export default withAuth(HomeComponent)



import React, { useContext, useState } from "react";
import withAuth from "../Utils/withAuth.jsx";
import { useNavigate } from "react-router-dom";
import "../App.css";

import { Button, TextField } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VideocamIcon from "@mui/icons-material/Videocam";

import { AuthContext } from "../Context/AuthContext.jsx";

function HomeComponent() {
    const navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");

    const { addToUserHistory } = useContext(AuthContext);

    const handleJoinVideoCall = async () => {
        const code = meetingCode.trim();

        if (!code) return;

        try {
            await addToUserHistory(code);
            navigate(`/${code}`);
        } catch (error) {
            console.error("Unable to join meeting:", error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/auth");
    };

    return (
        <div className="homePage">




            {/* MAIN CONTENT */}
            <main className="meetContainer">

                {/* LEFT CONTENT */}
                <section className="leftPanel">

                    <div className="heroContent">

                        <div className="welcomeBadge">
                            <span></span>
                            Secure & Easy Video Meetings
                        </div>

                        <h1>
                            Connect with people,
                            <br />
                            <strong>anywhere, anytime.</strong>
                        </h1>

                        <p className="heroDescription">
                            Start or join a video meeting with just one click.
                            Experience smooth, reliable and high-quality video
                            communication with MeetFlow.
                        </p>


                        {/* JOIN MEETING */}
                        <div className="joinMeetingBox">

                            <div className="joinTitle">
                                <VideocamIcon />
                                <span>Join a meeting</span>
                            </div>

                            <div className="joinInput">

                                <TextField
                                    fullWidth
                                    value={meetingCode}
                                    onChange={(e) =>
                                        setMeetingCode(e.target.value)
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleJoinVideoCall();
                                        }
                                    }}
                                    label="Meeting code"
                                    placeholder="Enter meeting code"
                                />

                                <Button
                                    className="joinButton"
                                    variant="contained"
                                    endIcon={<ArrowForwardIcon />}
                                    onClick={handleJoinVideoCall}
                                    disabled={!meetingCode.trim()}
                                >
                                    Join
                                </Button>

                            </div>

                        </div>

                    </div>

                </section>


                {/* RIGHT IMAGE */}
                <section className="rightPanel">

                    <div className="imageBackground">

                        <img
                            src="/logo3.png"
                            alt="MeetFlow"
                            className="homeIllustration"
                        />

                    </div>

                </section>

            </main>


            <div className="homeBottomText">
                🔒 Your meetings are private and secure
            </div>

        </div>
    );
}

export default withAuth(HomeComponent);