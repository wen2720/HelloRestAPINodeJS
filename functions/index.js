/* Include external modules and initializations */
// Axios module is for sending message.
const axios = require("axios");
//Developer API key
const vPaperAccountApiKeyWen = require("../LemonMarkets/ApiKey.json");

// Cloud function firebase module
const oFunctions = require("firebase-functions");
// firebase administration package for the application

// Express middleware object, helps routes and manage server
const oMiddleMan = require("express");
// Cross-Origin Resource Sharing object
const oTrustedAgent = require("cors");

// Instance of express object
const oApplication = oMiddleMan();
//const oRouter = tMiddleMan.Router();

// REST API routing and packaging section
// HelloWorld
oApplication.get('/hello-world', (req,res) => {
    //  res.send('Hello World From Wenhao');
    return res.status(200).send('Hello World From Wenhao');
})
//Paper Lemon Markets
const vPaperLemonMarket = "https://paper-trading.lemon.markets/v1";

//Paper Account Info
const vPaperAccount = vPaperLemonMarket + "/account";

//Paper Orders of an Account 
const vPaperOrder =  vPaperLemonMarket + "/orders";

//Real Market
const market = "https://data.lemon.markets/v1";

//Real Stocks
const instrument = market + "/instruments";

oApplication.get('/account', (request, response) => {
  const tradingAgentInfo = async() => {
    axios.get(vPaperAccount, 
        {
            headers:vPaperAccountApiKeyWen
        })
        .then((lemonResponse) => {
          //console.log(lemonResponse.data);
          response.json({data: lemonResponse.data})
        })
        .catch((e) => {
          console.log(e);
        });    
  }
  tradingAgentInfo();
});

exports.oApplication = oFunctions.https.onRequest(oApplication);






	


