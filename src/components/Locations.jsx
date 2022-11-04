import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
import Residents from './Residents';

const Locations = () => {

    const [location, setLocation] = useState({})
    const [locationId, setLocationId] = useState('')

    useEffect(() => {
        const random = Math.floor(Math.random() * 126) + 1
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => setLocation(res.data))
    }, [])

    const searchLocation = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${locationId}`)
            .then(res => setLocation(res.data))
    }

    return (
        <div className='main-container'>
            <div>
                <input
                    type="text"
                    value={locationId}
                    onChange={(e) => setLocationId(e.target.value)} />

                <button onClick={searchLocation}>Search</button>
            </div>
            <div>
                <h1>{location.name}</h1>
                <ul className='description'>
                    <li><b>Type: </b>{location.type}</li>
                    <li><b>Dimensión: </b>{location.dimension}</li>
                    <li><b>Population: </b>{location.residents?.length}</li>
                </ul>
            </div>
            <div>
                <ul>
                    <h2>Residents</h2>
                    {
                        location.residents?.map((resident) =>
                        (
                            <Residents resident={resident} key={resident} />
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Locations;