import { useState, useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';
import { Context as AuthContext } from '../context/AuthContext';
import { navigate } from '../navigationRef';


export default () => {
    const { createTrack } = useContext(TrackContext);
    const { 
        state: { name,locations }, 
        reset 
    } = useContext(LocationContext);

    const saveTrack = async() => {
        await createTrack( name, locations );
        reset();
        // console.log(name, locations);
        navigate('TrackList');
    };

    return [saveTrack];
};