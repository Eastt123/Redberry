import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const appContext = createContext();

export function appContextProvider  (){
    return appContext;
}

const Context = ({children}) => {
    
    const { register, setValue  , handleSubmit ,reset, formState: { errors } } = useForm();
    const [filteredPosition, setFilteredPosition] = useState([])
    const [step, setStep] = useState(1);
    const [data, setData] = useState();
    
    const [formData, setFormData] = useState({
        name:"",
        surname:"",
        team_id:"",
        position_id: "",
        email:"",
        phone_number:"",
        laptop_image:"",
        token:"8dcd889e34c05585b791640bfa259276",
        laptop_name:"",
        laptop_brand_id:"",
        laptop_cpu:"",
        laptop_cpu_threads:"",
        laptop_cpu_cores:"",
        laptop_ram:"",
        laptop_hard_drive_type:"",
        laptop_state:"",
        laptop_purchase_date:"",
        laptop_price:""
    });



    const handleOnChange = (e) =>{
        const name = e.target.name;
        let value = e.target.value;
        switch (name) {
            case "position_id":
            case "team_id":
            case "laptop_brand_id":
            case "laptop_cpu_cores":
            case "laptop_cpu_threads":
            case "laptop_ram":  
            if(parseInt(value)){
            value = parseInt(value);

        }
            break
            case "laptop_image":
                value =  e.target.files[0];
                break
            default:
               value = value.trim();
        }

        setFormData((prevState) => {
            localStorage.setItem("formData", JSON.stringify({...formData, [name]:value}))
            return {...prevState, [name]:value}
        });



    }
    const handleBack = () => {
        setStep((prev) => prev - 1);
    }
    
    const handleNextPage = () => {
        setStep((prev) => prev + 1);
    }


   const fetchData = async () => {

   const brands = await axios.get("https://pcfy.redberryinternship.ge/api/brands").then(({ data }) => {
            return data.data
        });
      const cpu = await  axios.get('https://pcfy.redberryinternship.ge/api/cpus').then(({ data }) => {
        return data.data
        });

     const teams = await axios.get("https://pcfy.redberryinternship.ge/api/teams").then(({data}) =>{
            return data.data
        });
      const positions = await axios.get('https://pcfy.redberryinternship.ge/api/positions').then(({data})=>{
                
            return data.data
        })
        setData({brands, teams, cpu, positions})
   }


    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("formData"));
        if(data !== null){
            setFormData(data);
            for (var key in data){
                if(key.toString() !== "laptop_image"){

                //  ამას იმიტომ ვაკეთებ რომ რეფრეშის შემდეგ ველები შევსებულია მაგრამ
                // ვალიდაციას არ გადის დეფაულტვალუეს გამოყენებაც შეიძლებოდა უსფორმზე მემგონი 
                // მაგრამ რაღამც ამან იმუშავა ის აღარ მიცდია

                setValue(key, data[key])
                }
                
            }
        }
    },[])

    useEffect(()=>{
        if(data){
        const {positions} = data;

        const position = positions.filter((data) => {
            if(formData.team_id === data.team_id){
               return data;
            }else{
               return null
            }
       })
       setFilteredPosition(position)
    }
        
    },[data, formData.team_id])
    
    
    return (
        <appContext.Provider value={{
            ...data,
            fetchData,
            step,
            setStep,
            handleBack,
            handleNextPage,
            formData,
            setFormData,
            handleOnChange,
            register,
            handleSubmit,
            reset,
            errors,
            setValue,
            filteredPosition,
        }}>
            {children}
        </appContext.Provider>
    );
};

export default Context;