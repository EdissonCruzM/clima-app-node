const axios = require('axios');

const getClima = async(lat, lng) => {

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1d48fb141d1f05aa5cedeb7aecf4a7be&units=metric`);

    return res.data.main.temp;
}


module.exports = {
    getClima
}