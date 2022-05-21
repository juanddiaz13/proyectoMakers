const axios  = require('axios');

async function getImages(){
    const result = await axios.get("https://api.nasa.gov/planetary/apod?api_key=iuenwC5jFVBftgtkvv2iJVBulBzAgPf065FyY9S6&start_date=2022-01-01")
    return result.data;
}

module.exports = {getImages};