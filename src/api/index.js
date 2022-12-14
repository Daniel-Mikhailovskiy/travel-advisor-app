import axios from 'axios';

export const getPlacesData = async (type, ne, sw) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: ne.lat,
        tr_latitude: sw.lat,
        bl_longitude: ne.lng,
        tr_longitude: sw.lng,
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_TRAVEL_ADVISOR_KEY,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    return data;

  } catch (error) {
    console.log(error);
  }
};