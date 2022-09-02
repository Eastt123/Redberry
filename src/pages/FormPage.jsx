import React, { useEffect } from 'react';
import logo from "../assets/LOGO-10.png"
import LaptopForm from "./LaptopForm";
import EmployeeFrom from "./EmployeeForm"
import { useContext } from 'react';
import {appContextProvider} from "../context/Context";
import { useNavigate } from 'react-router-dom';
const FormPage = () => {
    const {step, handleBack, fetchData} = useContext(appContextProvider());
    const navigate = useNavigate();
    const renderCurrentStep = () => {
        switch (step) {
            case 0:
              return  navigate("/")
            case 1:
               return <EmployeeFrom />        
            case 2:
                return <LaptopForm />
            default:
                break;
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    return (
        <section className='formpage'>
            <header>
                <button onClick={handleBack} className='back-btn'></button>
               
            </header>
            <div className='formpage-titles'>
                <h3 className={` ${step === 1 && "active"}`}>თანამშრომლის ინფო</h3>
                <h3 className={` ${step === 2 && "active"}`} >ლეპტოპის მახასიათებლები</h3>
            </div>
            {
                renderCurrentStep()
            }
          
            <div className='formPage-logo'>
                <img src={logo} alt="" />
            </div>
        </section>
    );
};

export default FormPage;