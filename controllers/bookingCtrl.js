var helper = require('../helper/default_helper')
var bookingModel  = require('../models/bookingModel')

exports.allocate_seats = async function (req, res) {

    console.log(req.params.numOfSeats, seats);
    var number_of_seats = req.params.numOfSeats;
    var seats = await bookingModel.get_available_seats(number_of_seats)
    console.log('data:', seats );

    if(seats.length == number_of_seats)
    {
        var seat_ids = helper.array_column(seats,'seat_id');
        console.log('seat_ids:', seat_ids );
         var response = await bookingModel.reserve_seats(seat_ids);

          if (response.affectedRows >0) {
            helper.res.message = 'Seats successfully allocate';
            helper.res.data = seat_ids;
            helper.res.response_code = 200;
            res.json(helper.res)
            return;
         }
    }

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

const cntConsecutiveElements = (seats,requiredCount) => {
       let result = "";
       let counter = 0;
       var constItem =[];
     for (let i = 0; i < seats.length; i++) {
            if (seats[i].rank_order === seats[i + 1].rank_order + 1) {
                constItem.push(seats[i]);
                  counter++;
            
        } else {
                  result += seats[i] + counter;
                  counter = 1;
        }
    }
   return result;

}

