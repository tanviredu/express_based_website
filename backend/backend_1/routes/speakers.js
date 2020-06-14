
const express = require('express');
const router = express.Router();



// just like django url
// start after the /speakers
module.exports = params => {
    const { speak } = params;
    router.get('/', async (req, res) => {
        const speakers = await speak.getList();
        //return res.send('speakers list');
        return res.json(speakers)
    });

    router.get('/:shortname', (req, res) => {


        //return res.send(`Detail page of ${req.params.shortname}`);
            
    })


    return router;

}
