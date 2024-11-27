import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = ({ message = "Page Not Found", redirect = true }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (redirect) {
            const timer = setTimeout(() => {
                navigate("/"); // Redirect to home page
            }, 5000); // 5 seconds
            return () => clearTimeout(timer);
        }
    }, [navigate, redirect]);

    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>404</h1>
            <p>{message}</p>
            {redirect && <p>Redirecting to the home page...</p>}
        </div>
    );
};

export default NotFound;
