import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from 'axios';

function Nurse() {
	

	return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Đây là trang chủ cho nurse</h1>
        </div>
      );
	
}

export default Nurse;
