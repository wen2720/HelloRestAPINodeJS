// Axios module is for sending message.
const oAxios = require("axios");
//Developer API key
const vPaperAccountApiKeyWen = require("./ApiKey.json");

const oExpress = require("express");
const oRouter = oExpress.Router();

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

oRouter.get('/account', (request, response) => {
    const tradingAgentInfo = async() => {
      oAxios.get(vPaperAccount, 
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

module.exports = oRouter;
  