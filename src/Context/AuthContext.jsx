// import axios from "axios";
// import httpStatus from "http-status";
// import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import server from "../environment";

// export const AuthContext = createContext({});

// const client = axios.create({
//     baseURL: `${server}/api/v1/users`
// });

// export const AuthProvider = ({ children }) => {

//     const [userData, setUserData] = useState({});

//     const router = useNavigate();

//     const handleRegister = async (name, username, password) => {
//         try {
//             const request = await client.post("/register", {
//                 name: name,
//                 username: username,
//                 password: password
//             });

//             if (request.status === httpStatus.CREATED) {
//                 return request.data.message;
//             }

//         } catch (err) {
//             console.log("REGISTER STATUS:", err.response?.status);
//             console.log("REGISTER RESPONSE:", err.response?.data);
//             throw err;
//         }
//     };

//     const handleLogin = async (username, password) => {
//         try {
//             const request = await client.post("/login", {
//                 username: username,
//                 password: password
//             });

//             console.log("LOGIN RESPONSE:", request.data);

//             if (request.status === httpStatus.OK) {
//                 localStorage.setItem("token", request.data.token);
//                 router("/home");
//             }

//         } catch (err) {
//             console.log("LOGIN STATUS:", err.response?.status);
//             console.log("BACKEND RESPONSE:", err.response?.data);
//             console.log("LOGIN ERROR:", err.message);

//             throw err;
//         }
//     };

//     const getHistoryOfUser = async () => {
//         try {
//             const request = await client.get("/get_all_activity", {
//                 params: {
//                     token: localStorage.getItem("token")
//                 }
//             });

//             return request.data;

//         } catch (err) {
//             throw err;
//         }
//     };

//     const addToUserHistory = async (meetingCode) => {
//         try {
//             const request = await client.post("/add_to_activity", {
//                 token: localStorage.getItem("token"),
//                 meeting_code: meetingCode
//             });

//             return request;

//         } catch (err) {
//             throw err;
//         }
//     };

//     const data = {
//         userData,
//         setUserData,
//         addToUserHistory,
//         getHistoryOfUser,
//         handleRegister,
//         handleLogin
//     };

//     return (
//         <AuthContext.Provider value={data}>
//             {children}
//         </AuthContext.Provider>
//     );
// };




import axios from "axios";
import httpStatus from "http-status";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import server from "../environment";

export const AuthContext = createContext({});

const client = axios.create({
    baseURL: `${server}/api/v1/users`
});

export const AuthProvider = ({ children }) => {

    // Check token when application starts
    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem("token")
    );

    const [userData, setUserData] = useState({});

    const router = useNavigate();


    // =========================
    // REGISTER
    // =========================

    const handleRegister = async (name, username, password) => {
        try {

            const request = await client.post("/register", {
                name: name,
                username: username,
                password: password
            });

            if (request.status === httpStatus.CREATED) {
                return request.data.message;
            }

        } catch (err) {

            console.log("REGISTER STATUS:", err.response?.status);
            console.log("REGISTER RESPONSE:", err.response?.data);

            throw err;
        }
    };


    // =========================
    // LOGIN
    // =========================

    const handleLogin = async (username, password) => {
        try {

            const request = await client.post("/login", {
                username: username,
                password: password
            });

            console.log("LOGIN RESPONSE:", request.data);

            if (request.status === httpStatus.OK) {

                // Save token
                localStorage.setItem(
                    "token",
                    request.data.token
                );

                // IMPORTANT
                // Tell React that user is logged in
                setIsLoggedIn(true);

                // Go to home
                router("/home");
            }

        } catch (err) {

            console.log("LOGIN STATUS:", err.response?.status);
            console.log("BACKEND RESPONSE:", err.response?.data);
            console.log("LOGIN ERROR:", err.message);

            throw err;
        }
    };


    // =========================
    // LOGOUT
    // =========================

    const handleLogout = () => {

        localStorage.removeItem("token");

        // Tell React user is logged out
        setIsLoggedIn(false);

        router("/auth");
    };


    // =========================
    // GET USER HISTORY
    // =========================

    const getHistoryOfUser = async () => {
        try {

            const request = await client.get(
                "/get_all_activity",
                {
                    params: {
                        token: localStorage.getItem("token")
                    }
                }
            );

            return request.data;

        } catch (err) {

            throw err;
        }
    };


    // =========================
    // ADD TO HISTORY
    // =========================

    const addToUserHistory = async (meetingCode) => {
        try {

            const request = await client.post(
                "/add_to_activity",
                {
                    token: localStorage.getItem("token"),
                    meeting_code: meetingCode
                }
            );

            return request;

        } catch (err) {

            throw err;
        }
    };


    const data = {
        userData,
        setUserData,

        isLoggedIn,
        setIsLoggedIn,

        addToUserHistory,
        getHistoryOfUser,

        handleRegister,
        handleLogin,
        handleLogout
    };


    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};