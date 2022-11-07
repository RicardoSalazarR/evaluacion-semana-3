import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Residents = ({ resident }) => {

    const [character, setCharacter] = useState({})
    useEffect(() => {
        axios.get(resident)
            .then(res => setCharacter(res.data))
    }, [])
    return (
        <li className='character-card'>
            <img src={character.image} alt="" />
            <b className='character-name'>{character.name}</b>
            <p><b>status:</b> {character.status}</p>
            <p><b>origin:</b> {character.origin?.name}</p>
            <p><b>Episodes where appear:</b> {character.episode?.length}</p>
        </li>
    );
};

export default Residents;