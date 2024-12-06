import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from 'axios';
import "./Login.css";

function Login() {
	const url = `http://localhost:3000/api/login`;
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } 
    else if (name === "password") {
      setPassword(value);
    }
	else{
		setRole(value)
	}

	console.log("username",username)
	console.log("password",password)
	console.log("role",role)
  };


  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(url, {
        Username: username,
        Password: password,
		Role: role
      }, {
        withCredentials: true
      });
      localStorage.setItem('userCredentials', JSON.stringify({ token: response.data.token}));

    }
      
    catch (error) {
      if (error.response) {
		console.log(error)
      }
      else {
        console.log("Khong ket noi dc vs server")
      }
    }
  }

	return (
		<div className="container">
			<div className="hospital-banner">
				Welcome to Hanh Phuc Hospital System
			</div>
			<div className="login-container">
				<h1>Hospital Login</h1>
				<form action="/dashboard" method="post">
					<select name="role" value={role} onChange={handleChange} required>
						<option value="" disabled selected>
							Select Role
						</option>
						<option value="patient">Patient</option>
						<option value="dependent">Dependent</option>
						<option value="nurse">Nurse</option>
						<option value="doctor">Doctor</option>
						<option value="receptionist">Receptionist</option>
					</select>
					<input 
						type="text" 
						name="username" 
						value={username}
            			onChange={handleChange}
						placeholder="Username" 
						required />
					<input
						type="password"
						name="password"
						value={password}
            			onChange={handleChange}
						placeholder="Password"
						required
					/>
					<button
						onClick={(e) => {
							// Do something on button click, for now let's just redirect
							window.location.href = "dependent.html";
							e.preventDefault(); // Prevent form submission
						}}
						type="submit">
						Login
					</button>
				</form>
				<div className="footer">&copy; 2024 Hanh Phuc Hospital System</div>
			</div>
		</div>
	);
}

export default Login;
