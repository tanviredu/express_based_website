const express = require('express');
const path = require('path');
const routes = require('./routes');

// this are the business logic part
const feedbacksv = require('./services/FeedBackservice')
const speakersv = require('./services/SpeakerService');
const feed = new feedbacksv('./data/feedback.json');
const speak = new speakersv('./data/speakers.json')


const app = express();
const port = 3000;

// set the template and the path
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));



/*
 sample middleware logic
 app.use((req,res,next)=>{
     // do someting
    // and if it is satisfied then do to the next part
    next();
 });
 
 */

app.use(express.static(path.join(__dirname, './static')));

// this mounting app will be after the static

app.use('/', routes(
    {
        feed,
        speak
    }
));







// SERVER PORTION (RUNS FROM HERE)
app.listen(port, (req, res) => {
    console.log(`[*] SERVER IS STARTING ${port}`);
});