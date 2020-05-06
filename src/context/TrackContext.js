import CreateDataContext from './CreateDataContext';
import trackerApi from '../api/tracker';

const trackReducer = ( state, action ) => {
    switch ( action.type ) {
        case 'fetch_tracks':
            return action.payload;
        default:
            return state;
    }
};

const fetchTracks = dispatch => async () => {
    const response = await trackerApi.get('/tracks');
    dispatch({ type: 'fetch_tracks', payload: response.data });
    console.log(response.data);
};
const createTrack = dispatch => async ( name, locations ) => {
    // make a request to api
    await trackerApi.post('/tracks', { name, locations });
    // console.log(name, locations);
};

export const { Provider, Context } = CreateDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
);