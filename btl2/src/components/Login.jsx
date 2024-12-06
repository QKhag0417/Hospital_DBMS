import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function HomeBeforeLogin() {
	return (
		<div className="container">
			<div className="hospital-banner">
				Welcome to Hanh Phuc Hospital System
			</div>
			<div className="login-container">
				<h1>Hospital Login</h1>
				<form action="/dashboard" method="post">
					<select name="role" required>
						<option value="" disabled selected>
							Select Role
						</option>
						<option value="patient">Patient</option>
						<option value="dependent">Dependent</option>
						<option value="nurse">Nurse</option>
						<option value="doctor">Doctor</option>
						<option value="receptionist">Receptionist</option>
					</select>
					<input type="text" name="username" placeholder="Username" required />
					<input
						type="password"
						name="password"
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

export default HomeBeforeLogin;
