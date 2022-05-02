const locales = require("./locales");

function validateLatLng(lat, lng) {    
    let pattern = new RegExp('^-?([1-8]?[1-9]|[1-9]0)\\.{1}\\d{1,6}');
    return pattern.test(lat) && pattern.test(lng);
}

function validateLocale(val) {
    return locales.findIndex(l => l.code === val) > -1;
}

function buildURLWithParams(url, params) {
    if (url === "" || typeof params !== "object") return url;
    if (Object.keys(params).length === 0) return url;
    
    let temp = "?" + Object.keys(params).map(p => params[p] ? `${p}=${params[p]}` : "").join("");
    console.log(temp);
    return `${url}${temp}`;
}

module.exports = {
    validateLatLng,
    validateLocale,
    buildURLWithParams
}