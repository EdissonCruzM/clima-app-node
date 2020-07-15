const axios = require('axios');

const getLugarLatLng = async dir => {

    const encodeUrl = encodeURI(dir);

    console.log(encodeUrl);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '56a90cf884mshbb42680922fffd2p157a8ejsn0c6844bdd461' }
    });

    const res = await instance.get();

    if (res.cod === '404') {
        throw new error(`No se encontro la ciudad ${dir}`);
    }

    const data = res.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}