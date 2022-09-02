import React, {useContext} from 'react';
import { appContextProvider } from '../context/Context';
import LaptopError from './LaptopError';
const LaptopBrand = () => {
    const { formData, handleOnChange, brands, register, errors } = useContext(appContextProvider());
    return (
        <div className='laptop-brand'>
                <div className='laptop-name'>

                <div className='select-error'>
                {errors.laptop_name ? <LaptopError message={errors.laptop_name.message} /> : 
                    <label htmlFor="">ლეპტოპის სახელი</label> }
                </div>
                      
                    <input className={`${errors.laptop_name ? "input-error" : ""}`} 
                     {...register("laptop_name", {
                        required: "ლეპტოპის სახელი სავალდებულოა",
                        pattern: {
                            value: /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]*$/,
                            message: "შესაძლებელია შეიცავდეს მხოლოდ ლათინურ სიმბოლოებს, რიცხვებსა და !@#$%^&*()_+="

                        },
                    
                        onChange:(e)=>{handleOnChange(e)}
                    })} type="text" />
                        
                        
                        <p>ლათინური ასოები, ციფრები, !@#$%^&*()_+= </p>
                </div>

                <div className='select-container'>
                    <div className='select-error'>
                {errors.laptop_brand_id && <LaptopError message={errors.laptop_brand_id.message} />}
                </div>
                    <select 
                    className={`${errors.laptop_brand_id ? "input-error" : ""}`}
                    value={formData.laptop_brand_id} {...register("laptop_brand_id", {
                        required: {
                            value: true,
                            message: "ლეპტოპის ბრენდი სავალდებულოა"
                        },
                        onChange:(e)=>{handleOnChange(e)}
                    })} >
                        <option value="" >ლეპტოპის ბრენდი</option>
                        {brands?.map((brand) => {
                            return (
                                <option key={brand.id} value={brand.id} >{brand.name}</option>
                            )
                        })}
                    </select>
                    
                </div>
            </div>
    );
};

export default LaptopBrand;