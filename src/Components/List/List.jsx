import React, { useState } from "react";
import { Typography, CircularProgress, Grid, InputLabel, MenuItem, FormControl, Select, Card } from '@material-ui/core'
import PlaceDetails from '../PlaceDetails/PlaceDetails'

import useStyles from './style'
import { useEffect } from "react";
import { createRef } from "react";

function List(props) {
  const classes = useStyles();


  const [elRef, setElRef] = useState([]);

  useEffect(() => {
    const refs = Array(props.places?.length).fill().map((_, i) => (elRef[i]) || createRef());
    setElRef(refs);
  }, [props.places]);

  console.log(props.childClicked);

   return (
     <div className={classes.container}>
       <Typography variant='h4'>Restaurants, Hotels and Attractions around you</Typography>
       {props.isLoading ? 
       <div className={classes.loading}>
         <CircularProgress size='5rem' />
       </div>
       : (
        <>
       <FormControl className={classes.formControl}>
          <InputLabel>Type</InputLabel>
          <Select value={props.type} onChange={(e) => props.setType(e.target.value)}>
            <MenuItem value='restaurants'>Restaurants</MenuItem>
            <MenuItem value='hotels'>Hotels</MenuItem>
            <MenuItem value='attractions'>Attractions</MenuItem>
          </Select>
       </FormControl>
       <FormControl className={classes.formControl}>
          <InputLabel>Rating</InputLabel>
          <Select value={props.rating} onChange={(e) => props.setRating(e.target.value)}>
            <MenuItem value={0} >ALL</MenuItem>
            <MenuItem value={3.0}>3</MenuItem>
            <MenuItem value={4.0}>4</MenuItem>
            <MenuItem value={5.0}>5</MenuItem>
          </Select>
       </FormControl>
       <Grid container spacing ={3} className={classes.list}>
        {props.places?.map((place, i) => (
          <Grid ref={elRef[i]} item key={i} xs={12} >
            <PlaceDetails  
              place={place}
              selected={Number(props.childClicked) === i}
              refs={elRef[i]}
              />
          </Grid>
        ))}
       </Grid>
       </>
      )}
     </div>
   );
}
export default List;

