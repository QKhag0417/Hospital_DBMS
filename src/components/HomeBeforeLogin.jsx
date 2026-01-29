import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";


function HomeBeforeLogin(){



    
    return(
        <div >
            <h1>Welcome to Our App!</h1>
            <p>
                Please log in to access your account and enjoy all the features we offer.
            </p>
            <Link to="/login">
                <button>Go to Login</button>
            </Link>
        </div>
    );
};

export default HomeBeforeLogin;