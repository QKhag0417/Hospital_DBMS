import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import "./Dependent.css";
import {
	FaBed,
	FaUserMd,
	FaStethoscope,
	FaMoneyBillWave,
	FaPills,
} from "react-icons/fa";

function Doctor() {
	const goBack = () => {
		window.history.back();
	};

	const [activeSection, setActiveSection] = useState("myinfo");

	// Hàm xử lý tìm kiếm
	const [search, setSearch] = useState("");

	const handleSearch = (event) => {
		setSearch(event.target.value);
	};

	return (
		<div className="bigone">
			<div className="top-bar">
				<div className="title">Doctor Dashboard</div>
				<button className="back-button" onClick={goBack}>
					← Sign out
				</button>
			</div>
			<div className="sidebar">
				<ul>
					<li onClick={() => setActiveSection("myInfo")}>My Information</li>
					<li onClick={() => setActiveSection("workingPlace")}>
						My Working Place
					</li>
					<li onClick={() => setActiveSection("examination")}>Examination</li>
					<li onClick={() => setActiveSection("treatment")}>Treatment</li>
					<li onClick={() => setActiveSection("careTaking")}>Specialty</li>
				</ul>
			</div>

			<div className="content">
				{activeSection === "myInfo" && (
					<div className="container">
						<h2>My Information</h2>
						<table>
							<thead>
								<tr>
									<th>My ID</th>
									<th>Name</th>
									<th>Age</th>
									<th>Gender</th>
									<th>Salary</th>
									<th>Bonus</th>
									<th>Phone Number</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Le Van A</td>
									<td>11111111111</td>
									<td>Le Van A</td>
									<td>Le Van A</td>
									<td>Le Van A</td>
									<td>Le Van A</td>
									<td>OP000001</td>
								</tr>
							</tbody>
						</table>
					</div>
				)}
				{activeSection === "workingPlace" && (
					<div className="container">
						<h2>My Working Place</h2>
						<input
							type="text"
							placeholder="Search Patient Info..."
							value={search}
							onChange={handleSearch}
							className="search-bar"
						/>
						<table>
							<thead>
								<tr>
									<th>Field</th>
									<th>Details</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Patient ID</td>
									<td>OP000001</td>
								</tr>
								<tr>
									<td>Name</td>
									<td>Lee Zhuc Khang</td>
								</tr>

								<tr>
									<td>Age</td>
									<td>20</td>
								</tr>
								<tr>
									<td>Gender</td>
									<td>Female</td>
								</tr>
								<tr>
									<td>Phone number</td>
									<td>0944957939</td>
								</tr>
								<tr>
									<td>Height</td>
									<td>1.54 m</td>
								</tr>
								<tr>
									<td>Weight</td>
									<td>78kg</td>
								</tr>
							</tbody>
						</table>
					</div>
				)}

				{activeSection === "examination" && (
					<div className="container">
						<h2>
							<FaUserMd /> Examination
						</h2>
						<table>
							<thead>
								<tr>
									<th>Doctor ID</th>
									<th>Doctor Name</th>
									<th>Diagnosis</th>
									<th>Examination Date</th>
									<th>Next Examination Date</th>
									<th>Fee</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>DO0001</td>
									<td>Tran Anh Khoa</td>
									<td>Cancer</td>
									<td>2024-12-6</td>
									<td>2050-12-6</td>
									<td>1,000,000 VND</td>
								</tr>
							</tbody>
						</table>
					</div>
				)}

				{activeSection === "treatment" && (
					<div class="container">
						<h2>
							<FaStethoscope /> Treatment
						</h2>
						<table>
							<tr>
								<th>Doctor ID</th>
								<th>Doctor Name</th>
								<th>Admission Date</th>
								<th>Discharge Date</th>
								<th>Result</th>
							</tr>
							<tr>
								<td>DO0001</td>
								<td>Tran Anh Khoa</td>
								<td>2024-12-6</td>
								<td>2050-12-6</td>
								<td>Success</td>
							</tr>
						</table>
					</div>
				)}

				{activeSection === "careTaking" && (
					<div class="container">
						<h2>
							<FaMoneyBillWave /> Care-taking
						</h2>
						<table>
							<tr>
								<th>Bill ID</th>
								<th>Amount</th>
								<th>Date</th>
							</tr>
							<tr>
								<td>B001</td>
								<td>1,000,000 VND</td>
								<td>2024-11-30</td>
							</tr>
						</table>
					</div>
				)}
			</div>
			<br />

			{/* Quảng cáo bên phải */}
			<div className="ads right-ads">
				<h2>Special Offer!</h2>
				<p>Get 50% off on premium subscriptions. Limited time only!</p>
				<a href="/subscribe">Register Now</a>
				<img
					src="https://crawfurdhospital.com/wp-content/uploads/2021/09/VIP-ward.jpg"
					alt="VIP room"
				/>
			</div>
		</div>
	);
}

export default Doctor;
