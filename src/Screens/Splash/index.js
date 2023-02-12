import React from 'react';
import logo from "../../imagesAndIcons/store-logo.png";
import "./splash.css";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function SplashScreen() {
    
    const navigate = useNavigate();

    return (
        <div className='splash-main-div' >
            <div className='container1' >
                <img src={logo} className="logo" />
                <h2 className='heading' >SAYLANI WELFARE</h2>
                <h3 className='sub-heading' >ONLINE DISCOUNTED STORE</h3>
            </div>

            <Button variant="success" className='start-btn' onClick={() => navigate('/signup')} >Get Started</Button>{' '}

        </div>
    )
}

export default SplashScreen;