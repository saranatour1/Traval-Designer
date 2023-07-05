require("dotenv").config();
const fetch = require("node-fetch");
const API_Key = process.env.TRIP_ADVISOR_API_KEY;

module.exports = {
  findNearbyPlaces: (req, res) => {
    const latLong = req.params.latLong;

    // 10 API requests
    const url = `https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong=${latLong}&radius=20&radiusUnit=km&key=${API_Key}&language=en`;
    const options = { method: "GET", headers: { accept: "application/json" } };
    fetch(url, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((json) => {
        return res
          .status(200)
          .json({ message: "Successfully searched nearby places", json });
      })
      .catch((error) => {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal server error" });
      });
  },
  // SearchQuery by search term , get redirected to trip advisor post

  searchByString: (req, res) => {
    const searchTxt = req.params.searchParam;
    const url = `https://api.content.tripadvisor.com/api/v1/location/search?searchQuery=${searchTxt}&radius=60&radiusUnit=km&key=${API_Key}`;
    const options = { method: "GET", headers: { accept: "application/json" } };
    if(req.body){
      console.log( req.params.searchParam)
    }
    if(searchTxt <1){
      return res.status(400).json({ message: "please enter at least more than 3 charecters" });
    }
    if (!searchTxt || searchTxt.trim() ===''){
      return res.status(400).json({ message: "please enter at least more than 3 charecters" });
    }

    fetch(url, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((json) => {
        return res
          .status(200)
          .json({ message: "Successfully searched nearby places", json });
      })
      .catch((err) => {
        console.error("error:" + err);
        return res.status(500).json({ message: "Internal server error" });
      });
  },

  findImage: (req, res) => {
    const locationId = req.params.locationId;
    const url = `https://api.content.tripadvisor.com/api/v1/location/${locationId}/photos?language=en&key=${API_Key}`;
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        return res
          .status(200)
          .json({
            message: "Successfully retrieved location images",
            data: json,
          });
      })
      .catch((err) => {
        console.error("Error:", err);
        return res.status(500).json({ message: "Internal server error" });
      });
  },
};
