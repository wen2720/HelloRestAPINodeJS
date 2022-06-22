/* Include external modules and initializations */
// Cloud function firebase module
const oFunctions = require("firebase-functions");
// firebase administration package for the application

// Express middleware object, helps routes and manage server
const oExpress = require("express");
// Cross-Origin Resource Sharing object
const oCors = require("cors");


// Instance of express object
const oApplication = oExpress();
//const oRouter = tMiddleMan.Router();
oApplication.use( oCors( {origin: true}));
// REST API routing and packaging section
// HelloWorld
oApplication.get('/hello-world', (req,res) => {
    //  res.send('Hello World From Wenhao');
    return res.status(200).send('Hello World From Wenhao');
});

// REST API lemon markets Router
oApplication.use(require("./Routes/LemonMarketsAdmin/lemonMarkets"));

exports.oApplication = oFunctions.https.onRequest(oApplication);






	


