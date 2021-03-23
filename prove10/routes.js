
const express = require('express');
const router = express.Router();
const fs = require('fs')

// Path to your JSON file, although it can be hardcoded in this file.
var dummyData = require('./ta10-data.json');

router.get('/', (req, res, next) => {
    res.render('./view', { // pages/teamActivities/ta10
        title: 'Team Activity 10',
        path: '/teamActivities/10',
    });
});

router.get('/fetchAll', (req, res, next) => {
    res.json(dummyData);
});

router.post('/insert', (req, res, next) => {
    avengerName = req.body.name;
    if (dummyData.avengers.some(n => n.name === avengerName)) {
        res.json({ status: 400, message: 'Name already exists' });
    } else {
        dummyData.avengers.push({name: avengerName})
        res.json({ status: 200, message: 'Avengers reset' });
    }
});

router.post('/reset', (req, res, next) => {
    fs.readFile('./prove10/ta10-data.json', 'utf8', (err, jsonString) => {
        dummyData = JSON.parse(jsonString); //json string is undefined
    });
    res.json({ status: 200, message: 'Avengers reset' });
});

module.exports = router;