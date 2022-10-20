/* eslint-disable consistent-return */
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,         //helps with setting the location cordinates of places 
        bl_longitude: sw.lng,         //latitude n longitude
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': "df1057f8b9mshd12214038d81e2ap121719jsnb10d586c3131",
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {       //rapid api source link 
        params: { lat, lon: lng },
        headers: {
          'x-rapidapi-key': "df1057f8b9mshd12214038d81e2ap121719jsnb10d586c3131",
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',           //rapidapi key and host
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};