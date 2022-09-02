import React, {useContext} from 'react';
import { appContextProvider } from '../context/Context';
import LaptopError from './LaptopError';
const LaptopRam = () => {
    const { formData, handleOnChange, register, errors } = useContext(appContextProvider());
    return (
        <div className='grid laptop-ram'>
                <div className='laptop-name'>
            {errors.laptop_ram ? <LaptopError message={errors.laptop_ram.message} /> :
                    <label htmlFor="">ლეპტოპის RAM (GB)</label>}
                    <input
                    className={`${errors.laptop_ram && "input-error"}`}
                        {...register("laptop_ram", {
                            required: "RAM სავალდებულოა",
                            pattern: { value: /^[0-9]*$/, message: "მხოლოდ ციფრი" },
                            onChange:(e)=>{handleOnChange(e)}
                        })}
                        type="text" />
                </div>
                <div className={`${errors.laptop_hard_drive_type && "radio-error"}`} >
                {errors.laptop_hard_drive_type ? <LaptopError message={errors.laptop_hard_drive_type.message} />:
                    <label htmlFor="">მეხსიერების ტიპი</label>}
                    <div  onChange={(e)=>handleOnChange(e)} className='flex'>
                        <div className='flex'>
                            <input
                            checked={formData.laptop_hard_drive_type === "SSD" && true}
                                {...register("laptop_hard_drive_type", { required: "მეხსიერების ტიპი სავალდებულოა",

                            })}
                                name='laptop_hard_drive_type' id='SDD' value="SSD" type="radio" />
                            <label htmlFor="">SSD</label>
                        </div>
                        <div className='flex'>
                            <input
                            checked={ formData.laptop_hard_drive_type === "HDD" && true}
                                {...register("laptop_hard_drive_type", { required: "მეხსიერების ტიპი სავალდებულოა",
                            
                            })}
                                name='laptop_hard_drive_type' id='HDD' value="HDD" type="radio" />
                            <label htmlFor="">HDD</label>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default LaptopRam;