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
	const token = localStorage.getItem("userCredentials")
		? JSON.parse(localStorage.getItem("userCredentials")).token
		: null;
	const [myinfo, setMyInfo] = useState([]);
	const [myinfoass, setMyInfoass] = useState([]);
	const [myinfoexam, setMyInfoexam] = useState([]);
	const [myinfotreat, setMyInfotreat] = useState([]);
	const [myinfocare, setMyInfocare] = useState([]);
	const [myinfomed, setMyInfomed] = useState([]);
	const [myinfobill, setMyInfobill] = useState([]);

	const GetMyInfo = async () => {
		try {
			const response = await axios.post(
				"http://localhost:3010/api/patient/info",
				{},
				{
					withCredentials: true,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (response.status === 200) {
				setMyInfo(response.data);
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const GetMyInfoass = async () => {
		try {
			const response = await axios.post(
				"http://localhost:3010/api/patient/assigment",
				{},
				{
					withCredentials: true,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (response.status === 200) {
				setMyInfoass(response.data);
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const GetMyInfoexam = async () => {
		try {
			const response = await axios.post(
				"http://localhost:3010/api/patient/exam",
				{},
				{
					withCredentials: true,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (response.status === 200) {
				setMyInfoexam(response.data);
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const GetMyInfotreat = async () => {
		try {
			const response = await axios.post(
				"http://localhost:3010/api/patient/treatment",
				{},
				{
					withCredentials: true,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (response.status === 200) {
				setMyInfotreat(response.data);
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const GetMyInfocare = async () => {
		try {
			const response = await axios.post(
				"http://localhost:3010/api/patient/care",
				{},
				{
					withCredentials: true,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (response.status === 200) {
				setMyInfocare(response.data);
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const GetMyInfomed = async () => {
		try {
			const response = await axios.post(
				"http://localhost:3010/api/patient/medication",
				{},
				{
					withCredentials: true,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (response.status === 200) {
				setMyInfomed(response.data);
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const GetMyInfobill = async () => {
		try {
			const response = await axios.post(
				"http://localhost:3010/api/patient/bill",
				{},
				{
					withCredentials: true,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (response.status === 200) {
				setMyInfobill(response.data);
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
	};

	

	useEffect(() => {
		GetMyInfo();
		GetMyInfoass();
		GetMyInfoexam();
		GetMyInfotreat();
		GetMyInfocare();
		GetMyInfomed();
		GetMyInfobill();
	}, []);

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
								{myinfo.map((patient, index) => (
									<tr key={index}>
										<td>{patient.patient_id}</td>
										<td>{patient.patient_name}</td>
										<td>{patient.patient_age}</td>
										<td>{patient.patient_gender}</td>
										<td>{patient.patient_phone_number}</td>
										<td>{patient["patient_height(m)"]}</td>
										<td>{patient["patient_weight(kg)"]}</td>
									</tr>
								))}
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
								{myinfoass.map((patient, index) => (
									<tr key={index}>
										<td>{patient.room}</td>
										<td>{patient.deparment}</td>
										<td>{patient.purpose}</td>
									</tr>
								))}
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
								{myinfoexam.map((patient, index) => (
									<tr key={index}>
										<td>{patient.doctor_id}</td>
										<td>{patient.doctor_name}</td>
										<td>{patient.diagnosis}</td>
										<td>{patient.examination_date}</td>
										<td>{patient.next_examination}</td>
									</tr>
								))}
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
								{myinfotreat.map((patient, index) => (
									<tr key={index}>
										<td>{patient.doctor_id}</td>
										<td>{patient.doctor_name}</td>
										<td>{patient.admission_date}</td>
										<td>{patient.discharge_date}</td>
										<td>{patient.result}</td>
									</tr>
								))}
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
								{myinfocare.map((patient, index) => (
									<tr key={index}>
										<td>{patient.nurse_id}</td>
										<td>{patient.nurse_name}</td>
									</tr>
								))}
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
								<th>Price(VND)</th>
								<th>Effect</th>
								<th>Expired Date</th>
							</tr>
								{myinfomed.map((patient, index) => (
									<tr key={index}>
										<td>{patient.medication_id}</td>
										<td>{patient.medication_name}</td>
										<td>{patient['Price(VND)']}</td>
										<td>{patient.effect}</td>
										<td>{patient.expired_date}</td>
									</tr>
								))}
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
								{myinfobill.map((patient, index) => (
									<tr key={index}>
										<td>{patient.bill_id}</td>
										<td>{patient.date}</td>
										<td>{patient['Total_price(VND)']}</td>
									</tr>
								))}
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
