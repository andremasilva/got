import React, { useEffect, useState } from 'react';
import './App.css';


const Continents = () => {

    const [continents, setContinents] = useState([]);

    const getContinents = async () => {
        const response = await fetch(`https://thronesapi.com/api/v2/Continents
`)
        const data = await response.json()
        setContinents(data)
        console.log(data);
    }

    useEffect(() => {
        getContinents()
    }, [])

    return (<div className='continents-container'>
        {continents.map(continent => (
            <h1 className='continents' >{continent.name}</h1>
        ))
        }</div>
    )
}

export default Continents