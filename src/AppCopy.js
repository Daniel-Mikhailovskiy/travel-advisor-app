// import React, { useState, useEffect } from "react";
// import { CssBaseline, Grid } from "@material-ui/core";
// import { getPlaceData } from '../src/api/index'

// import Header from "./Components/Header/Header";
// import List from "./Components/List/List";
// import Map from "./Components/Map/Map";


// function App() {
//   const [coordinates, setCoordinates] = useState(geo);
 
//   const [bounds, setBounds] = useState();

//   const [places, setPlaces] = useState([]);

//   function geo() {
//     navigator.geolocation.getCurrentPosition(( {coords: { latitude, longitude }} ) => {
//       setCoordinates({lat: latitude, lng: longitude})
//     })
//   }

//   useEffect(() => {
//     getPlaceData().then((data) => {
//       setPlaces(data);
//     });
//   }, [coordinates, bounds]);

//   console.log(bounds);

//   return (
//     <>
//       <CssBaseline />
//       <Header />
//       <Grid container spacing={3} style={{ width: "100%" }}>
//         <Grid item xs={12} md={4}>
//           <List />
//         </Grid>
//         <Grid item xs={12} md={8}>
//           <Map coordinates={coordinates} setCoordinates={setCoordinates} setBounds={setBounds}/>
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// export default App;