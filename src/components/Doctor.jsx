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
	FaRegIdBadge,
	FaRegHospital,
	FaAccusoft,
	Fa500Px,
} from "react-icons/fa";

function Doctor() {
	const token = localStorage.getItem("userCredentials")
		? JSON.parse(localStorage.getItem("userCredentials")).token
		: null;
	const [myinfo, setMyInfo] = useState([]);
	const [myinfoass, setMyInfoass] = useState([]);
	const [myinfoexam, setMyInfoexam] = useState([]);
	const [myinfotreat, setMyInfotreat] = useState([]);
	const [myinfospec, setMyInfospecialty] = useState([]);
	

	const GetMyInfo = async () => {
		try {
			const response = await axios.post(
				"http://localhost:3010/api/doctor/info",
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

	const GetMyInfoWork = async () => {
		try {
			const response = await axios.post(
				"http://localhost:3010/api/doctor/workplace",
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
				"http://localhost:3010/api/doctor/examination",
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
				"http://localhost:3010/api/doctor/treatment",
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

	const GetMyInfospecialty = async () => {
		try {
			const response = await axios.post(
				"http://localhost:3010/api/doctor/specialty",
				{},
				{
					withCredentials: true,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (response.status === 200) {
				setMyInfospecialty(response.data);
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
	};


	useEffect(() => {
		GetMyInfo();
		GetMyInfoWork();
		GetMyInfoexam();
		GetMyInfotreat();
		GetMyInfospecialty();
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
				<div className="title">Doctor Dashboard</div>
				<button className="back-button" onClick={goBack}>
					← Sign out
				</button>
			</div>
			<div className="sidebar">
				<ul>
					<li onClick={() => setActiveSection("myInfo")}> My Information</li>
					<li onClick={() => setActiveSection("workingPlace")}>
						My Working Place
					</li>
					<li onClick={() => setActiveSection("examination")}>Examination</li>
					<li onClick={() => setActiveSection("treatment")}>Treatment</li>
					<li onClick={() => setActiveSection("specialty")}>Specialty</li>
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
									<th>Fixed Salary</th>
									<th>Bonus Salary</th>
									<th>Phone Number</th>
									<th>Experience year</th>
									<th>Working hour</th>
								</tr>
							</thead>
							<tbody>
								{myinfo.map((doctor, index) => (
										<tr key={index}>
											<td>{doctor.employee_id}</td>
											<td>{doctor.name}</td>
											<td>{doctor.age}</td>
											<td>{doctor.gender}</td>
											<td>{doctor['Fixed_Salary(VND)']}</td>
											<td>{doctor['Bonus(VND)']}</td>
											<td>{doctor.phone_number}</td>
											<td>{doctor.experience_year}</td>
											<td>{doctor.working_hour}</td>
										</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
				{activeSection === "workingPlace" && (
					<div className="container">
						<h2>
							<FaRegHospital /> My Working Place
						</h2>
						{/* <input
							type="text"
							placeholder="Search Patient Info..."
							value={search}
							onChange={handleSearch}
							className="search-bar"
						/> */}
						<table>
							<thead>
								<tr>
									<th>Department</th>
								</tr>
							</thead>
							<tbody>
								{myinfoass.map((doctor, index) => (
										<tr key={index}>
											<td>{doctor.department}</td>
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
									<th>Outpatient ID</th>
									<th>Patient name</th>
									<th>Dependent name</th>
									<th>Dependent Phone Number</th>
									<th>Diagnosis</th>
									<th>Examination Date</th>
									<th>Next Examination Date</th>
									<th>Fee</th>
								</tr>
							</thead>
							<tbody>
								{myinfoexam.map((doctor, index) => (
										<tr key={index}>
											<td>{doctor.patient_id}</td>
											<td>{doctor.patient_name}</td>
											<td>{doctor.dependent_name}</td>
											<td>{doctor.dependent_phone_number}</td>
											<td>{doctor.diagnosis}</td>
											<td>{doctor.examnination_date}</td>
											<td>{doctor.next_examnination}</td>
											<td>{doctor['Fee(VND)']}</td>
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
								<th>Inpatient ID</th>
								<th>Inpatient Name</th>
								<th>Dependent Name</th>
								<th>Dependent Phone Number</th>
								<th>Admission Date</th>
								<th>Discharge Date</th>
								<th>Result</th>
							</tr>
								{myinfotreat.map((doctor, index) => (
										<tr key={index}>
											<td>{doctor.patient_id}</td>
											<td>{doctor.patient_name}</td>
											<td>{doctor.dependent_name}</td>
											<td>{doctor.dependent_phone_number}</td>
											<td>{doctor.admission_date}</td>
											<td>{doctor.discharge_date}</td>
											<td>{doctor.result}</td>
										</tr>
								))}
						</table>
					</div>
				)}

				{activeSection === "specialty" && (
					<div class="container">
						<h2>
							<FaAccusoft /> Specialty
						</h2>
						<table>
							<tr>
								<th>My speciaty(ies)</th>
							</tr>
								{myinfospec.map((doctor, index) => (
										<tr key={index}>
											<td>{doctor.specialty}</td>
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

export default Doctor;
