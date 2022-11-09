import React, { useEffect, useState } from 'react';
import Characher from './Characher';
import './App.css';
import { Link } from 'react-router-dom';


const Characters = () => {

    const [characters, setcharacters] = useState([]);

    const getCharacters = async () => {
        const response = await fetch(`https://thronesapi.com/api/v2/Characters`)
        const data = await response.json()
        setcharacters(data)
        console.log(data);
    }

    useEffect(() => {
        setTimeout(getCharacters, 1000);
    }, [])

    return (
        <div className="card-container">
            {characters.map(characters => (
                <Link to='/characters'>
                    <Characher
                        key={characters.id}
                        id={characters.id}
                        name={characters.fullName}
                        image={characters.imageUrl} />
                </Link>
            ))}
        </div>
    )
}

export default Characters