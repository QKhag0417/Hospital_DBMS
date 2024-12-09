import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from 'axios';
import "./Login.css";

function Login() {
	const url = `http://localhost:3010/api/login`;
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const [errors, setErrors] = useState([]);
  const [showErrors, setShowErrors] = useState(false);


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

  useEffect(() => {
    let newErrors = [];
    setErrors(newErrors);
    setShowErrors(true);
  }, [username, password]);


  
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
	  console.log(response)
      localStorage.setItem('userCredentials', JSON.stringify({ token: response.data.token}));

		if( role === 'patient'){
			window.location.assign('/patient');
		}
		else if( role === 'doctor'){
			window.location.assign('/doctor');
		}
		else if( role === 'nurse'){
			window.location.assign('/nurse');
		}
		else if( role === 'dependent'){
			window.location.assign('/dependent');
		}
		else if( role === 'receptionist'){
			window.location.assign('/receptionist');
		}
		else{
			window.location.assign('/other');
		}
	
	}
    catch (error) {
		if (error.response) {
			if (error.response.status >= 400 && error.response.status < 500) {
			  
			  setErrors([error.response.data]);
			}
			if (error.response.status === 500) {
			  setErrors([error.response.data]);
			}
		  }
		else {
			setErrors(['Không kết nối được đến server!']);
		}
		setShowErrors(true);
    }
  }

	return (
		<div className="container">
			<div className="hospital-banner">
				Welcome to Hanh Phuc Hospital System
			</div>
			<div className="login-container">
				<h1>Hospital Login</h1>
				<form onSubmit={handleSubmit} >
					<select name="role" value={role} onChange={handleChange} required>
						<option value="" disabled selected>
							Select Role
						</option>
						<option value="patient">Patient</option>
						<option value="dependent">Dependent</option>
						<option value="nurse">Nurse</option>
						<option value="doctor">Doctor</option>
						<option value="receptionist">Receptionist</option>
						<option value="other">Other</option>
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
						type="submit">
						Login
					</button>

					{showErrors && errors.length > 0 && (
            			<div >
              				{errors.map((error, index) => (
                				<p key={index} >
                  					{error}
                				</p>
              				))}
            			</div>
          			)}
				</form>
				<div className="footer">&copy; 2024 Hanh Phuc Hospital System</div>
			</div>
		</div>
	);
}

export default Login;
