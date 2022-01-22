import * as React from "react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";

function App() {

    let location = useLocation();

    console.log(location.state.name)

    return (
        <>
            <h1>Home</h1>

            <Link to="/about">
                <button>
                    About

                </button>

            </Link>

        </>

    );
}

export default App;