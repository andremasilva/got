import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './App.css';

const Stark = () => {

    const [characters, setcharacters] = useState([]);

    const getCharacters = async (name) => {
        const response = await fetch(`https://thronesapi.com/api/v2/Characters/`)
        const data = await response.json()
        setcharacters(data)
        console.log(data);
    }

    useEffect(() => {
        getCharacters()
    }, [])

    const filteredStark = characters.filter(character => {
        return character.family === 'House Stark'
    }
    )

    let MAX_STARKS = 7

    return (
        <div className="card-container">
            {filteredStark.slice(0, MAX_STARKS).map(characters => (
                <div className='card'>
                    <h1>{characters.fullName}</h1>
                    <h1>{characters.family}</h1>
                    <img className='image' src={characters.imageUrl} alt="" />
                    <Link to={`character/${characters.id}`}><button type="button"> Details </button></Link>
                </div>
            ))}
        </div>
    )
}


export default Stark