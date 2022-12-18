const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors({
    origin: ['https://www.section.io.', 'https://www.google.com'],
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

/*app.use(cors({
    origin: '*'
}));*/

/* 
const whitelist = ['https://www.section.io.', 'https://www.google.com']
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error())
    }
  }
}
*/


app.get('/ingredients', cors(), (req, res, next) => {
    res.send(ingredients);
});

    const ingredients = [
    {
        "id": "1",
        "item": "Bacon"
    },
    {
        "id": "2",
        "item": "Eggs"
    },
    {
        "id": "3",
        "item": "Milk"
    },
    {
        "id": "4",
        "item": "Butter"
    }
];

app.get('/ingredients', (req, res) =>{
    res.send(ingredients);
});
app.listen(6069);