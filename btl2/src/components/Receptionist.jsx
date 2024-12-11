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
	Fa500Px,
	FaUserNurse,
} from "react-icons/fa";
import "./Dependent.css";

function Receptionist() {
	const goBack = () => {
		window.history.back();
	};

	const [activeSection, setActiveSection] = useState("myInfo");
	const [newRecord, setNewRecord] = useState({
		id: "",
		name: "",
		age: "",
		gender: "",
		phone: "",
		height: "",
		weight: "",
		dependentName: "",
		dependentPhone: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewRecord((prevRecord) => ({
			...prevRecord,
			[name]: value,
		}));
	};

	const handleAddRecord = (e) => {
		e.preventDefault();
		//! XỬ LÍ LOGIC DATABASE TRONG ĐÂY
		console.log("New record added:", newRecord);
		setNewRecord({
			id: "",
			name: "",
			age: "",
			gender: "",
			phone: "",
			height: "",
			weight: "",
			dependentName: "",
			dependentPhone: "",
		});
	};
	//////////////////////////////////////////
	const [newRoomRecord, setNewRoomRecord] = useState({
		room: "",
		department: "",
		purpose: "",
	});

	const handleRoomInputChange = (e) => {
		const { name, value } = e.target;
		setNewRoomRecord((prevRecord) => ({
			...prevRecord,
			[name]: value,
		}));
	};

	const handleRoomAddRecord = (e) => {
		e.preventDefault();
		//! XỬ LÍ LOGIC DATABASE TRONG ĐÂY
		console.log("New record added:", newRoomRecord);
		setNewRoomRecord({
			room: "",
			department: "",
			purpose: "",
		});
	};
	//////////////////////////////////////////
	const [newExamRecord, setNewExamRecord] = useState({
		doctorid: "",
		doctorname: "",
		diagnosis: "",
		examdate: "",
		nextdate: "",
		fee: "",
	});

	const handleExamInputChange = (e) => {
		const { name, value } = e.target;
		setNewExamRecord((prevRecord) => ({
			...prevRecord,
			[name]: value,
		}));
	};

	const handleExamAddRecord = (e) => {
		e.preventDefault();
		//! XỬ LÍ LOGIC DATABASE TRONG ĐÂY
		console.log("New record added:", newExamRecord);
		setNewExamRecord({
			doctorid: "",
			doctorname: "",
			diagnosis: "",
			examdate: "",
			nextdate: "",
			fee: "",
		});
	};
	///////////////////////////////////////////////////Dependent.css
	const [newTreatRecord, setNewTreatRecord] = useState({
		doctorid: "",
		doctorname: "",
		admissiondate: "",
		dischargedate: "",
		result: "",
	});

	const handleTreatInputChange = (e) => {
		const { name, value } = e.target;
		setNewTreatRecord((prevRecord) => ({
			...prevRecord,
			[name]: value,
		}));
	};

	const handleTreatAddRecord = (e) => {
		e.preventDefault();
		//! XỬ LÍ LOGIC DATABASE TRONG ĐÂY
		console.log("New record added:", newTreatRecord);
		setNewTreatRecord({
			doctorid: "",
			doctorname: "",
			admissiondate: "",
			dischargedate: "",
			result: "",
		});
	};
	///////////////////////////////////////////////////////
	const [newCareRecord, setNewCareRecord] = useState({
		nurseid: "",
		nursename: "",
	});

	const handleCareInputChange = (e) => {
		const { name, value } = e.target;
		setNewCareRecord((prevRecord) => ({
			...prevRecord,
			[name]: value,
		}));
	};

	const handleCareAddRecord = (e) => {
		e.preventDefault();
		//! XỬ LÍ LOGIC DATABASE TRONG ĐÂY
		console.log("New record added:", newCareRecord);
		setNewCareRecord({
			nurseid: "",
			nursename: "",
		});
	};
	/////////////////////////////////////////////////////////
	const [newMedRecord, setNewMedRecord] = useState({
		medid: "",
		medname: "",
		price: "",
		effect: "",
		date: "",
	});

	const handleMedInputChange = (e) => {
		const { name, value } = e.target;
		setNewMedRecord((prevRecord) => ({
			...prevRecord,
			[name]: value,
		}));
	};

	const handleMedAddRecord = (e) => {
		e.preventDefault();
		//! XỬ LÍ LOGIC DATABASE TRONG ĐÂY
		console.log("New record added:", newMedRecord);
		setNewMedRecord({
			medid: "",
			medname: "",
			price: "",
			effect: "",
			date: "",
		});
	};
	//////////////////////////////////////////////////////////
	const [newBillRecord, setNewBillRecord] = useState({
		billid: "",
		billname: "",
		price: "",
	});

	const handleBillInputChange = (e) => {
		const { name, value } = e.target;
		setNewBillRecord((prevRecord) => ({
			...prevRecord,
			[name]: value,
		}));
	};

	const handleBillAddRecord = (e) => {
		e.preventDefault();
		//! XỬ LÍ LOGIC DATABASE TRONG ĐÂY
		console.log("New record added:", newBillRecord);
		setNewBillRecord({
			billid: "",
			billname: "",
			price: "",
		});
	};
	///////////////////////////////////////////////////////////
	const [newWorkRecord, setNewWorkRecord] = useState({
		work: "",
	});

	const handleWorkInputChange = (e) => {
		const { name, value } = e.target;
		setNewWorkRecord((prevRecord) => ({
			...prevRecord,
			[name]: value,
		}));
	};

	const handleWorkAddRecord = (e) => {
		e.preventDefault();
		//! XỬ LÍ LOGIC DATABASE TRONG ĐÂY
		console.log("New record added:", newWorkRecord);
		setNewWorkRecord({
			work: "",
		});
	};
	//////////////////////////////////////////////////////////////
	const [newSpecialRecord, setNewSpecialRecord] = useState({
		special: "",
	});

	const handleSpecialInputChange = (e) => {
		const { name, value } = e.target;
		setNewSpecialRecord((prevRecord) => ({
			...prevRecord,
			[name]: value,
		}));
	};

	const handleSpecialAddRecord = (e) => {
		e.preventDefault();
		//! XỬ LÍ LOGIC DATABASE TRONG ĐÂY
		console.log("New record added:", newSpecialRecord);
		setNewSpecialRecord({
			special: "",
		});
	};
	return (
		<div className="bigone">
			<div className="top-bar">
				<div className="title"> &nbsp;&nbsp;Receptionist Dashboard</div>
				<button className="back-button" onClick={goBack}>
					← Sign out
				</button>
			</div>
			<div className="sidebar">
				<ul>
					<li onClick={() => setActiveSection("myInfo")}>
						{" "}
						Patient Information
					</li>
					<li onClick={() => setActiveSection("assignment")}>
						Room Assignment
					</li>
					<li onClick={() => setActiveSection("examination")}>Examination</li>
					<li onClick={() => setActiveSection("treatment")}>Treatment</li>
					<li onClick={() => setActiveSection("careTaking")}>Care Taking</li>
					<li onClick={() => setActiveSection("medication")}>Medication</li>
					<li onClick={() => setActiveSection("bill")}>Bill</li>
					<li onClick={() => setActiveSection("workingPlace")}>
						Working Place
					</li>
					<li onClick={() => setActiveSection("specialty")}>
						My Specialty(ies)
					</li>
				</ul>
			</div>

			<div className="content">
				{activeSection === "myInfo" && (
					<div className="container">
						<h2>
							<FaRegIdBadge /> Patient Information
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
						<br />
						<h3>Add New Record</h3>
						<form onSubmit={handleAddRecord}>
							<div>
								<label>My ID: </label>
								<input
									type="text"
									name="id"
									value={newRecord.id}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div>
								<label>Name: </label>
								<input
									type="text"
									name="name"
									value={newRecord.name}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div>
								<label>Age: </label>
								<input
									type="number"
									name="age"
									value={newRecord.age}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div>
								<label>Gender: </label>
								<input
									type="text"
									name="gender"
									value={newRecord.gender}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div>
								<label>Phone Number: </label>
								<input
									type="text"
									name="phone"
									value={newRecord.phone}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div>
								<label>Height (m): </label>
								<input
									type="number"
									step="0.01"
									name="height"
									value={newRecord.height}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div>
								<label>Weight (kg): </label>
								<input
									type="number"
									step="0.1"
									name="weight"
									value={newRecord.weight}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div>
								<label>Dependent Name: </label>
								<input
									type="text"
									name="dependentName"
									value={newRecord.dependentName}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div>
								<label>Dependent Phone Number: </label>
								<input
									type="text"
									name="dependentPhone"
									value={newRecord.dependentPhone}
									onChange={handleInputChange}
									required
								/>
							</div>
							<button type="submit">Add Record</button>
						</form>
						<br />
						<h3>Delete Record</h3>
						<form>
							<div className="form-group">
								<label>Enter Patient ID to Delete</label>
								<input
									type="text"
									placeholder="Enter ID to delete"
									className="input-delete"
								/>
							</div>
							<button type="button" className="delete-button">
								Delete Record
							</button>
						</form>
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
						<br />
						<h3>Add New Record</h3>
						<form onSubmit={handleRoomAddRecord}>
							<div>
								<label>Room: </label>
								<input
									type="text"
									name="room"
									value={newRoomRecord.room}
									onChange={handleRoomInputChange}
									required
								/>
							</div>
							<div>
								<label>Department: </label>
								<input
									type="text"
									name="department"
									value={newRoomRecord.department}
									onChange={handleRoomInputChange}
									required
								/>
							</div>
							<div>
								<label>Purpose: </label>
								<input
									type="text"
									name="purpose"
									value={newRoomRecord.purpose}
									onChange={handleRoomInputChange}
									required
								/>
							</div>
							<button type="submit">Add Record</button>
						</form>
						<br />
						<h3>Delete Record</h3>
						<form>
							<div className="form-group">
								<label>Enter Room and Department to Delete</label>
								<input
									type="text"
									placeholder="Enter Room to delete "
									className="input-delete"
								/>
								<input
									type="text"
									placeholder="Enter Department to delete"
									className="input-delete"
								/>
							</div>
							<button type="button" className="delete-button">
								Delete Record
							</button>
						</form>
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
						<br />
						<h3>Add New Record</h3>
						<form onSubmit={handleExamAddRecord}>
							<div>
								<label>Doctor ID: </label>
								<input
									type="text"
									name="doctorid"
									value={newExamRecord.doctorid}
									onChange={handleExamInputChange}
									required
								/>
							</div>
							<div>
								<label>Doctor Name: </label>
								<input
									type="text"
									name="doctorname"
									value={newExamRecord.doctorname}
									onChange={handleExamInputChange}
									required
								/>
							</div>
							<div>
								<label>Diagnosis: </label>
								<input
									type="text"
									name="examdate"
									value={newExamRecord.examdate}
									onChange={handleExamInputChange}
									required
								/>
							</div>
							<div>
								<label>Examination Date: </label>
								<input
									type="date"
									name="examdate"
									value={newExamRecord.examdate}
									onChange={handleExamInputChange}
									required
								/>
							</div>
							<div>
								<label>Next Examination Date: </label>
								<input
									type="date"
									name="nextdate"
									value={newExamRecord.nextdate}
									onChange={handleExamInputChange}
									required
								/>
							</div>
							<div>
								<label>Fee: </label>
								<input
									type="number"
									name="fee"
									value={newExamRecord.fee}
									onChange={handleExamInputChange}
									required
								/>
							</div>
							<button type="submit">Add Record</button>
						</form>
						<br />
						<h3>Delete Record</h3>
						<form>
							<div className="form-group">
								<label>Enter Doctor ID to Delete</label>
								<input
									type="text"
									placeholder="Enter Doctor ID to delete"
									className="input-delete"
								/>
							</div>
							<button type="button" className="delete-button">
								Delete Record
							</button>
						</form>
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
						<br />
						<h3>Add New Record</h3>
						<form onSubmit={handleTreatAddRecord}>
							<div>
								<label>Doctor ID: </label>
								<input
									type="text"
									name="doctorid"
									value={newTreatRecord.doctorid}
									onChange={handleTreatInputChange}
									required
								/>
							</div>
							<div>
								<label>Doctor Name: </label>
								<input
									type="text"
									name="doctorname"
									value={newTreatRecord.doctorname}
									onChange={handleTreatInputChange}
									required
								/>
							</div>
							<div>
								<label>Admission Date: </label>
								<input
									type="date"
									name="admissiondate"
									value={newTreatRecord.admissiondate}
									onChange={handleTreatInputChange}
									required
								/>
							</div>
							<div>
								<label>Discharge Date: </label>
								<input
									type="date"
									name="dischargedate"
									value={newExamRecord.dischargedate}
									onChange={handleTreatInputChange}
									required
								/>
							</div>
							<div>
								<label>Result: </label>
								<input
									type="text"
									name="result"
									value={newTreatRecord.result}
									onChange={handleTreatInputChange}
									required
								/>
							</div>
							<button type="submit">Add Record</button>
						</form>
						<br />
						<h3>Delete Record</h3>
						<form>
							<div className="form-group">
								<label>Enter Doctor ID to Delete</label>
								<input
									type="text"
									placeholder="Enter Doctor ID to delete"
									className="input-delete"
								/>
							</div>
							<button type="button" className="delete-button">
								Delete Record
							</button>
						</form>
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
						<br />
						<h3>Add New Record</h3>
						<form onSubmit={handleCareAddRecord}>
							<div>
								<label>Nurse ID: </label>
								<input
									type="text"
									name="nurseid"
									value={newCareRecord.nurseid}
									onChange={handleCareInputChange}
									required
								/>
							</div>
							<div>
								<label>Nurse Name: </label>
								<input
									type="text"
									name="nursename"
									value={newCareRecord.nursename}
									onChange={handleCareInputChange}
									required
								/>
							</div>
							<button type="submit">Add Record</button>
						</form>
						<br />
						<h3>Delete Record</h3>
						<form>
							<div className="form-group">
								<label>Enter Nurse ID to Delete</label>
								<input
									type="text"
									placeholder="Enter Nurse ID to delete"
									className="input-delete"
								/>
							</div>
							<button type="button" className="delete-button">
								Delete Record
							</button>
						</form>
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
						<br />
						<h3>Add New Record</h3>
						<form onSubmit={handleMedAddRecord}>
							<div>
								<label>Medication ID: </label>
								<input
									type="text"
									name="medid"
									value={newMedRecord.medid}
									onChange={handleMedInputChange}
									required
								/>
							</div>
							<div>
								<label>Medication Name: </label>
								<input
									type="text"
									name="medname"
									value={newMedRecord.medname}
									onChange={handleMedInputChange}
									required
								/>
							</div>
							<div>
								<label>Price: </label>
								<input
									type="number"
									name="price"
									value={newMedRecord.price}
									onChange={handleMedInputChange}
									required
								/>
							</div>
							<div>
								<label>Effect: </label>
								<input
									type="text"
									name="effect"
									value={newMedRecord.effect}
									onChange={handleMedInputChange}
									required
								/>
							</div>
							<div>
								<label>Expired Date: </label>
								<input
									type="date"
									name="date"
									value={newMedRecord.date}
									onChange={handleMedInputChange}
									required
								/>
							</div>
							<button type="submit">Add Record</button>
						</form>
						<br />
						<h3>Delete Record</h3>
						<form>
							<div className="form-group">
								<label>Enter Medication ID to Delete</label>
								<input
									type="text"
									placeholder="Enter Medication ID to delete "
									className="input-delete"
								/>
							</div>
							<button type="button" className="delete-button">
								Delete Record
							</button>
						</form>
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
						<br />
						<h3>Add New Record</h3>
						<form onSubmit={handleBillAddRecord}>
							<div>
								<label>Bill ID: </label>
								<input
									type="text"
									name="billid"
									value={newBillRecord.billid}
									onChange={handleBillInputChange}
									required
								/>
							</div>
							<div>
								<label>Bill Name: </label>
								<input
									type="text"
									name="billname"
									value={newBillRecord.billname}
									onChange={handleBillInputChange}
									required
								/>
							</div>
							<div>
								<label>Price: </label>
								<input
									type="number"
									name="price"
									value={newBillRecord.price}
									onChange={handleBillInputChange}
									required
								/>
							</div>

							<button type="submit">Add Record</button>
						</form>
						<br />
						<h3>Delete Record</h3>
						<form>
							<div className="form-group">
								<label>Enter Bill ID to Delete</label>
								<input
									type="text"
									placeholder="Enter Bill ID to delete "
									className="input-delete"
								/>
							</div>
							<button type="button" className="delete-button">
								Delete Record
							</button>
						</form>
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
								<tr>
									<td>DO0001</td>
								</tr>
							</tbody>
						</table>
						<br />
						<h3>Add New Record</h3>
						<form onSubmit={handleWorkAddRecord}>
							<div>
								<label>Department: </label>
								<input
									type="text"
									name="work"
									value={newWorkRecord.work}
									onChange={handleWorkInputChange}
									required
								/>
							</div>

							<button type="submit">Add Record</button>
						</form>
						<br />
						<h3>Delete Record</h3>
						<form>
							<div className="form-group">
								<label>Enter Department to Delete</label>
								<input
									type="text"
									placeholder="Enter Department to delete "
									className="input-delete"
								/>
							</div>
							<button type="button" className="delete-button">
								Delete Record
							</button>
						</form>
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
							<tr>
								<td>B001</td>
							</tr>
						</table>
						<br />
						<h3>Add New Record</h3>
						<form onSubmit={handleSpecialAddRecord}>
							<div>
								<label>Specialty: </label>
								<input
									type="text"
									name="special"
									value={newSpecialRecord.special}
									onChange={handleSpecialInputChange}
									required
								/>
							</div>

							<button type="submit">Add Record</button>
						</form>
						<br />
						<h3>Delete Record</h3>
						<form>
							<div className="form-group">
								<label>Enter Specialty to Delete</label>
								<input
									type="text"
									placeholder="Enter Specialty to delete "
									className="input-delete"
								/>
							</div>
							<button type="button" className="delete-button">
								Delete Record
							</button>
						</form>
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

export default Receptionist;
