import fetch from "node-fetch";

async function getImages(){
    const result = await fetch("https://api.nasa.gov/planetary/apod?api_key=iuenwC5jFVBftgtkvv2iJVBulBzAgPf065FyY9S6&start_date=2022-01-01");
    const data = await result.json()
    return data;
}

module.exports = {getImages};