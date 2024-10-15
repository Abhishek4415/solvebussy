import "../style/login.css";
import Lottie from 'react-lottie';
import { Link } from "react-router-dom";
import { useState } from "react";
import logindata from "../assets/loginanimation";
import img from '/solvebuddy1.png';
import Select from 'react-select';  // Import react-select

export default function Login() {
    let [email, setEmail] = useState("demo@gmail.com");
    let [password, setPassword] = useState("");
    let [username, setUsername] = useState("");
    let [university, setUniversity] = useState("");

    // const navigate = useNavigate(); // Hook for programmatic navigation

    const indianUniversityList = [
        { value: "Amity University", label: "Amity University" },
        { value: "Banaras Hindu University", label: "Banaras Hindu University" },
        { value: "Birla Institute of Technology and Science", label: "Birla Institute of Technology and Science" },
        { value: "Chandigarh University", label: "Chandigarh University" },
        { value: "Delhi University", label: "Delhi University" },
        { value: "Guru Gobind Singh Indraprastha University", label: "Guru Gobind Singh Indraprastha University" },
        { value: "Indian Institute of Science", label: "Indian Institute of Science" },
        { value: "Indian Institute of Technology Bombay", label: "Indian Institute of Technology Bombay" },
        { value: "Indian Institute of Technology Delhi", label: "Indian Institute of Technology Delhi" },
        { value: "Indian Institute of Technology Kanpur", label: "Indian Institute of Technology Kanpur" },
        { value: "Jawaharlal Nehru University", label: "Jawaharlal Nehru University" },
        { value: "Jadavpur University", label: "Jadavpur University" },
        { value: "Kr Mangalam University", label: "Kr Mangalam University" },
        { value: "Manipal Academy of Higher Education", label: "Manipal Academy of Higher Education" },
        { value: "Osmania University", label: "Osmania University" },
        { value: "Panjab University", label: "Panjab University" },
        { value: "Savitribai Phule Pune University", label: "Savitribai Phule Pune University" },
        { value: "SRM Institute of Science and Technology", label: "SRM Institute of Science and Technology" },
        { value: "University of Calcutta", label: "University of Calcutta" },
        { value: "Vellore Institute of Technology", label: "Vellore Institute of Technology" },
        { value: "Visva-Bharati University", label: "Visva-Bharati University" },
        { value: "Other", label: "Other" },
    ];

    let handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    let handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }; 
    let handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }; 
    let handleUniversityChange = (selectedOption) => {
        setUniversity(selectedOption);
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: logindata,
    };


    // Function to handle form submission
    // const handleSubmit = (event) => {
    //     event.preventDefault();  // Prevent default form submission
    //     console.log("Sign in clicked!");
    //     // Navigate to the home page
    //     navigate("/home");
    // };



    return (
        <div className="login">
            <div className="sideimg">
                <p><Lottie options={defaultOptions} height={400} width={400} /></p>
            </div>

            <form method="get" action="/home">
                <img src={img} alt="logo" className="logo" />
                <h1>Welcome! New User</h1>
                <p>Enter your account details</p>

                <input type="text" placeholder="Username" onChange={handleUsernameChange} required/>
                <input type="email" placeholder="demo@gmail.com" onChange={handleEmailChange} required/>
                
                {/* Searchable dropdown for university selection */}
                <Select className="university"
                    value={university}
                    onChange={handleUniversityChange}
                    options={indianUniversityList}
                    placeholder="Select your university"
                    isSearchable={true} required
                />

                <input type="password" placeholder="Password" onChange={handlePasswordChange} required/>

                <button type="submit" >Signin</button>
                <Link to="/login">Login</Link>
            </form>
        </div>
    );
}
