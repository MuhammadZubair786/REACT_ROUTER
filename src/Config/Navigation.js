import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Components/Home'
import About from '../Components/About'
import Nopage from '../Components/Nopage'
import User from "../Components/User";
import UserData from "../Components/User_data";


function App() {
    return (
        <div className="App">
            <h1>Welcome to React Router!</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path='/user' element={<User />} />
                <Route path='/user/:fname/:data' element={<UserData />} />
                <Route path="*" element={<Nopage />} />

            </Routes>
        </div>
    );
}

export default App