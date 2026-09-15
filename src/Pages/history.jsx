import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function History() {

    const { getHistoryOfUser } = useContext(AuthContext);

    const [meetings, setMeetings] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch (error) {
                console.error("Unable to fetch history:", error);
            }
        };

        fetchHistory();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1)
            .toString()
            .padStart(2, "0");
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    };

    const joinMeeting = (meetingCode) => {
        navigate(`/${meetingCode}`);
    };

    return (
        <div className="historyPage">

            {/* HOME BUTTON */}
            <div className="historyHome">
                <Button
                    variant="outlined"
                    startIcon={<HomeIcon />}
                    onClick={() => navigate("/home")}
                >
                    Home
                </Button>
            </div>


            {/* CONTENT */}
            <main className="historyContainer">

                <div className="historyHeading">

                    <div>
                        <h1>Meeting History</h1>

                        <p>
                            View and rejoin your previous meetings.
                        </p>
                    </div>

                    <div className="meetingCount">
                        {meetings.length}{" "}
                        {meetings.length === 1
                            ? "Meeting"
                            : "Meetings"}
                    </div>

                </div>


                {/* MEETING CARDS */}

                {meetings.length !== 0 ? (

                    <div className="historyGrid">

                        {meetings.map((meeting, index) => (

                            <Card
                                key={meeting._id || index}
                                className="historyCard"
                                elevation={0}
                            >

                                <CardContent>

                                    <div className="cardTop">

                                        <div className="meetingIcon">
                                            <VideocamIcon />
                                        </div>

                                        <span className="meetingNumber">
                                            Meeting #{index + 1}
                                        </span>

                                    </div>


                                    <Typography
                                        className="meetingCode"
                                        variant="h6"
                                    >
                                        {meeting.meetingCode}
                                    </Typography>


                                    <div className="meetingDate">

                                        <CalendarTodayIcon />

                                        <span>
                                            {formatDate(meeting.date)}
                                        </span>

                                    </div>


                                    <Button
                                        fullWidth
                                        variant="contained"
                                        endIcon={<ArrowForwardIcon />}
                                        onClick={() =>
                                            joinMeeting(
                                                meeting.meetingCode
                                            )
                                        }
                                        className="rejoinButton"
                                    >
                                        Join Meeting
                                    </Button>

                                </CardContent>

                            </Card>

                        ))}

                    </div>

                ) : (

                    <div className="emptyHistory">

                        <div className="emptyHistoryIcon">
                            <VideocamIcon />
                        </div>

                        <h2>No meetings yet</h2>

                        <p>
                            Your previous meetings will appear here
                            after you join a meeting.
                        </p>

                        <Button
                            variant="contained"
                            startIcon={<VideocamIcon />}
                            onClick={() => navigate("/home")}
                            className="startMeetingButton"
                        >
                            Start a Meeting
                        </Button>

                    </div>

                )}

            </main>

        </div>
    );
}