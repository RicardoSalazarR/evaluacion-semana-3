import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Residents = ({resident}) => {

    const [character, setCharacter] = useState({})
    useEffect(()=>{
        axios.get(resident)
        .then(res=> setCharacter(res.data))
    },[])
    return (
        <li className='character-card'>
            <img src={character.image} alt="" />
            <p>{character.name}</p>
            <p>status: {character.status}</p>
            <p>origin: {character.origin?.name}</p>
            <p>Episodes where appear: {character.episode?.length}</p>
        </li>
    );
};

export default Residents;