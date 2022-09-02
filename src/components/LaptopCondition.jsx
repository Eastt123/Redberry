import React, {useContext} from 'react';
import { appContextProvider } from '../context/Context';
import LaptopError from './LaptopError';



const LaptopCondition = () => {
    const { formData, handleOnChange, register, errors } = useContext(appContextProvider());

    return (
        <div 

        className={` laptop-condition ${errors.laptop_state && "radio-error"}`}
        
        onChange={(e)=>handleOnChange(e)} >
             <div className='select-error'>
             {errors.laptop_state && <LaptopError message={errors.laptop_state.message} /> }
                </div>
        
                <label >ლეპტოპის მდგომარეობა</label>
                <div className='flex'>
                    <div className='flex'>
                        <input
                         checked={formData.laptop_state === "new" && true }
                            {...register("laptop_state", {
                                 required: "ლეპტოპის მდგომარეობა სავალდებულოა",
                            
                        })}
                            name='laptop_state' value="new" id='ახალი' type="radio" />
                        <label htmlFor="">ახალი</label>

                    </div>
                    <div className='flex'>
                    <input
                         checked={formData.laptop_state === "used" && true }
                            {...register("laptop_state", { 
                                required: "ლეპტოპის მდგომარეობა სავალდებულოა",
                            
                        })}
                            name='laptop_state' value="used" id='მეორადი' type="radio" />
                       
                        <label >მეორადი</label>
                    </div>
                    

                </div>
            </div>
    );
};

export default LaptopCondition;