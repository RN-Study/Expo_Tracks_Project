import * as Location from 'expo-location';

const tenMetrWithDegrees = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longtitude: -122.0312186 + increment * tenMetrWithDegrees,
            latitude: 37.33233141 + increment * tenMetrWithDegrees
        }
    };
};

let counter = 0;
setInterval( () => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        wattchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000 );