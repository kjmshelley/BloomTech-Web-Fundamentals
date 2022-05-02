const axios = require("axios");

class API {
    constructor(apiKey) {
        this.BASE_URL = "https://api.yelp.com/v3";
        this.API_KEY = `Bearer ${apiKey}`;
    }

    async get(url) {
        try {
            const data = await axios({
                method: "GET",
                url: `${this.BASE_URL}${url}`,
                headers: {
                    "Authorization": this.API_KEY
                }
            });
            return data.data;
        } catch(ex) {
            console.log(ex);
        }
    }

    post(path) {

    }

    put(path) {

    }

    patch(path) {
        
    }

    del(path) {

    }
}

module.exports = API;