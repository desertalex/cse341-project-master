const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('pages/prove01', {
        title: 'Prove 01',
        path: '/prove01',
    });
});

router.post('/', (req, res, next) => {
    const mood = req.body.mood;
    var response = ""
    if (mood == "happy") {
        response = 'Hello ${req.body.name}, I am glad you are feeling happy today!'
    } else if (mood == 'sad') {
        response = 'Hello ' + req.body.name + ', I hope you start feeling better.'
    }

    res.render('pages/prove01response', {
        title: 'Prove 01 Response',
        name: response,
        path: 'pages/prove01response'
    });
});

module.exports = router;