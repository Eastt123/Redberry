import React from 'react';
import { useContext } from 'react';
import { appContextProvider } from '../context/Context';
const FormOne = () => {
    const {
        handleNextPage,
        register,
        handleSubmit,
        errors,
        formData, 
        handleOnChange,
        teams,
        filteredPosition,
        } = useContext(appContextProvider());
    

  const onSubmit = () => {
    handleNextPage();
};

console.log(errors);


    return (
        <form  onSubmit={handleSubmit(onSubmit)} className='employee-form' >
            <div className='employee-info'>
                <div className='employee-container'>
                    <label htmlFor="">სახელი</label>
                    <input  placeholder='სახელი' type="text" 
                    {...register("name", 
                    {
                        required:{value:true, message:"სახელი სავალდებულოა"},
                        minLength:{value:2, message:"მინიმუმ 2 სიმბოლო"},
                        pattern:{value:/^[ა-ჰ]+$/i, message:"მხოლოდ ქართული სიმბოლოები"},
                        onChange:(e)=>{handleOnChange(e)}
                
                })} 
                     />
                    {errors.name ? <p className='error'>{errors.name.message}</p> : 
                    <p htmlFor="">მინიმუმ 2 სიმბოლო, ქართული ასოები</p>}
                </div>
                <div className='employee-container'>
                <label htmlFor="">გვარი</label>
                    <input  placeholder='გვარი' type="text" 
                    {...register("surname", 
                    {
                        required:{value:true, message:"გვარი სავალდებულოა"},
                        minLength:{value:2, message:"მინიმუმ 2 სიმბოლო"},
                        pattern:{value:/^[ა-ჰ]+$/i, message:"მხოლოდ ქართული სიმბოლოები"},
                        onChange:(e)=>{handleOnChange(e)}
                
                })} 
                    />
                    {errors.surname ? <p className='error'>{errors.surname.message}</p> : 
                    <p htmlFor="">მინიმუმ 2 სიმბოლო, ქართული ასოები</p>}
                </div>
            </div>

            <select 
            value={formData.team_id}
            className={`${errors.team_id && "input-error"}`}
            {...register("team_id",{required:"თიმი სავალდებულოა",
            onChange:(e)=>{handleOnChange(e)
            
            }
        })}
            >
                <option value="" >თიმი</option>
                {teams?.map((team) => { 
                    return <option  key={team.id} value={team.id} >{team.name}</option>
                })}
            </select>
            {errors.team_id && <p className='error'>{errors.team_id.message}</p> }


             
            <select  
            className={`${errors.position_id && "input-error"}`}
            value={formData.position_id}
            {...register("position_id",{required:"პოზიცია სავალდებულოა",
            onChange:(e)=>{ handleOnChange(e)}
        })}>

            <option value="" >პოზიცია</option>
            
                {filteredPosition.map((position) => {
                        return <option value={position.id} key={position.id}>{position.name}</option>
                })}
            </select>
            {errors.position_id && <p className='error'>{errors.position_id.message}</p> }




            <div className='employee-container email'>
                <label htmlFor="">მეილი</label>
                <input 
                 type="text" 
                {...register("email",
                {
                    required:{value:true, message:"მეილი სავალდებულოა"},
                    pattern:{
                    value:/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@redberry.ge$/,
                    message:"მეილი უნდა მთავრდებოდეს @redberry.ge-ით",
                },
                onChange:(e)=>{handleOnChange(e)}
                
            })}
                />

{errors.email ? <p className='error'>{errors.email.message}</p> : 
                    <p>უნდა მთავრდებოდეს @redberry-ით</p>}
                
            </div>

            <div className='employee-container mobile'>
                <label htmlFor="">ტელეფონი</label>
                <input 
                
                type="text" 
                {...register("phone_number",
                {
                    required:{value:true, message:"ტელეფონი სავალდებულოა"},
                    pattern:{value:/\+(995)\d{3}\d{3}\d{3}$/, 
                    message:"უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს +995 XXX XXX XXX",
                    
                },
                onChange:(e)=>{handleOnChange(e)}
            })}
                />
                {errors.phone_number ? <p className='error'>{errors.phone_number.message}</p> : 
                    <p>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</p>}
                
            </div>
            <div className='next-btn-container'>
                <button >შემდეგი</button>
            </div>
        </form>
    );
};

export default FormOne;