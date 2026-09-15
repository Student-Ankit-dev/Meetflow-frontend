import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

import {
    Badge,
    IconButton,
    TextField,
    Button,
} from "@mui/material";

import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import CallEndIcon from "@mui/icons-material/CallEnd";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";

import styles from "../styles/videoComponent.module.css";
import server from "../environment";

const server_url = server;

const connections = {};

const peerConfigConnections = {
    iceServers: [
        {
            urls: "stun:stun.l.google.com:19302",
        },
    ],
};

export default function VideoMeetComponent() {
    const socketRef = useRef();
    const socketIdRef = useRef();
    const localVideoref = useRef();
    const videoRef = useRef([]);

    const [videoAvailable, setVideoAvailable] = useState(true);
    const [audioAvailable, setAudioAvailable] = useState(true);

    const [video, setVideo] = useState(true);
    const [audio, setAudio] = useState(true);

    const [screen, setScreen] = useState(false);
    const [screenAvailable, setScreenAvailable] = useState(false);

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [newMessages, setNewMessages] = useState(0);

    const [askForUsername, setAskForUsername] = useState(true);
    const [username, setUsername] = useState("");

    const [showModal, setModal] = useState(false);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getPermissions();

        return () => {
            try {
                if (window.localStream) {
                    window.localStream
                        .getTracks()
                        .forEach((track) => track.stop());
                }

                if (socketRef.current) {
                    socketRef.current.disconnect();
                }
            } catch (error) {
                console.log(error);
            }
        };
    }, []);

    const getPermissions = async () => {
        try {
            const videoPermission =
                await navigator.mediaDevices.getUserMedia({
                    video: true,
                });

            if (videoPermission) {
                setVideoAvailable(true);
                videoPermission
                    .getTracks()
                    .forEach((track) => track.stop());
            } else {
                setVideoAvailable(false);
            }

            const audioPermission =
                await navigator.mediaDevices.getUserMedia({
                    audio: true,
                });

            if (audioPermission) {
                setAudioAvailable(true);
                audioPermission
                    .getTracks()
                    .forEach((track) => track.stop());
            } else {
                setAudioAvailable(false);
            }

            if (navigator.mediaDevices.getDisplayMedia) {
                setScreenAvailable(true);
            }

            if (videoAvailable || audioAvailable) {
                const userMediaStream =
                    await navigator.mediaDevices.getUserMedia({
                        video: videoAvailable,
                        audio: audioAvailable,
                    });

                window.localStream = userMediaStream;

                if (localVideoref.current) {
                    localVideoref.current.srcObject =
                        userMediaStream;
                }
            }
        } catch (error) {
            console.log("Permission error:", error);
        }
    };

    const getMedia = () => {
        setVideo(videoAvailable);
        setAudio(audioAvailable);
        connectToSocketServer();
    };

    const connect = () => {
        if (!username.trim()) {
            return;
        }

        setAskForUsername(false);
        getMedia();
    };

    const getUserMedia = () => {
        if ((video && videoAvailable) || (audio && audioAvailable)) {
            navigator.mediaDevices
                .getUserMedia({
                    video: video && videoAvailable,
                    audio: audio && audioAvailable,
                })
                .then(getUserMediaSuccess)
                .catch((error) => console.log(error));
        } else {
            try {
                const tracks =
                    localVideoref.current.srcObject.getTracks();

                tracks.forEach((track) => track.stop());
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        if (video !== undefined && audio !== undefined) {
            getUserMedia();
        }
    }, [video, audio]);

    const getUserMediaSuccess = (stream) => {
        try {
            window.localStream
                ?.getTracks()
                .forEach((track) => track.stop());
        } catch (error) {
            console.log(error);
        }

        window.localStream = stream;

        if (localVideoref.current) {
            localVideoref.current.srcObject = stream;
        }

        Object.keys(connections).forEach((id) => {
            if (id === socketIdRef.current) return;

            connections[id].addStream(window.localStream);

            connections[id]
                .createOffer()
                .then((description) => {
                    return connections[id].setLocalDescription(
                        description
                    );
                })
                .then(() => {
                    socketRef.current.emit(
                        "signal",
                        id,
                        JSON.stringify({
                            sdp: connections[id].localDescription,
                        })
                    );
                })
                .catch((error) => console.log(error));
        });

        stream.getTracks().forEach((track) => {
            track.onended = () => {
                setVideo(false);
                setAudio(false);
            };
        });
    };

    const getDisplayMedia = () => {
        if (!screen) return;

        if (navigator.mediaDevices.getDisplayMedia) {
            navigator.mediaDevices
                .getDisplayMedia({
                    video: true,
                    audio: true,
                })
                .then(getDisplayMediaSuccess)
                .catch((error) => console.log(error));
        }
    };

    useEffect(() => {
        if (screen !== undefined) {
            getDisplayMedia();
        }
    }, [screen]);

    const getDisplayMediaSuccess = (stream) => {
        try {
            window.localStream
                ?.getTracks()
                .forEach((track) => track.stop());
        } catch (error) {
            console.log(error);
        }

        window.localStream = stream;

        if (localVideoref.current) {
            localVideoref.current.srcObject = stream;
        }

        Object.keys(connections).forEach((id) => {
            if (id === socketIdRef.current) return;

            connections[id].addStream(window.localStream);

            connections[id]
                .createOffer()
                .then((description) =>
                    connections[id].setLocalDescription(description)
                )
                .then(() => {
                    socketRef.current.emit(
                        "signal",
                        id,
                        JSON.stringify({
                            sdp: connections[id].localDescription,
                        })
                    );
                })
                .catch((error) => console.log(error));
        });

        stream.getVideoTracks()[0].onended = () => {
            setScreen(false);
            getUserMedia();
        };
    };

    const gotMessageFromServer = (fromId, message) => {
        const signal = JSON.parse(message);

        if (fromId === socketIdRef.current) return;

        if (signal.sdp) {
            connections[fromId]
                ?.setRemoteDescription(
                    new RTCSessionDescription(signal.sdp)
                )
                .then(() => {
                    if (signal.sdp.type === "offer") {
                        return connections[fromId]
                            .createAnswer()
                            .then((description) =>
                                connections[fromId].setLocalDescription(
                                    description
                                )
                            )
                            .then(() => {
                                socketRef.current.emit(
                                    "signal",
                                    fromId,
                                    JSON.stringify({
                                        sdp: connections[fromId]
                                            .localDescription,
                                    })
                                );
                            });
                    }
                })
                .catch((error) => console.log(error));
        }

        if (signal.ice) {
            connections[fromId]
                ?.addIceCandidate(
                    new RTCIceCandidate(signal.ice)
                )
                .catch((error) => console.log(error));
        }
    };

    const connectToSocketServer = () => {
        socketRef.current = io(server_url, {
            secure: false,
        });

        socketRef.current.on("signal", gotMessageFromServer);

        socketRef.current.on("connect", () => {
            socketIdRef.current = socketRef.current.id;

            socketRef.current.emit(
                "join-call",
                window.location.href
            );

            socketRef.current.on(
                "chat-message",
                addMessage
            );

            socketRef.current.on("user-left", (id) => {
                setVideos((currentVideos) =>
                    currentVideos.filter(
                        (video) => video.socketId !== id
                    )
                );

                delete connections[id];
            });

            socketRef.current.on(
                "user-joined",
                (id, clients) => {
                    clients.forEach((socketListId) => {
                        connections[socketListId] =
                            new RTCPeerConnection(
                                peerConfigConnections
                            );

                        connections[
                            socketListId
                        ].onicecandidate = (event) => {
                            if (event.candidate) {
                                socketRef.current.emit(
                                    "signal",
                                    socketListId,
                                    JSON.stringify({
                                        ice: event.candidate,
                                    })
                                );
                            }
                        };

                        connections[
                            socketListId
                        ].onaddstream = (event) => {
                            const existing =
                                videoRef.current.find(
                                    (video) =>
                                        video.socketId ===
                                        socketListId
                                );

                            if (existing) {
                                setVideos((currentVideos) => {
                                    const updated =
                                        currentVideos.map(
                                            (video) =>
                                                video.socketId ===
                                                    socketListId
                                                    ? {
                                                        ...video,
                                                        stream:
                                                            event.stream,
                                                    }
                                                    : video
                                        );

                                    videoRef.current =
                                        updated;

                                    return updated;
                                });
                            } else {
                                const newVideo = {
                                    socketId: socketListId,
                                    stream: event.stream,
                                };

                                setVideos((currentVideos) => {
                                    const updated = [
                                        ...currentVideos,
                                        newVideo,
                                    ];

                                    videoRef.current =
                                        updated;

                                    return updated;
                                });
                            }
                        };

                        if (window.localStream) {
                            connections[
                                socketListId
                            ].addStream(
                                window.localStream
                            );
                        }
                    });

                    if (id === socketIdRef.current) {
                        Object.keys(connections).forEach(
                            (connectionId) => {
                                if (
                                    connectionId ===
                                    socketIdRef.current
                                )
                                    return;

                                connections[
                                    connectionId
                                ]
                                    .createOffer()
                                    .then((description) =>
                                        connections[
                                            connectionId
                                        ].setLocalDescription(
                                            description
                                        )
                                    )
                                    .then(() => {
                                        socketRef.current.emit(
                                            "signal",
                                            connectionId,
                                            JSON.stringify({
                                                sdp: connections[
                                                    connectionId
                                                ]
                                                    .localDescription,
                                            })
                                        );
                                    })
                                    .catch((error) =>
                                        console.log(error)
                                    );
                            }
                        );
                    }
                }
            );
        });
    };

    const handleVideo = () => {
        setVideo((current) => !current);
    };

    const handleAudio = () => {
        setAudio((current) => !current);
    };

    const handleScreen = () => {
        setScreen((current) => !current);
    };

    const handleEndCall = () => {
        try {
            window.localStream
                ?.getTracks()
                .forEach((track) => track.stop());

            socketRef.current?.disconnect();
        } catch (error) {
            console.log(error);
        }

        window.location.href = "/";
    };

    const addMessage = (data, sender, socketIdSender) => {
        setMessages((previous) => [
            ...previous,
            {
                sender,
                data,
            },
        ]);

        if (socketIdSender !== socketIdRef.current) {
            setNewMessages(
                (previous) => previous + 1
            );
        }
    };

    const sendMessage = () => {
        if (!message.trim()) return;

        socketRef.current.emit(
            "chat-message",
            message,
            username
        );

        setMessage("");
    };

    const handleMessageKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className={styles.videoMeet}>
            {askForUsername ? (
                /* ================= LOBBY ================= */
                <div className={styles.lobby}>
                    <div className={styles.lobbyCard}>
                        <div className={styles.logo}>
                            Meet<span>Flow</span>
                        </div>

                        <h1>Ready to join?</h1>

                        <p>
                            Enter your name and check your
                            camera before joining the meeting.
                        </p>

                        <TextField
                            fullWidth
                            label="Your name"
                            value={username}
                            onChange={(e) =>
                                setUsername(e.target.value)
                            }
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    connect();
                                }
                            }}
                            sx={{
                                mb: 2,
                                // Typed text
                                "& .MuiInputBase-input": {
                                    color: "white",
                                },
                            }}
                        />

                        <Button
                            fullWidth
                            variant="contained"
                            size="large"
                            onClick={connect}
                            disabled={!username.trim()}
                            sx={{
                                borderRadius: 2,
                                textTransform: "none",
                                fontSize: "16px",
                                py: 1.3,
                            }}
                        >
                            Join Meeting
                        </Button>

                        <div className={styles.previewBox}>
                            <video
                                ref={localVideoref}
                                autoPlay
                                muted
                                playsInline
                            />

                            <div
                                className={
                                    styles.previewLabel
                                }
                            >
                                <span>
                                    {username ||
                                        "You"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                /* ================= MEETING ================= */
                <div className={styles.meeting}>
                    <div className={styles.topBar}>
                        <div className={styles.logo}>
                            Meet<span>Flow</span>
                        </div>

                        <div className={styles.meetingInfo}>
                            <span className={styles.liveDot} />
                            Live Meeting
                        </div>
                    </div>

                    <div className={styles.videoArea}>
                        <div
                            className={
                                videos.length === 0
                                    ? styles.singleVideo
                                    : styles.conferenceView
                            }
                        >
                            <div className={styles.videoTile}>
                                <video
                                    className={
                                        styles.meetUserVideo
                                    }
                                    ref={localVideoref}
                                    autoPlay
                                    muted
                                    playsInline
                                />

                                <div
                                    className={
                                        styles.videoName
                                    }
                                >
                                    {username} (You)
                                </div>
                            </div>

                            {videos.map((video) => (
                                <div
                                    className={
                                        styles.videoTile
                                    }
                                    key={video.socketId}
                                >
                                    <video
                                        data-socket={
                                            video.socketId
                                        }
                                        ref={(ref) => {
                                            if (
                                                ref &&
                                                video.stream
                                            ) {
                                                ref.srcObject =
                                                    video.stream;
                                            }
                                        }}
                                        autoPlay
                                        playsInline
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CHAT */}
                    {showModal && (
                        <div
                            className={
                                styles.chatRoom
                            }
                        >
                            <div
                                className={
                                    styles.chatHeader
                                }
                            >
                                <div>
                                    <h3>Meeting Chat</h3>
                                    <span>
                                        {messages.length}{" "}
                                        messages
                                    </span>
                                </div>

                                <IconButton
                                    onClick={() =>
                                        setModal(false)
                                    }
                                >
                                    <ChatIcon />
                                </IconButton>
                            </div>

                            <div
                                className={
                                    styles.chattingDisplay
                                }
                            >
                                {messages.length === 0 ? (
                                    <div
                                        className={
                                            styles.emptyChat
                                        }
                                    >
                                        <ChatIcon />
                                        <p>
                                            No messages yet
                                        </p>
                                        <span>
                                            Start the
                                            conversation
                                        </span>
                                    </div>
                                ) : (
                                    messages.map(
                                        (
                                            item,
                                            index
                                        ) => (
                                            <div
                                                className={
                                                    styles.message
                                                }
                                                key={
                                                    index
                                                }
                                            >
                                                <strong>
                                                    {
                                                        item.sender
                                                    }
                                                </strong>
                                                <p>
                                                    {
                                                        item.data
                                                    }
                                                </p>
                                            </div>
                                        )
                                    )
                                )}
                            </div>

                            <div
                                className={
                                    styles.chattingArea
                                }
                            >
                                <TextField
                                    fullWidth
                                    size="small"
                                    placeholder="Type a message..."
                                    value={message}
                                    onChange={(e) =>
                                        setMessage(
                                            e.target.value
                                        )
                                    }
                                    onKeyDown={
                                        handleMessageKeyDown
                                    }
                                />

                                <IconButton
                                    className={
                                        styles.sendButton
                                    }
                                    onClick={
                                        sendMessage
                                    }
                                >
                                    <SendIcon />
                                </IconButton>
                            </div>
                        </div>
                    )}

                    {/* CONTROLS */}
                    <div
                        className={
                            styles.buttonContainers
                        }
                    >
                        <IconButton
                            className={
                                styles.controlButton
                            }
                            onClick={handleVideo}
                        >
                            {video ? (
                                <VideocamIcon />
                            ) : (
                                <VideocamOffIcon />
                            )}
                        </IconButton>

                        <IconButton
                            className={
                                styles.controlButton
                            }
                            onClick={handleAudio}
                        >
                            {audio ? (
                                <MicIcon />
                            ) : (
                                <MicOffIcon />
                            )}
                        </IconButton>

                        {screenAvailable && (
                            <IconButton
                                className={
                                    styles.controlButton
                                }
                                onClick={
                                    handleScreen
                                }
                            >
                                {screen ? (
                                    <StopScreenShareIcon />
                                ) : (
                                    <ScreenShareIcon />
                                )}
                            </IconButton>
                        )}

                        <IconButton
                            className={
                                styles.endCallButton
                            }
                            onClick={
                                handleEndCall
                            }
                        >
                            <CallEndIcon />
                        </IconButton>

                        <Badge
                            badgeContent={
                                newMessages
                            }
                            color="error"
                            invisible={
                                newMessages === 0
                            }
                        >
                            <IconButton
                                className={
                                    styles.controlButton
                                }
                                onClick={() => {
                                    setModal(
                                        (current) =>
                                            !current
                                    );
                                    setNewMessages(0);
                                }}
                            >
                                <ChatIcon />
                            </IconButton>
                        </Badge>
                    </div>
                </div>
            )}
        </div>
    );
}





