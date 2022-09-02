import React, {useContext} from 'react';
import { appContextProvider } from '../context/Context';
import gelLogo from "../assets/Vector.png";
import LaptopError from './LaptopError';
const LaptopPrice = () => {
    const {  handleOnChange, register, errors } = useContext(appContextProvider());
    return (
        <div className='grid laptop-date'>
        <div className='flex date'>
            <label htmlFor="">შეძენის რიცხვი (არჩევითი)</label>
            <input 
            
            {...register("laptop_purchase_date",{
                onChange:(e)=>{handleOnChange(e)}
            }
            
            )} type="date" />
        </div>
        <div className='flex price'>

        <div className='select-error'>
                {errors.laptop_price ? <LaptopError message={errors.laptop_price.message} /> : 
            <label htmlFor="">ლეპტოპის ფასი</label>}
                </div>

          
            <div>
                <input
                className={`${errors.laptop_price && "input-error"}`}
                    {...register("laptop_price", {
                        required: "ფასი სავალდებულოა",
                        pattern: { value: /^[0-9]*$/, message: "მხოლოდ ციფრი",
                    },
                    onChange:(e)=>{handleOnChange(e)}
                    })}
                    type="text" />
                <img className='currency-img' src={gelLogo} alt="no-img" />
            </div>
                <p> მხოლოდ ციფრები</p>
        </div>
    </div>
    );
};

export default LaptopPrice;