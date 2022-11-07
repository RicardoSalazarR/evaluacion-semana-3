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
            <div className='search-container'>
                <input
                    className='search search-input'
                    type="text"
                    value={locationId} placeholder="    TYPE LOCATION ID"
                    onChange={(e) => setLocationId(e.target.value)} />

                <button onClick={searchLocation} className='search search-button'>Search</button>
            </div>

            <div className='description-card'>
                <ul className='description'>
                    <li><b>Name: </b>{location.name}</li>
                    <li><b>Type: </b>{location.type}</li>
                    <li><b>Dimensión: </b>{location.dimension}</li>
                    <li><b>Population: </b>{location.residents?.length}</li>
                </ul>
            </div>
            <div className='residents-section'>
                <h2>Residents</h2>
                <ul className='residents-list'>

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