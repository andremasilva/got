import React from 'react';
import { Link } from "react-router-dom";
import './App.css';


const Characher = ({ name, id, image }) => {
    return (
        <section>
            <div className='card'>
                <h1>{name}</h1>
                <img className='image' src={image} alt="" />
                <Link to={`character/${id}`}><button type="button"> Details </button></Link>
            </div>
        </section>
    )
}

export default Characher