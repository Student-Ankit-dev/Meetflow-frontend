import * as React from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Snackbar } from "@mui/material";

import { AuthContext } from "../Context/AuthContext";
import HomePage from "./HomePage";

const defaultTheme = createTheme();

export default function Authentication() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [error, setError] = React.useState("");
    const [message, setMessage] = React.useState("");

    const [formState, setFormState] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    const handleAuth = async () => {
        try {
            if (formState === 0) {
                await handleLogin(username, password);
            }

            if (formState === 1) {
                const result = await handleRegister(
                    name,
                    username,
                    password
                );

                console.log(result);

                setUsername("");
                setPassword("");
                setName("");
                setMessage(result);
                setOpen(true);
                setError("");
                setFormState(0);
            }
        } catch (err) {
            console.log(err);

            const message =
                err.response?.data?.message ||
                "Something went wrong. Please try again.";

            setError(message);
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                sx={{
                    position: "relative",
                    minHeight: "100vh",
                    overflow: "hidden",
                }}
            >
                {/* HOMEPAGE BACKGROUND */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 0,
                        overflow: "hidden",
                        pointerEvents: "none",
                    }}
                >
                    <HomePage />
                </Box>

                {/* DARK / BLUR OVERLAY */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 1,
                        backgroundColor: "rgba(255, 255, 255, 0.65)",
                        backdropFilter: "blur(3px)",
                    }}
                />

                {/* AUTHENTICATION FORM */}
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        minHeight: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        p: 2,
                    }}
                >
                    <Grid
                        component={Paper}
                        elevation={8}
                        sx={{
                            width: {
                                xs: "100%",
                                sm: 450,
                            },
                            borderRadius: 3,
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            sx={{
                                p: {
                                    xs: 3,
                                    sm: 5,
                                },
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Avatar
                                sx={{
                                    m: 1,
                                    bgcolor: "secondary.main",
                                }}
                            >
                                <LockOutlinedIcon />
                            </Avatar>

                            {/* SIGN IN / SIGN UP */}
                            <Box sx={{ mb: 2 }}>
                                <Button
                                    variant={
                                        formState === 0
                                            ? "contained"
                                            : "text"
                                    }
                                    onClick={() => {
                                        setFormState(0);
                                        setError("");
                                    }}
                                >
                                    Sign In
                                </Button>

                                <Button
                                    variant={
                                        formState === 1
                                            ? "contained"
                                            : "text"
                                    }
                                    onClick={() => {
                                        setFormState(1);
                                        setError("");
                                    }}
                                >
                                    Sign Up
                                </Button>
                            </Box>

                            {/* FORM */}
                            <Box
                                component="form"
                                sx={{
                                    mt: 1,
                                    width: "100%",
                                }}
                            >
                                {formState === 1 && (
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="Full Name"
                                        value={name}
                                        autoFocus
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                )}

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Username"
                                    value={username}
                                    autoFocus={formState === 0}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    value={password}
                                    type="password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />

                                {error && (
                                    <Box
                                        sx={{
                                            color: "red",
                                            mt: 1,
                                            textAlign: "center",
                                        }}
                                    >
                                        {error}
                                    </Box>
                                )}

                                <Button
                                    type="button"
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        mt: 3,
                                        mb: 2,
                                        py: 1.2,
                                    }}
                                    onClick={handleAuth}
                                >
                                    {formState === 0
                                        ? "Login"
                                        : "Register"}
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
            </Box>

            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={() => setOpen(false)}
                message={message}
            />
        </ThemeProvider>
    );
}

