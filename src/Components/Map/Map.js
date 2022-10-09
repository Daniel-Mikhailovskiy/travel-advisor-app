// import React from 'react';
// import GoogleMap from 'google-map-react';
// import { Paper, Typography, useMediaQuery } from '@material-ui/core';
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab/Rating';

// import mapStyles from '../../mapStyles';
// import useStyles from './styles.js';
// import { Marker } from '@react-google-maps/api';

// const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
//   const matches = useMediaQuery('(min-width:600px)');
//   const classes = useStyles();

//   return (
//     <div className={classes.mapContainer}>
//       <GoogleMap
//         bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
//         defaultCenter={coords}
//         center={coords}
//         defaultZoom={14}
//         margin={[50, 50, 50, 50]}
//         options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
//         onChange={(e) => {
//           setCoords({ lat: e.center.lat, lng: e.center.lng });
//           setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
//         }}
//         onChildClick={''}
//       >
//           <Marker position={coords}/>
//       </GoogleMap>
//     </div>
//   );
// };

export default Map;