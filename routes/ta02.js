//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();

const usernames = []

router.get('/',(req, res, next) => {
    const userpeople = this.users;
    res.render('pages/ta02', { 
        title: 'Team Activity 02', 
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        usernames: userpeople
    });
});

router.post('/addUser', (req, res, next) => {
    usernames.push({fname: req.body.fname});
    res.redirect('/ta02');
})

router.post('/removeUser', (req, res, next) => {
    this.users.remove
    res.redirect('/ta02');
})

module.exports = router;
exports.users = usernames;