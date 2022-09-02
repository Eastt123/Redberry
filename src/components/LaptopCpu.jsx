import React, {useContext} from 'react';
import { appContextProvider } from '../context/Context';
import LaptopError from './LaptopError';
const LaptopCpu = () => {
    const { handleOnChange,  register, cpu, errors } = useContext(appContextProvider());
    return (
        <div className="laptop-cpu">
                <div className='select-container'>
                    <div className='select-error'>
                {errors.laptop_cpu ? <LaptopError message={errors.laptop_cpu.message} /> :"" }
                </div>
                    <select 
                     className={`${errors.laptop_cpu && "input-error"}`}
                    
                    {...register("laptop_cpu", { required: "Cpu სავალდებულოა",
                    onChange:(e)=>{handleOnChange(e)}
                },
                    
                    )}>
                        <option value="">CPU</option>
                        {cpu?.map((cpu) => {
                            return (
                                <option key={cpu.id} value={cpu.name}>{cpu.name}</option>
                            )
                        })}
                    </select>

                </div>
                <div>
                <div className='select-error'>
                {errors.laptop_cpu_cores ? <LaptopError message={errors.laptop_cpu_cores.message} /> :  
                    <label htmlFor="">CPU-ს ბირთვი</label>}
                </div>
                
                    <input 
                    className={`${errors.laptop_cpu_cores && "input-error"}`}
                    {...register("laptop_cpu_cores", {
                        required: "ბირთვი სავალდებულოა",
                        pattern: { value: /^[0-9]*$/, message: "მხოლოდ ციფრი" },
                        onChange:(e)=>{handleOnChange(e)}
                    })} type="text" />
                    
                        
                        <p> მხოლოდ ციფრები</p>
                </div>
                <div>

                <div className='select-error'>
                {errors.laptop_cpu_threads  ? <LaptopError message={errors.laptop_cpu_threads.message} /> :
                    <label htmlFor="">CPU-ს ნაკადი</label>}
                </div>

                
                    <input
                    className={`${errors.laptop_cpu_threads && "input-error"}`}
                        {...register("laptop_cpu_threads", {
                            required: "ნაკადი სავალდებულოა",
                            pattern: { value: /^[0-9]*$/, message: "მხოლოდ ციფრი" },
                            onChange:(e)=>{handleOnChange(e)}
                        })}
                        type="text" />

                        <p> მხოლოდ ციფრები</p>
                </div>
            </div>
    );
};

export default LaptopCpu;