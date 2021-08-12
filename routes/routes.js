var express = require('express')
var app = express()
var util = require('util');
var router = express.Router()
var bodyParser = require('body-parser');
var bookingCtrl = require('../controllers/bookingCtrl')
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

router.get('/api/allocate/:numOfSeats', bookingCtrl.allocate_seats)
router.get('/api/seat/sold/:seatToSold', bookingCtrl.sold_seats)
router.get('/api/seat/backToAvail/:seatToAvail', bookingCtrl.back_to_avail)

app.use('/', router)

module.exports = app;