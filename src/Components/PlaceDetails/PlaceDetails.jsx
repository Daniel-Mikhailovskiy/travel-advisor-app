
import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import { Rating } from "@material-ui/lab";

import useStyles from "./style.js";

function PlaceDetails(props) {

  if (props.selected) props.refs?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const classes = useStyles();
  return (
    <Card elevation={8}>
      <CardMedia
        style={{ height: 250 }}
        image={
          props.place.photo
            ? props.place.photo.images.large.url
            : "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        }
        title={props.place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {props.place.name ? props.place.name : "Restaurant"}
        </Typography>
        <Box display="flex" justifyContent='space-between' marginBottom='10px'>
          <Rating 
            align="left"
            value={Number(props.place.rating)}
            readOnly
          />
          <Typography  variant="subtitle2" align="right">
            Out of {props.place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" >
          <Typography variant='subtitle2' align="left">
            Price:
          </Typography>
          <Typography variant="subtitle2" align="right">
            {props.place.price_level
              ? props.place.price_level
              : "Information is unavailable"}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" my={1}>
          <Typography variant="subtitle2">Ranking:</Typography>
          <Typography  variant="subtitle2" align="right">
            {props.place.ranking
              ? props.place.ranking
              : "Information is unavailable"}
          </Typography>
        </Box>
        {props.place?.awards?.map((award, i) => (
          <Box my={1} display="flex" justifyContent="space-between" key={i} >
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        <Box>
          {props.place?.cuisine?.map((cuisine) => (
            <Chip
              key={cuisine.name}
              label={cuisine.name}
              size="small"
              className={classes.chip}
            />
          ))}
        </Box>
        {props.place?.address && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.subtitle}
            align="right"
          >
            <LocationOnIcon align="left" /> {props.place.address}
          </Typography>
        )}
        {props.place?.phone && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.spacing}
            align="right"
          >
            <PhoneIcon align="left" /> {props.place.phone}
          </Typography>
        )}
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(props.place.web_url, "_blank")}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(props.place.website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
export default PlaceDetails;

