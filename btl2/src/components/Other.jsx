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

function Other() {
	const token = localStorage.getItem("userCredentials")
		? JSON.parse(localStorage.getItem("userCredentials")).token
		: null;

	const [myinfo, setMyInfo] = useState([]);
	const [myinfoass, setMyInfoass] = useState([]);

	

	const GetMyInfo = async () => {
		try {
			const response = await axios.post(
				"http://localhost:3010/api/other/info",
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
				"http://localhost:3010/api/other/workplace",
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

	useEffect(() => {
		GetMyInfo();
		GetMyInfoWork();
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
				<div className="title"> &nbsp;&nbsp;Other Employee Dashboard</div>
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

export default Other;
