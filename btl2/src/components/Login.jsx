import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";


function Login(){
    return(
        <div >
            <h1>Welcome to Login!</h1>
            <p>
                Loginnnnnnnnnnnnnnnnnnnn
            </p>
            <Link to="/">
                <button>Go to Home</button>
            </Link>
        </div>
    );
};

export default Login;