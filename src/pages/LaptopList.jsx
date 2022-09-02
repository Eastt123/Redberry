import React, {useContext, useEffect, useState} from 'react';
import { appContextProvider } from '../context/Context';
import axios from 'axios';
import ListItem from '../components/ListItem';
const LaptopList = () => {
    const {formData:{token}} = useContext(appContextProvider());
    const [latpTopList, setLatpTopList] = useState([]);

    useEffect(()=>{
        axios.get("https://pcfy.redberryinternship.ge/api/laptops?token=" + token).then((data)=>{
        setLatpTopList(data.data.data);
        })
    },[])
    
    return (
        <section className='laptopList-container'>
            <div className='title'><h4>ჩანაწერების სია</h4></div>
            <div className='laptopList'>
                {latpTopList.map((item, index) =>{
                       return <ListItem key={index}  {...item} />
                })}
            </div>
        </section>
    );
};

export default LaptopList;