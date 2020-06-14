// EVERY ROUTE IS A standalone app
// directly render the ejs file
// render and sending the addtional data in a dict
// we rafacto the code and cand take it to another file
// every file will be considered as a another app
// and tradition is this app is called router


const express = require('express');
const speakerRoute = require('./speakers');
const feedbackRouter = require('./feedback');
const router = express.Router();


// connect this app with other
// with thr require
// so one import will call everything


// we can take a whole code blog and send them as object
// this app will be called from the server.js so file spath wilbe 
// rellated to server js






// after the writing param 
module.exports = params => {
    router.get('/', (req, res) => {
        res.render('pages/index', { pageTitle: "Welcome to My app" });
    });

    // now call the speakers and the feed back
    router.use('/speakers', speakerRoute(params));
    router.use('/feedback', feedbackRouter(params));



    return router;

}


// now you call one all will be loded

// ONE CALL LOAD THE INDEX and theindex will also load the speakers
// and feedback



//module.exports = router;