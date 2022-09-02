import React from 'react';
import { useNavigate } from 'react-router-dom';
const Completion = () => {
    const navigate = useNavigate();

    return (
        <section className='completion'>
                <div className='completion-center'>
                    <div>
                    <div className='completion-img'></div>
                    <h2>ჩანაწერი დამატებულია!</h2>
                    </div>
                    <button onClick={()=>navigate("/laptoplist")} className='ladning-btn'>სიაში გადაყვანა</button>
                    <p onClick={()=>{navigate("/")}}>მთავარი</p>
                </div>
        </section>
    );
};

export default Completion;