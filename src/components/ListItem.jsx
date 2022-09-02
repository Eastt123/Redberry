import React from 'react';
import { Link } from 'react-router-dom';
const ListItem = ({user:{name, surname}, laptop:{id , name:laptopName, image}}) => {
    return (
        <div className='list-item'>
        <div>
            <img src={`https://pcfy.redberryinternship.ge/${image}`} alt="" />
        </div>
        <div>
            <h4>{name} {surname}</h4>
            <p>{laptopName}</p>
            <Link to={`/laptop/${id}`}>მეტის ნახვა</Link>
        </div>
    </div>
    );
};

export default ListItem;