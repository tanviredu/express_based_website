
const express = require('express');
const router = express.Router();



// just like django url
// start after the /speakers
module.exports = params => {
    const  { feed } = params;
    router.get('/', async (req, res) => {
        const feedback = await feed.getList();
        return res.json(feedback);
    });

    router.post('/', (req, res) => {
        return res.send('feedback from posted');

    })


    return router;

}
