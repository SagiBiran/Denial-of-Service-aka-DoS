const express = require("express");
const rateLimit = require("express-rate-limit");
const ipgeoblock = require("node-ipgeoblock");

var a = [];

// Storing the express function in variable application
const applicaion = express();

applicaion.use(ipgeoblock({
    geolite2: "./GeoLite2-Country.mmdb",
    blocked: ["192.168.50.125", "192.168.50.101", "192.168.50.130"],
    blockedCountries: [ "FR", "GB", "DE" ],
}));


// Calling the ratelimiter function with its options
// max: Contains the maximum number of requests
// windowsMs: Contains the time in milliseconds to receive max requests
// message: message to be shown to the user on rate-limit
applicaion.use(rateLimit({
   max: 10,
   windowMs: 60 * 60 * 1000,
   message: "Too many request from this IP"
}));

// GET route for handling the user requests
applicaion.get("/", (req, res) => {
    console.log(req.connection.remoteAddress) // ip address of the user
        for (let i = 0; i < 100000; i++){
            a.push(i)
        }
    res.send('Server online!');
});

// Server Setup
const port = 9999;
applicaion.listen(port, () => {
   console.log(`app is running on port ${port}`);
});

// sudo docker build -t server .

// sudo docker run -it --cpus=".5" --name server --network host server

// sudo docker run -it --name server --network host server

