import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import {
	FaBed,
	FaUserMd,
	FaStethoscope,
	FaMoneyBillWave,
	FaPills,
} from "react-icons/fa";
import "./Dependent.css";

function downloadReport() {
	alert("Successfully downloaded the report!");
}

function Dependent() {
	const goBack = () => {
		window.history.back();
	};

	const [activeSection, setActiveSection] = useState("patientInfo");

	const costData = {
		medication: 1000000,
		careTaking: 500000,
		examination: 2000000,
	};

	// Hàm xử lý tìm kiếm
	const [search, setSearch] = useState("");

	const handleSearch = (event) => {
		setSearch(event.target.value);
	};

	return (
		<div className="bigone">
			<div className="top-bar">
				<div className="title">Dependent Dashboard</div>
				<button className="back-button" onClick={goBack}>
					← Sign out
				</button>
			</div>
			<div className="sidebar">
				<ul>
					<li onClick={() => setActiveSection("myinfo")}>My Information</li>
					<li onClick={() => setActiveSection("patientInfo")}>
						Patient Information
					</li>
					<li onClick={() => setActiveSection("roomAssignment")}>
						Room Assignment
					</li>
					<li onClick={() => setActiveSection("examination")}>Examination</li>
					<li onClick={() => setActiveSection("treatment")}>Treatment</li>
					<li onClick={() => setActiveSection("careTaking")}>Care-taking</li>
					<li onClick={() => setActiveSection("medication")}>Medication</li>
					<li onClick={() => setActiveSection("bill")}>Bill</li>
					<li onClick={() => setActiveSection("costStats")}>Cost Statistics</li>
					<li onClick={() => setActiveSection("reminder")}>Reminder</li>
				</ul>
			</div>

			<div className="content">
				{activeSection === "myinfo" && (
					<div className="container">
						<h2>My Information</h2>
						<table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Phone number</th>
									<th>Patient ID</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Le Van A</td>
									<td>11111111111</td>
									<td>OP000001</td>
								</tr>
							</tbody>
						</table>
					</div>
				)}
				{activeSection === "patientInfo" && (
					<div className="container">
						<h2>My Patient Information</h2>
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

				{activeSection === "roomAssignment" && (
					<div className="container">
						<h2>
							<FaBed /> Room Assignment
						</h2>
						<table>
							<thead>
								<tr>
									<th>Room number</th>
									<th>Department</th>
									<th>Purpose</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>303</td>
									<td>A</td>
									<td>Treatment</td>
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

				{activeSection === "medication" && (
					<div class="container">
						<h2>
							<FaPills /> Medication
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

				{activeSection === "bill" && (
					<div class="container">
						<h2>Bill</h2>
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

				{activeSection === "costStats" && (
					<div className="container">
						<h2>Cost Statistics</h2>
						<div>
							<p>Total Medication Cost: {costData.medication} VND</p>
							<p>Total Care-taking Cost: {costData.careTaking} VND</p>
							<p>Total Examination Cost: {costData.examination} VND</p>
						</div>
						<button className="download-button" onClick={downloadReport}>
							Download PDF Report
						</button>
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

export default Dependent;
