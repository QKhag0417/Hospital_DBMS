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
	const [errorMessage, setErrorMessage] = useState("");
	const [patient, setPatient] = useState([]);
	const [assignment, setAssignment] = useState([]);
	const [exam, setexam] = useState([]);
	const [treat, settreat] = useState([]);
	const [care, setcare] = useState([]);
	const [med, setmed] = useState([]);
	const [bill, setbill] = useState([]);
	const [work, setwork] = useState([]);
	const [specialty, setspec] = useState([]);

    const fetchPatient = async () => {
		try {
			const response = await axios.get('http://localhost:3010/api/recep/patient');

			if (response.status === 200) {
				setPatient(response.data);
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
	
    };

	const fetchAssignment = async () => {
		try {
			const response = await axios.get('http://localhost:3010/api/recep/ass');

			if (response.status === 200) {
				setAssignment(response.data);
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };

	const fetchExamination = async () => {
		try {
			const response = await axios.get('http://localhost:3010/api/recep/exam');

			if (response.status === 200) {
				setexam(response.data);
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };

	const fetchTreatment = async () => {
		try {
			const response = await axios.get('http://localhost:3010/api/recep/treat');

			if (response.status === 200) {
				settreat(response.data);
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };

	const fetchCare = async () => {
		try {
			const response = await axios.get('http://localhost:3010/api/recep/care');

			if (response.status === 200) {
				setcare(response.data);
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };

	const fetchMedication = async () => {
		try {
			const response = await axios.get('http://localhost:3010/api/recep/med');

			if (response.status === 200) {
				setmed(response.data);
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };

	const fetchBill = async () => {
		try {
			const response = await axios.get('http://localhost:3010/api/recep/bill');

			if (response.status === 200) {
				setbill(response.data);
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };

	const fetchwork = async () => {
		try {
			const response = await axios.get('http://localhost:3010/api/recep/work');

			if (response.status === 200) {
				setwork(response.data);
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };

	const fetchspecialty = async () => {
		try {
			const response = await axios.get('http://localhost:3010/api/recep/specialty');

			if (response.status === 200) {
				setspec(response.data);
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };

	useEffect(() => {
		fetchPatient();
		fetchAssignment();
		fetchExamination();
		fetchTreatment();
		fetchCare();
		fetchMedication();
		fetchBill();
		fetchwork();
		fetchspecialty();
	}, []);	

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
			id: newRecord.id,
			name: newRecord.name,
			age: newRecord.age,
			gender: newRecord.gender,
			phone: newRecord.phone,
			height: newRecord.height,
			weight: newRecord.weight,
		});
		addPatient(newRecord)
	};
	//////////////////////////////////////////
	const [newRoomRecord, setNewRoomRecord] = useState({
		id: "",
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
			id: newRoomRecord.id,
			room: newRoomRecord.room,
			department: newRoomRecord.department,
			purpose: newRoomRecord.purpose,
		});
		addRoom(newRoomRecord)
	};
	//////////////////////////////////////////
	const [newExamRecord, setNewExamRecord] = useState({
		patientid: "",
		doctorid: "",
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
			patientid: newExamRecord.patientid,
			doctorid: newExamRecord.doctorid,
			diagnosis: newExamRecord.diagnosis,
			examdate: newExamRecord.examdate,
			nextdate: newExamRecord.nextdate,
			fee: newExamRecord.fee,
		});
		addExam(newExamRecord)
	};
	///////////////////////////////////////////////////Dependent.css
	const [newTreatRecord, setNewTreatRecord] = useState({
		patientid: "",
		doctorid: "",
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
			patientid: newTreatRecord.patientid,
			doctorid: newTreatRecord.doctorid,
			admissiondate: newTreatRecord.admissiondate,
			dischargedate: newTreatRecord.dischargedate,
			result: newTreatRecord.result,
		});
		addTreatment(newTreatRecord)
	};
	///////////////////////////////////////////////////////
	const [newCareRecord, setNewCareRecord] = useState({
		patientid: "",
		nurseid: "",
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
			patientid: newCareRecord.patientid,
			nurseid: newCareRecord.nurseid,
		});
		addCare(newCareRecord)
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
			medid: newMedRecord.medid,
			medname: newMedRecord.medname,
			price: newMedRecord.price,
			effect: newMedRecord.effect,
			date: newMedRecord.date,
		});
		addMed(newMedRecord)
	};
	//////////////////////////////////////////////////////////
	const [newBillRecord, setNewBillRecord] = useState({
		billid: "",
		price: "",
		date: "",
		patientid: "",
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
			billid: newBillRecord.billid,
			billname: newBillRecord.billname,
			price: newBillRecord.price,
			patientid: newBillRecord.patientid,
		});
		addBill(newBillRecord)
	};
	///////////////////////////////////////////////////////////
	const [newWorkRecord, setNewWorkRecord] = useState({
		id: "",
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
			id: newWorkRecord.id,
			work: newWorkRecord.work,
		});
		addWork(newWorkRecord)
	};
	//////////////////////////////////////////////////////////////
	const [newSpecialRecord, setNewSpecialRecord] = useState({
		id: "",
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
			id: newSpecialRecord.id,
			special: newSpecialRecord.special,
		});
		addSpec(newSpecialRecord)
	};

	///////////////////////////////////////////////////////////////
	const [patientId, setdeletedPatientId] = useState(""); // Trạng thái lưu ID nhập vào

	const handleDeleteRecord = () => {
		if (!patientId) {
			alert("Please enter a Patient ID.");
			return;
		}
		
		dPatient(patientId)

		console.log("Attempting to delete record with ID:", patientId);
		//! XỬ LÝ LOGIC XÓA RECORD TRONG DATABASE
	};
	///////////////////////////////////////////////////////////////
	const [room, setRoom] = useState(""); // Trạng thái lưu Room
	const [department, setDepartment] = useState(""); // Trạng thái lưu Department

	const handleDeleteRoomDepartment = () => {
		if (!room || !department) {
			alert("Please enter both Room and Department to proceed.");
			return;
		}
		
		console.log(
			"Attempting to delete record with Room:",
			room,
			"and Department:",
			department
		);
		const deleteData = {
			room,
			department,
		};
		dRoom(deleteData)

		//! XỬ LÝ LOGIC XÓA RECORD TRONG DATABASE
	};
	////////////////////////////////////////////////////////////////
	const [examdoctorId, setexamDoctorId] = useState(""); // Trạng thái lưu Doctor ID được nhập
	const [exampatientId, setexamPatientId] = useState("");
	const handleDeleteExamRecord = () => {
		if (!examdoctorId ||!exampatientId ) {
			alert("Please enter a Doctor ID.");
			return;
		}

		console.log("Attempting to delete doctor record with ID:", examdoctorId);
		const deleteData = {
			examdoctorId,
			exampatientId,
		};
		dExam(deleteData)
	};
	///////////////////////////////////////////////////////////////
	const [treatdoctorId, settreatDoctorId] = useState(""); // Trạng thái lưu Doctor ID được nhập
	const [treatpatientId, settreatPatientId] = useState("");
	const handleDeleteDoctorRecord = () => {
		if (!treatdoctorId ||!treatpatientId ) {
			alert("Please enter a Doctor ID.");
			return;
		}

		console.log("Attempting to delete doctor record with ID:", treatdoctorId);
		const deleteData = {
			treatdoctorId,
			treatpatientId,
		};
		dTreatment(deleteData)
	};
	////////////////////////////////////////////////////////////////
	const [nurseId, setNurseId] = useState(""); // Trạng thái lưu Nurse ID
	const [carepatientId, setcarePatientId] = useState("");
	const handleDeleteNurse = () => {
		if (!nurseId) {
			alert("Please enter a valid Nurse ID to proceed.");
			return;
		}

		console.log("Attempting to delete record with Nurse ID:", nurseId);
		const deleteData = {
			nurseId,
			carepatientId,
		};
		dCare(deleteData)
		//! XỬ LÝ LOGIC XÓA RECORD TRONG DATABASE
	};
	///////////////////////////////////////////////////////////////
	const [medicationId, setMedicationId] = useState(""); // Trạng thái lưu Medication ID

	const handleDeleteMedication = () => {
		if (!medicationId) {
			alert("Please enter a valid Medication ID to proceed.");
			return;
		}

		console.log(
			"Attempting to delete record with Medication ID:",
			medicationId
		);
		dMed(medicationId)

		//! XỬ LÝ LOGIC XÓA RECORD TRONG DATABASE
	};
	//////////////////////////////////////////////////////////////
	const [billId, setBillId] = useState(""); // Trạng thái lưu Bill ID

	const handleDeleteBill = () => {
		if (!billId) {
			alert("Please enter a valid Bill ID to proceed.");
			return;
		}

		console.log("Attempting to delete record with Bill ID:", billId);
		dBill(billId)
		//! XỬ LÝ LOGIC XÓA RECORD TRONG DATABASE
	};
	///////////////////////////////////////////////////////////////
	const [deleteworkdoctor, setdeleteworkdoctor] = useState(""); // Trạng thái lưu Specialty
	const [deleteworkdepartment, setdeleteworkdepartment] = useState("");
	const handleDeleteWork = () => {
		if (!deleteworkdoctor) {
			alert("Please enter a valid Specialty to proceed.");
			return;
		}

		console.log("Attempting to delete record with Specialty:", deleteworkdoctor,deleteworkdepartment);
		const deleteData = {
			deleteworkdoctor,
			deleteworkdepartment,
		};
		dWork(deleteData)
		//! XỬ LÝ LOGIC XÓA RECORD TRONG DATABASE
	};
	////////////////////////////////////////////////////////////
	const [deletespecialty, setdeletedSpecialty] = useState(""); // Trạng thái lưu Specialty
	const [specdoctorid, setspecdoctorid] = useState("");
	const handleDeleteSpecialty = () => {
		if (!deletespecialty) {
			alert("Please enter a valid Specialty to proceed.");
			return;
		}

		console.log("Attempting to delete record with Specialty:", deletespecialty,specdoctorid);
		const deleteData = {
			deletespecialty,
			specdoctorid,
		};
		dSpec(deleteData)
		//! XỬ LÝ LOGIC XÓA RECORD TRONG DATABASE
	};

///////////////////////////////////////////////////////////////////////////////////////////////////

	const addPatient = async (newOne) => {
		try {
			const response = await axios.post('http://localhost:3010/api/recep/addpatient', newOne);

			if (response.status === 201) {
				console.log('thêm thành công:');
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
			if (error.response && error.response.status === 500) {
				setErrorMessage("Không hợp lệ");
			}
			
		}
    };
	const addRoom = async (newOne) => {
		try {
			const response = await axios.post('http://localhost:3010/api/recep/addass', newOne);

			if (response.status === 201) {
				console.log('thêm thành công:');
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };
	const addExam = async (newOne) => {
		try {
			const response = await axios.post('http://localhost:3010/api/recep/addexam', newOne);

			if (response.status === 201) {
				console.log('thêm thành công:');
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };
	const addTreatment = async (newOne) => {
		try {
			const response = await axios.post('http://localhost:3010/api/recep/addtreat', newOne);

			if (response.status === 201) {
				console.log('thêm thành công:');
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };
	const addCare = async (newOne) => {
		try {
			const response = await axios.post('http://localhost:3010/api/recep/addcare', newOne);

			if (response.status === 201) {
				console.log('thêm thành công:');
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };
	const addMed = async (newOne) => {
		try {
			const response = await axios.post('http://localhost:3010/api/recep/addmed', newOne);

			if (response.status === 201) {
				console.log('thêm thành công:');
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };
	const addBill = async (newOne) => {
		try {
			const response = await axios.post('http://localhost:3010/api/recep/addbill', newOne);

			if (response.status === 201) {
				console.log('thêm thành công:');
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };
	const addWork = async (newOne) => {
		try {
			const response = await axios.post('http://localhost:3010/api/recep/addwork', newOne);

			if (response.status === 201) {
				console.log('thêm thành công:');
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };
	const addSpec = async (newOne) => {
		try {
			const response = await axios.post('http://localhost:3010/api/recep/addspecialty', newOne);

			if (response.status === 201) {
				console.log('thêm thành công:');
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };
///////////////////////////////////////////////////////////////////////////////////////////////////
	
	const dPatient = async (newOne) => {
		try {
			const dataToSend = { patient_id: newOne };
			const response = await axios.post('http://localhost:3010/api/recep/deletepatient', dataToSend);
			
			if (response.status === 201) {
				console.log('xoa thành công:');
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };
	const dRoom = async (newOne) => {
		try {
			const response = await axios.post('http://localhost:3010/api/recep/deleteass', newOne);

			if (response.status === 201) {
				console.log('xoa thành công:');
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };
	const dExam = async (newOne) => {
		try {
			const response = await axios.post('http://localhost:3010/api/recep/deleteexam', newOne);

			if (response.status === 201) {
				console.log('xoa thành công:');
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };
	const dTreatment = async (newOne) => {
		try {
			const response = await axios.post('http://localhost:3010/api/recep/deletetreat', newOne);

			if (response.status === 201) {
				console.log('xoa thành công:');
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };
	const dCare = async (newOne) => {
		try {
			const response = await axios.post('http://localhost:3010/api/recep/deletecare', newOne);

			if (response.status === 201) {
				console.log('xoa thành công:');
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };
	const dMed = async (newOne) => {
		try {
			const dataToSend = { med_id: newOne };
			const response = await axios.post('http://localhost:3010/api/recep/deletemed', dataToSend);

			if (response.status === 201) {
				console.log('xoa thành công:');
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };
	const dBill = async (newOne) => {
		try {
			const dataToSend = { bill_id: newOne };
			const response = await axios.post('http://localhost:3010/api/recep/deletebill', dataToSend);

			if (response.status === 201) {
				console.log('xoa thành công:');
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };
	const dWork = async (newOne) => {
		try {
			const response = await axios.post('http://localhost:3010/api/recep/deletework', newOne);

			if (response.status === 201) {
				console.log('xoa thành công:');
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };
	const dSpec = async (newOne) => {
		try {
			const response = await axios.post('http://localhost:3010/api/recep/deletespecialty', newOne);
			
			if (response.status === 201) {
				console.log('xoa thành công:');
			} else if (response.status === 404) {
				window.location.assign("/");
			}
		} catch (error) {
			console.log(error);
		}
    };
///////////////////////////////////////////////////////////////////////////////////////////////////

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
								</tr>
							</thead>
							<tbody>
								{patient.map((me, index) => (
									<tr key={index}>
										<td>{me.patient_id}</td>
										<td>{`${me.fname || ""} ${me.mname || ""} ${
										me.lname}`}</td>
										<td>{me.age}</td>
										<td>{me.gender}</td>
										<td>{me.phone_number}</td>
										<td>{me["Height(m)"]}</td>
										<td>{me["Weight(kg)"]}</td>
									</tr>
								))}
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
									value={patientId}
									onChange={(e) => setdeletedPatientId(e.target.value)}
								/>
							</div>
							<button
								type="button"
								className="delete-button"
								onClick={handleDeleteRecord}>
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
									<th>Patient ID</th>
									<th>Room number</th>
									<th>Department</th>
									<th>Purpose</th>
								</tr>
							</thead>
							<tbody>
								{assignment.map((me, index) => (
									<tr key={index}>
										<td>{me.patient_id}</td>
										<td>{me.departmentname}</td>
										<td>{me.roomnumber}</td>
										<td>{me.purpose}</td>
									</tr>
								))}
							</tbody>
						</table>
						<br />
						<h3>Add New Record</h3>
						<form onSubmit={handleRoomAddRecord}>
							<div>
								<label>Patient ID: </label>
								<input
									type="text"
									name="id"
									value={newRoomRecord.id}
									onChange={handleRoomInputChange}
									required
								/>
							</div>
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
									value={room}
									onChange={(e) => setRoom(e.target.value)}
								/>
								<input
									type="text"
									placeholder="Enter Department to delete"
									className="input-delete"
									value={department}
									onChange={(e) => setDepartment(e.target.value)}
								/>
							</div>
							<button
								type="button"
								className="delete-button"
								onClick={handleDeleteRoomDepartment}>
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
									<th>Patient ID</th>
									<th>Doctor ID</th>
									<th>Diagnosis</th>
									<th>Examination Date</th>
									<th>Next Examination Date</th>
									<th>Fee</th>
								</tr>
							</thead>
							<tbody>
								{exam.map((me, index) => (
									<tr key={index}>
										<td>{me.outpatient_id}</td>
										<td>{me.doctor_id}</td>
										<td>{me.diagnosis}</td>
										<td>{new Date(me.examination_date).toLocaleDateString()}</td>
										<td>{new Date(me.next_examination).toLocaleDateString()}</td>
										<td>{me['Fee(VND)']}</td>
									</tr>
								))}
							</tbody>
						</table>
						<br />
						<h3>Add New Record</h3>
						<form onSubmit={handleExamAddRecord}>
							<div>
								<label>Patient ID: </label>
								<input
									type="text"
									name="patientid"
									value={newExamRecord.patientid}
									onChange={handleExamInputChange}
									required
								/>
							</div>
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
									value={examdoctorId}
									onChange={(e) => setexamDoctorId(e.target.value)}
								/>
								<input
									type="text"
									placeholder="Enter Patient ID to delete"
									className="input-delete"
									value={exampatientId}
									onChange={(e) => setexamPatientId(e.target.value)}
								/>
							</div>
							
							<button
								type="button"
								className="delete-button"
								onClick={handleDeleteExamRecord}>
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
								<th>Patient ID</th>
								<th>Doctor ID</th>
								<th>Admission Date</th>
								<th>Discharge Date</th>
								<th>Result</th>
							</tr>
								{treat.map((me, index) => (
									<tr key={index}>
										<td>{me.inpatient_id}</td>
										<td>{me.doctor_id}</td>
										<td>{new Date(me.admission_date).toLocaleDateString()}</td>
										<td>{new Date(me.discharge_date).toLocaleDateString()}</td>
										<td>{me.result}</td>
									</tr>
								))}
						</table>
						<br />
						<h3>Add New Record</h3>
						<form onSubmit={handleTreatAddRecord}>
							<div>
								<label>Patient ID: </label>
								<input
									type="text"
									name="patientid"
									value={newTreatRecord.patientid}
									onChange={handleTreatInputChange}
									required
								/>
							</div>
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
									value={treatdoctorId}
									onChange={(e) => settreatDoctorId(e.target.value)}
								/>
								<input
									type="text"
									placeholder="Enter Patient ID to delete"
									className="input-delete"
									value={treatpatientId}
									onChange={(e) => settreatPatientId(e.target.value)}
								/>
							</div>
							
							<button
								type="button"
								className="delete-button"
								onClick={handleDeleteDoctorRecord}>
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
								<th>Patient ID</th>
								<th>Nurse ID</th>
							</tr>
								{care.map((me, index) => (
									<tr key={index}>
										<td>{me.inpatient_id}</td>
										<td>{me.nurse_id}</td>

									</tr>
								))}
						</table>
						<br />
						<h3>Add New Record</h3>
						<form onSubmit={handleCareAddRecord}>
							<div>
								<label>Patient ID: </label>
								<input
									type="text"
									name="patientid"
									value={newCareRecord.patientid}
									onChange={handleCareInputChange}
									required
								/>
							</div>
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
									value={nurseId}
									onChange={(e) => setNurseId(e.target.value)}
								/>
								<input
									type="text"
									placeholder="Enter Patient ID to delete"
									className="input-delete"
									value={carepatientId}
									onChange={(e) => setcarePatientId(e.target.value)}
								/>
							</div>
							<button
								type="button"
								className="delete-button"
								onClick={handleDeleteNurse}>
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
								{med.map((me, index) => (
									<tr key={index}>
										<td>{me.medication_id}</td>
										<td>{me.medication_name}</td>
										<td>{me['Price(VND)']}</td>
										<td>{me.effect}</td>
										<td>{new Date(me.expired_date).toLocaleDateString()}</td>
									</tr>
								))}
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
									value={medicationId}
									onChange={(e) => setMedicationId(e.target.value)}
								/>
							</div>
							<button
								type="button"
								className="delete-button"
								onClick={handleDeleteMedication}>
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
								<th>Total Price(VND)</th>
								<th>Date</th>
								<th>Customer ID</th>
							</tr>
								{bill.map((me, index) => (
									<tr key={index}>
										<td>{me.bill_id}</td>
										<td>{me['Total_price(VND)']}</td>
										<td>{new Date(me.date).toLocaleDateString()}</td>
										<td>{me.customer_id}</td>
									</tr>
								))}
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
								<label>Price: </label>
								<input
									type="number"
									name="price"
									value={newBillRecord.price}
									onChange={handleBillInputChange}
									required
								/>
							</div>
							<div>
								<label>Date: </label>
								<input
									type="date"
									name="date"
									value={newBillRecord.date}
									onChange={handleBillInputChange}
									required
								/>
							</div>
							<div>
								<label>Patient ID: </label>
								<input
									type="number"
									name="patientid"
									value={newBillRecord.patientid}
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
									value={billId}
									onChange={(e) => setBillId(e.target.value)}
								/>
							</div>
							<button
								type="button"
								className="delete-button"
								onClick={handleDeleteBill}>
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
									<th>Employee ID</th>
									<th>Department</th>
								</tr>
							</thead>
							<tbody>
								{work.map((me, index) => (
									<tr key={index}>
										<td>{me.employee_id}</td>
										<td>{me.departmentname}</td>

									</tr>
								))}
							</tbody>
						</table>
						<br />
						<h3>Add New Record</h3>
						<form onSubmit={handleWorkAddRecord}>
							<div>
								<label>Employee ID: </label>
								<input
									type="text"
									name="id"
									value={newWorkRecord.id}
									onChange={handleWorkInputChange}
									required
								/>
							</div>
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
							<label>Enter Employee ID to Delete</label>
								<input
									type="text"
									placeholder="Enter Employee ID to delete"
									className="input-delete"
									value={deleteworkdoctor}
									onChange={(e) => setdeleteworkdoctor(e.target.value)}
								/>
								<input
									type="text"
									placeholder="Enter Department to delete"
									className="input-delete"
									value={deleteworkdepartment}
									onChange={(e) => setdeleteworkdepartment(e.target.value)}
								/>
							</div>
							<button
								type="button"
								className="delete-button"
								onClick={handleDeleteWork}>
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
								<th>Doctor ID</th>
								<th>My speciaty(ies)</th>
							</tr>
								{specialty.map((me, index) => (
									<tr key={index}>
										<td>{me.doctor_id}</td>
										<td>{me.specialty}</td>

									</tr>
								))}
						</table>
						<br />
						<h3>Add New Record</h3>
						<form onSubmit={handleSpecialAddRecord}>
							<div>
								<label>Doctor ID: </label>
								<input
									type="text"
									name="id"
									value={newSpecialRecord.id}
									onChange={handleSpecialInputChange}
									required
								/>
							</div>
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
							<label>Enter Doctor ID to Delete</label>
								<input
									type="text"
									placeholder="Enter Doctor ID to delete"
									className="input-delete"
									value={specdoctorid}
									onChange={(e) => setspecdoctorid(e.target.value)}
								/>
								<input
									type="text"
									placeholder="Enter Specialty to delete"
									className="input-delete"
									value={deletespecialty}
									onChange={(e) => setdeletedSpecialty(e.target.value)}
								/>
							</div>
							<button
								type="button"
								className="delete-button"
								onClick={handleDeleteSpecialty}>
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
