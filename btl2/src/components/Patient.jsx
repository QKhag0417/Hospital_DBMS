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
	FaRegIdBadge,
	FaRegHospital,
	FaAccusoft,
	FaUserNurse,
	Fa500Px,
} from "react-icons/fa";
import "./Dependent.css";

function Patient() {
	const goBack = () => {
		window.history.back();
	};

	const [activeSection, setActiveSection] = useState("myInfo");

	// Hàm xử lý tìm kiếm
	const [search, setSearch] = useState("");

	const handleSearch = (event) => {
		setSearch(event.target.value);
	};
	return (
		<div className="bigone">
			<div className="top-bar">
				<div className="title"> &nbsp;&nbsp;&nbsp;Patient Dashboard</div>
				<button className="back-button" onClick={goBack}>
					← Sign out
				</button>
			</div>
			<div className="sidebar">
				<ul>
					<li onClick={() => setActiveSection("myInfo")}> My Information</li>
					<li onClick={() => setActiveSection("assignment")}>
						Room Assignment
					</li>
					<li onClick={() => setActiveSection("examination")}>Examination</li>
					<li onClick={() => setActiveSection("treatment")}>Treatment</li>
					<li onClick={() => setActiveSection("careTaking")}>Care Taking</li>
					<li onClick={() => setActiveSection("medication")}>Medication</li>
					<li onClick={() => setActiveSection("bill")}>Bill</li>
				</ul>
			</div>

			<div className="content">
				{activeSection === "myInfo" && (
					<div className="container">
						<h2>
							<FaRegIdBadge /> My Information
						</h2>
						<table>
							<thead>
								<tr>
									<th>My ID</th>
									<th>Name</th>
									<th>Age</th>
									<th>Gender</th>
									<th>My Phone Number</th>
									<th>Height(m)</th>
									<th>Weight(kg)</th>
									<th>Dependent Name</th>
									<th>Dependent Phone Number</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>DO0001</td>
									<td>DO0001</td>
									<td>DO0001</td>
									<td>Tran Anh Khoa</td>
									<td>20</td>
									<td>Male</td>
									<td>23,000,000VND</td>
									<td>1,000,000 VND</td>
									<td>0842210704</td>
								</tr>
							</tbody>
						</table>
					</div>
				)}
				{activeSection === "assignment" && (
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
							<FaUserNurse /> Care-taking
						</h2>
						<table>
							<tr>
								<th>Nurse ID</th>
								<th>Nurse Name</th>
							</tr>
							<tr>
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
								<th>Medication ID</th>
								<th>Medication Name</th>
								<th>Price</th>
								<th>Effect</th>
								<th>Expired Date</th>
							</tr>
							<tr>
								<td>B001</td>
								<td>B001</td>
								<td>B001</td>
								<td>1,000,000 VND</td>
								<td>2024-11-30</td>
							</tr>
						</table>
					</div>
				)}

				{activeSection === "bill" && (
					<div class="container">
						<h2>
							<FaMoneyBillWave /> Bill
						</h2>
						<table>
							<tr>
								<th>Bill ID</th>
								<th>Date</th>
								<th>Total Price(VND)</th>
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

export default Patient;
