import React from 'react';
import { useContext } from 'react';
import { appContextProvider } from '../context/Context';
import { useNavigate } from 'react-router-dom';
import imageError from "../assets/imageError.png";
import LaptopBrand from '../components/LaptopBrand';
import LaptopCpu from '../components/LaptopCpu';
import LaptopRam from '../components/LaptopRam';
import LaptopPrice from '../components/LaptopPrice';
import LaptopCondition from '../components/LaptopCondition';
import ImageUpload from '../components/ImageUpload';
import axios from 'axios';

const FormTwo = () => {
    const navigate = useNavigate();
    const { handleBack, formData , handleSubmit} = 
         useContext(appContextProvider());

         const onSubmit = async () =>{
            const config = {     
               headers: { 'content-type': 'multipart/form-data' }
           }
           
           let dataToPost = new FormData(); 
           for ( let key in formData ) {
                
            dataToPost.append(key, formData[key]);
           
            }    
            
    
           try {
               
             await axios.post("https://pcfy.redberryinternship.ge/api/laptop/create", dataToPost, config ).then(()=>{
                navigate("/completion");
                localStorage.clear();
             });
           } catch (error) {
               console.error(error);
           }
    
    
    
    
    
    
       }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='laptop-form'>
            <ImageUpload />
            <LaptopBrand />

            <div className='breakline'></div>
            
            <LaptopCpu />
            
            <LaptopRam />

            <div className='breakline'></div>

            <LaptopPrice />
            <LaptopCondition />
            

            <div className='completion-container'>
                <p onClick={handleBack}>უკან</p>
                <button className='ladning-btn'>დამახსოვრება</button>
            </div>
        </form>
    );
};

export default FormTwo;