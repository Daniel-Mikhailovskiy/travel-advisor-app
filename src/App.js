import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData } from '../src/api';

import Header from './Components/Header/Header';
import List from './Components/List/List'
import MapCopy from './Components/Map/MapCopy';


const App = () => {


  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({ne: 0, sw:0});

  const [filtered, setFiltered] = useState([]);

  const [places, setPlaces] = useState([]);
  const [ childClicked, setChildClicked ] = useState([])

  const [ type, setType ] = useState('restaurants')
  const [ rating, setRating ] = useState('0');

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    const filteredCards = places.filter((place) => place.rating == rating);
    setFiltered(filteredCards);
  },[rating])

  useEffect(() => {
    setIsLoading(true);
      getPlacesData(type, bounds.ne, bounds.sw)
        .then((data) => {
          setPlaces(data);
          console.log(data);
          setIsLoading(false)

        });
    },[type, bounds, coords]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={(filtered.length) ? filtered : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <MapCopy
            setBounds={setBounds}
            setCoords={setCoords}
            coords={coords}
            places={(filtered.length) ? filtered : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;