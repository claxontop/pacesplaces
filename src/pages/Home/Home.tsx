import React,  { useState, useEffect } from 'react';
import './Home.scss';
import PlaceList from '../../components/PlacesList/PlaceList';
import PlaceForm from '../../components/PlaceForm/PlaceForm';
import {API, graphqlOperation} from 'aws-amplify';
import {listPlaces} from '../../graphql/queries';
import {createPlace} from '../../graphql/mutations';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

export interface Place {
    id: string;
    imgUrl: string;
    title: string;
    description: string;
}

const Home: React.FC = () => {
    
    const [places, setPlaces] = useState<Array<Place>>([]);

    useEffect(() => {
        fetchPlaces();
    }, []);

    
    const fetchPlaces = async () => {
        try {
            const placesData = await API.graphql(graphqlOperation(listPlaces)) as any;
            const placesList =  placesData.data.listPlaces.items as Place[];
            setPlaces(placesList);
        } catch(err) {console.log('Error fetching places: ', err)}
    };
    
    const addPlace = async (place: Place) => {
        try {
            const placeData = await API.graphql(graphqlOperation(createPlace, {input: place})) as any;
            const addedPlace = placeData.data.createPlace as Place;
            setPlaces(currentPlaces => ([...currentPlaces, addedPlace]));
        } catch (err) {console.log('Error creating place: ', err) }
    };

    return (
        <div className="home">
            <div className="places-list">
                <PlaceList places={places}/>
            </div>
            <div className="places-form">
                <PlaceForm createPlace={addPlace} />
            </div>
            <AmplifySignOut />
        </div>
        
    );
};

export default withAuthenticator (Home);
// export default Home;