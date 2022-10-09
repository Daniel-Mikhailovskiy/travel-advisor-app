import React,{ useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery, Card, CardMedia, CardContent } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from "./styles";

function Map(props) {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer} md={6}>
      <GoogleMapReact
        borderRadius={10}
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOFLE_MAPS_API_KEY }}
        defaultCenter={props.coords}
        center={props.coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          props.setCoords({ lat: e.center.lat, lng: e.center.lng });
          props.setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        options={""}
        onChildClick={(child) => props.setChildClicked(child)}
        xs={4}
      >
        {props.places?.map((place, i) => (
          <div
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
            className={classes.markerContainer}
          >
            {!matches ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large"  />
            ) : (
              <Card
                className={classes.card}
                maxHeight="50px"
                maxWidth="50px"
                elevation={3}

              >
                <Paper padding="50" color="white">
                  <CardMedia
                    size
                    className={classes.pointer}
                    component="img"
                    border="8"
                    image={
                      place?.photo
                        ? place.photo.images.large.url
                        : null
                    }
                    alt={null}
                  />
                </Paper>
                <CardContent>
                  <Typography
                    align="center"
                    variant="subtitle2"
                    className={classes.typography}
                  >
                    {" "}
                    {place.name}{" "}
                  </Typography>
                  <Rating
                    size='small'
                    value={Number(place.rating)}
                    readOnly
                  />
                </CardContent>
              </Card>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
}
export default Map;
