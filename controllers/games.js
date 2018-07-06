const axios    = require('axios');
require("dotenv").config();
// fields
let games = [];
let { API_KEY } = process.env;

let updateJson = gameData => {
        return gameData.map(dataGameObj => {
            let {name, id}  = dataGameObj;
            let popularity  = (dataGameObj.hasOwnProperty("popularity")) ? dataGameObj.popularity         : null;
            let cover       = (dataGameObj.hasOwnProperty("cover"))      ? dataGameObj.cover.url          : null;
            let hypes       = (dataGameObj.hasOwnProperty("hypes"))      ? dataGameObj.hypes              : null;


            return  {name, id, cover, popularity, hypes};
    })
}

module.exports = {
    searchGames: (req, res) => {
        let query = decodeURI(req.params.name);
        console.log(req.params);
        axios.get(`https://api-endpoint.igdb.com/games/?search=${ query }&fields=name,popularity,cover,hypes`, {
            headers: {
                "user-key"  : API_KEY,
                Accept      : "application/json"
            }

        }).then(result => {
            res.status(200).send(updateJson(result.data)); 
        })  
    }
    , 
    searchPopularGames: (req, res) => {
        axios.get("https://api-endpoint.igdb.com/games/?fields=*&order=popularity:desc", {
            headers: {
                "user-key": API_KEY,
                Accept: "application/json"
            }
        }).then(result => {  
            res.status(200).send(updateJson(result.data));
        })
    }
    ,
    getMyGames: (req, res) => {
        res.status(200).send(games);
    }
    ,
    addGame: (req, res) => {
        let {
            name,
            id,
            cover,
            popularity,
            hypes
                        } = req.body; 
            games.push({name, id, cover, popularity, hypes});
            res.status(200).send(games);
    }
    , 
    deleteGame: (req, res)=> {
        let index = games.findIndex(game => game.id === Number(req.params.id));

        if (index === -1) {
            return res.status(404).send('No game to delete with that id');
        } 
        games.splice(index, 1);
        res.send(index);
    }
}


//require("dotenv").config();
// const { API_KEY } = process.env;