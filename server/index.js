const express = require("express");
const bodyParser = require("body-parser"); // so that we can use req.body, otherwise req.body will be undefined "BODY"!
const gamesCtrl = require("./controllers/games.js"); // Import gamesCtrlController so that I can implement them into my endpoints
const axios = require("axios");
const port = 3006;
require("dotenv").config();

// Top-level middleware
const app = express();
app.use(express.static(__dirname + "/build")); // app.use() --> middleware that runs every request
app.use(bodyParser.json());

// Endpoints-local Server
app.get("/api/games/mygames", gamesCtrl.getMyGames);
app.post("/api/games/mygames", gamesCtrl.addGame);
app.delete("/api/games/mygames/:id", gamesCtrl.deleteGame);

// Endpoints - External API
app.get("/api/games/search/:name", gamesCtrl.searchGames);
app.get("/api/games/popular", gamesCtrl.searchPopularGames);

let { SERVER_PORT } = process.env;
app.listen(SERVER_PORT, () => {
  console.log(`You are in Port: ${SERVER_PORT}`);
});
