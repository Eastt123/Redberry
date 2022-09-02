import React from 'react';
import "./styles.css";
import landngImage from "../assets/landingPageImages/Group1.png"
import mobileImge from "../assets/landingPageImages/Group.png"
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { appContextProvider } from '../context/Context';
const LandingPage = () => {
    const {setStep} = useContext(appContextProvider());
    const navigate = useNavigate();
    return (
        <section className='landing'>
                <div className='logo'></div>
                <div className='landing-image'>
                    <img src={landngImage} className="image-bg" alt="no-img" />
                    <img src={mobileImge}  className="image-sm" alt='no-img' />
                </div>
                <div className='btn-container'>
                <button onClick={()=>{navigate("/add"); setStep(1)}} className='ladning-btn'>ჩანაწერის დამატება</button>
                <button className='ladning-btn' onClick={()=>{navigate("/laptoplist")}}>ჩანაწერების სია</button>
                </div> 
        </section>
    );
};

export default LandingPage;