import * as React from "react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";



function App() {
    let navigate = useNavigate();
    let location = useLocation();

    console.log(location)

    return (
        <>
            <h1>About</h1>
            <button onClick={() => navigate("/", {
                state: {
                    name: "Data"
                }
            })}>Home</button>
            <button onClick={() => navigate("/user")}>User</button>


        </>

    );
}

export default App;