var express = require('express');
var router = express.Router();
var db = require('../database');

const bodyParser = require('body-parser');
const { name } = require('ejs');
const { render } = require('../app');

/* GET users listing. */
router.get('/booking/find-slot', function (req, res, next) {

    if (req.session.loggedinUser) {


        // res.redirect('/booking/booking-success');
        res.render('booking-success');

        console.log("/booking/find-slot Get method of click-to-book");

    } else {
        res.redirect('/login');
    }

});

router.post('/booking/find-slot', function (req, res, next) {

    if (req.session.loggedinUser) {


        // res.redirect('/booking/booking-success');
        res.render('booking-success');
        console.log("/booking/find-slot Post method of Click-to-book");

    } else {
        res.redirect('/login');
    }

});



module.exports = router;