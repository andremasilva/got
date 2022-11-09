import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

const CharactersDetail = () => {
    let params = useParams();
    const [charactersDetails, setcharactersDetails] = useState({});

    const getCharactersDetails = async () => {
        const response = await fetch(`https://thronesapi.com/api/v2/Characters/${params.id}`)
        const data = await response.json()
        setcharactersDetails(data)
        console.log(data);
    }

    useEffect(() => {
        getCharactersDetails();
    }, [])

    return (
        <section className="card-detail">
            <img className='img-detail' src={charactersDetails.imageUrl} alt="" />
            <div className='card-right'>
                <h1> Name: {charactersDetails.fullName}</h1>
                <h1> Family: {charactersDetails.family === 'House Stark' ? 'House King Without Head' :
                    charactersDetails.family === 'House Targaryen' ? 'House Crazy' : charactersDetails.family}
                </h1>
                <h1>Title: {charactersDetails.title}</h1>
            </div>
        </section>
    )
}

export default CharactersDetail