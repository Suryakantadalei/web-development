var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/booking/booking-success', function (req, res, next) {

    res.render('booking-success');
    console.log("Booking Success");
    
});
module.exports = router;