import "../style/login.css";
import Lottie from 'react-lottie';
import { Link } from "react-router-dom";
import img from '/solvebuddy1.png'

import { useState } from "react";
import logindata from "../assets/loginanimation"

export default function Login() {
    let [email, setEmail] = useState("demo@gmail.com");
    let [password, setPassword] = useState("");

    let handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    let handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    console.log(email);
    console.log(password);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: logindata,
        // rendererSettings: {
        //     preserveAspectRatio: 'xMidYMid slice',
        // }
    };

    return (
        <div className="login">
            <div className="sideimg">
                <p><Lottie options={defaultOptions} height={400} width={400} /></p>
            </div>

            <form action="/home">
                <img src={img} alt="logo" className="logo" />
                <h1>😊Welcome to SolveBuddy</h1>
                <input type="email" placeholder="demo@gmail.com" onChange={handleEmailChange} required/>
                <input type="password" placeholder="password" onChange={handlePasswordChange} required/>
                <button type="submit">Login</button>
                <Link to="/signup">Signup</Link>
            </form>
        </div>
    );
}
