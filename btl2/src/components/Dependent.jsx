import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import "./Dependent.css";

function Dependent() {
	const goBack = () => {
		window.history.back();
	};

	return (
		<div>
			<div className="top-bar">
				<div className="title">Dependent Dashboard</div>
				<button className="back-button" onClick={goBack}>
					← Sign out
				</button>
			</div>

			<div className="container">
				<h2>My Patient Information</h2>
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

			<div className="container">
				<h2>Room Assignment</h2>
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

			{/* Repeat similar structure for other sections */}
		</div>
	);
}

export default Dependent;
