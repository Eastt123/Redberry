import React from 'react';
import imageError from "../assets/imageError.png";
import { useContext } from 'react';
import { appContextProvider } from '../context/Context';
const ImageUpload = () => {
    const {errors, formData, register, handleOnChange} = useContext(appContextProvider())
    return (
        <div>
        <div className={`image-container ${ errors.laptop_image ? "image-error": ""}`}>
            {formData.laptop_image.name ? null :
                <>
                {errors.image && <img src={imageError} alt="no-img" />}
                <h2 className={errors.image ? "error" : "null"} >ჩააგდე ან ატვირთე
                    ლეპტოპის ფოტო</h2>
                <label htmlFor='imagePicker'>ატვირთე</label>
                </>

            }
                <input
                    {...register("laptop_image", {
                        required:  true,
                        onChange:(e)=>{handleOnChange(e)}
                    }

                    )}
                    id="imagePicker"
                    type="file"
                    style={{ visibility: "hidden" }} />
                
            </div>
            {formData.laptop_image.name &&
            <div className='upload'>
                <div>{formData.laptop_image.name}</div>
                    <label htmlFor="imagePicker"  >
                    თავიდან ატვირთე 
                    </label>
            </div>}
            </div>
    );
};

export default ImageUpload;