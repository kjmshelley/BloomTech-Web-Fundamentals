const API = require("./API");
const {
    validateLatLng,
    validateLocale,
    buildURLWithParams
} = require("./utils");

class Yelp {
    constructor(url) {
        this.url = url;
        this.API = new API("P4AoJYUkv91ZEUnfET5b4e9pvlVXWjrMeChk9_GOJpyvLq1l8do5TNtlEZC6u7H6lwe7MARfbeGl9MI-GfluiQ-sptB0vQsZZySI_kf1O9O1zqp4abswdRCvIlBeYnYx");
    }

    /**
     * This endpoint returns autocomplete suggestions for search
     * keywords, businesses and categories, based on the input text.
     * 
     * @param {string} text - Required. Text to return autocomplete suggestions for.
     * @param {number} latitude - Required if want to get autocomplete suggestions for businesses. Latitude of the location to look for business autocomplete suggestions.
     * @param {number} longitude - Required if want to get autocomplete suggestions for businesses. Longitude of the location to look for business autocomplete suggestions.
     * @param {string} locale - Optional. Specify the locale to return the autocomplete suggestions in. See here (https://www.yelp.com/developers/documentation/v3/supported_locales) for a list of supported locales. Defaults to en_US.
     * @return {Suggestion[]} 
     */
    async autocomplete(text, latitude, longitude, locale) {
        if (!text) throw Error("ERROR: Please provide search text");
        if((latitude && longitude) && !validateLatLng(latitude, longitude)) throw Error("ERROR: Please provide valid latitude and longitude values");
        if (locale && !validateLocale(locale)) throw Error("ERROR: Please provide valide locale value");

        const u = buildURLWithParams("/autocomplete", { text, latitude, longitude, locale });
        const data = await this.API.get(u);
        return data;   
    }
}

module.exports = Yelp;