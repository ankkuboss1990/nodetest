var helper = require('../helper/default_helper')
var bookingModel  = require('../models/bookingModel')

exports.allocate_seats = async function (req, res) {

    console.log(req.params.numOfSeats, seats);
    var number_of_seats = req.params.numOfSeats;
    var seats = await bookingModel.get_available_seats(number_of_seats)
    console.log('data:', seats );
//select distinct t1.* from seats t1 join seats t2 on t2.row = t1.row and ABS(t1.rank_order - t2.rank_order) = 1 where t1.status='A' and t2.status='A' and t1.row='a' order by t1.rank_order ASC
     if(seats.length < number_of_seats)
     {
          helper.res.message ='No cosicutive seats available.';
          helper.res.data = [];
          helper.res.response_code =200;
          res.json(helper.res)
          return;
     }

}

exports.sold_seats = async function (req, res) {

    var seatToSold = req.params.seatToSold.split(',') ;
    var response = await bookingModel.sold_seats(seatToSold)
   
    if (response.affectedRows >0) {
        helper.res.message = 'Status updated Successfully';
        helper.res.data = [];
        helper.res.response_code = 200;
        res.json(helper.res)
        return;
    }
    else{
        helper.res.message = 'Problem while Status update';
        helper.res.data = [];
        helper.res.response_code = 500;
        res.json(helper.res)
        return;
    }

}

exports.back_to_avail = async function (req, res) {

    var seatToAvail = req.params.seatToAvail.split(',');
    var response = await bookingModel.back_to_avail(seatToAvail)

    if (response.affectedRows > 0) {
        helper.res.message = 'Status updated Successfully';
        helper.res.data = [];
        helper.res.response_code = 200;
        res.json(helper.res)
        return;
    }
    else {
        helper.res.message = 'Problem while Status update';
        helper.res.data = [];
        helper.res.response_code = 500;
        res.json(helper.res)
        return;
    }

}

