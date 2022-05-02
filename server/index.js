const axios = require("axios").default;
const express = require("express");
const cors = require("cors");

const YelpAPI = require("./yelp");

const PORT = 3000;
const app = express();
const yelp = new YelpAPI();

app.use(cors());

app.get("/autocomplete", async (req, res) => {
    try {
        const {
            text,
            latitude,
            longitude,
            locale
        } = req.query;
        
        const data = await yelp.autocomplete(text, latitude, longitude, locale);
        res.status(200).json({ status: "SUCCESS", data });
    } catch (ex) {
        console.log(ex);
        res.status(500).json({status: "ERROR", message: ex.message });
    }
});

app.listen(PORT, () => console.log("server started..."));