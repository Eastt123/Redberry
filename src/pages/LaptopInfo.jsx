import React, {useEffect, useContext, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { appContextProvider } from '../context/Context';
import axios from 'axios';
import { getName, getPosition, getBrand, } from '../utils/laptopInfoUtils';
const LaptopInfo = () => {
 
    const {formData:{token}, brands, fetchData, teams, positions } = useContext(appContextProvider()); 
    const {id} = useParams();
    const [laptop, setLapTop] = useState();
    const [LapisLoading, sets] = useState(true);
    const navigate = useNavigate();
   
    const fetchap = async () =>{
        const laptop = await axios.get(`https://pcfy.redberryinternship.ge/api/laptop/${id}?token=${token}`);
        return laptop
    }

    useEffect(()=>{
        fetchData()
        .then(()=>{
            fetchap().then((data)=>{
                setLapTop(data.data.data);
            }).then(()=>{
                sets(false);

            })
        })
    },[])


    if(LapisLoading){
        return (
            <div className='loading'>
        <h1>Loading...</h1>
        </div>
        )
    }
    
       
 

    const {name, surname, team_id, position_id, email,phone_number} = laptop.user;
    const {brand_id, name:laptopName, image,hard_drive_type,price, purchase_date,ram,state,
           cpu:{cores,threads, name:cpuName}
} = laptop.laptop


    return (
        <section className='laptop-info-container'>
            <button onClick={()=>{navigate(-1)}} className='back-btn'></button>
            <div className="title"><h4>ლეოპტოპის იფნო</h4></div>
            <div className="laptop-info">
                <div className='info-container'>
                    <div><img src={`https://pcfy.redberryinternship.ge/${image}`} alt="no-img" /></div>
                    <div className='info-container employee'>
                        <div>
                            <p htmlFor="">სახელი:</p>
                            <p htmlFor="">თიმი:</p>
                            <p htmlFor="">პოზიცია:</p>
                            <p htmlFor="">მეილი:</p>
                            <p htmlFor="">ტელ.ნომერი:</p>
                        </div>
                        <div>
                            <p>{name} {surname}</p>
                            <p>{getName(teams,team_id)}</p>
                            <p>{getPosition(positions,position_id)}</p>
                            <p>{email}</p>
                            <p>{phone_number}</p>
                        </div>

                    </div>
                </div>

                <div className='breakline'></div>

                <div className='info-container'>
                    <div className='info-container employee'>
                        <div>
                            <p>ლეპტოპის სახელი</p>
                            <p>ლეოპტოპის ბრენდი</p>
                            <p>RAM</p>
                            <p>მეხისრების ტიპი</p>
                        </div>
                        <div>
                        <p>{getBrand(brands,brand_id)}</p>
                            <p>{laptopName}</p>
                            <p>{ram}</p>
                            <p>{hard_drive_type}</p>
                        </div>
                    </div>
                    <div className='info-container employee'>
                        <div>
                            <p>CPU</p>
                            <p>CPU-ს ბირთვი</p>
                            <p>CPU-ს ნაკადი</p>
                        </div>
                        <div>
                            <p>{cpuName}</p>
                            <p>{cores}</p>
                            <p>{threads}</p>
                        </div>
                    </div>
                </div>
                <div className='breakline'></div>
                <div className='info-container '>
                    <div className='info-container employee'>
                        <div>
                            <p>ლეპტოპის მდგომარეობა</p>
                            <p>ლეპტოპის ფასი</p>
                        </div>
                        <div>
                            <p>{state}</p>
                            <p>{price}</p>
                        </div>
                    </div>
                    <div className='info-container employee'>
                        <div><p>შევსების რიცხვი</p></div>
                        <div><p>{purchase_date}</p></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LaptopInfo;