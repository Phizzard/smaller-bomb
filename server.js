const express = require('express');
const giantbomb = require('giantbomb');
const app = express();
const port = 3001;
const GB_API_KEY = '09dc277eefa643ac45893ff6e2812e12a0335fd6';
const gb = giantbomb(GB_API_KEY);
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/videos', (req, res)=>{
    const options = {
        page: req.query.page || 1,
        perPage: req.query.perPage || 12,
        filters: [
            {field: 'name', value: req.query.searchTerm}
        ]
    };

    gb.videos.list(options, (err, response, json)=>{
        if(err){
            res.send(err);
        } else {
            res.send(json);
        }
        
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))